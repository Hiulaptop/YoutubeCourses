import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scanDirs = [
  "data",
  "ToanRoiRac/ReWrite"
];

const errorRules = [
  {
    id: "single-dollar-list-block",
    message: "Multi-line single-$ math block inside a list item. Use $$...$$ on one line for list-safe display math.",
    pattern: /(^|\n)([ \t]*(?:[*+-]|\d+\.)[ \t]+)\$[ \t]*\n([\s\S]+?)\n[ \t]*\$[ \t]*(?=\n|$)/g
  },
  {
    id: "single-dollar-indented-block",
    message: "Indented multi-line single-$ math block. This often escapes the intended Markdown list/block context.",
    pattern: /(^|\n)([ \t]{4,})\$[ \t]*\n([\s\S]+?)\n\2\$[ \t]*(?=\n|$)/g
  },
  {
    id: "single-dollar-standalone-block",
    message: "Standalone multi-line single-$ math block. Use a proper $$...$$ display block instead.",
    pattern: /(^|\n)([ \t]{0,3}(?:>[ \t]*)*)\$[ \t]*\n([\s\S]+?)\n\2\$[ \t]*(?=\n|$)/g
  }
];

const warningRules = [
  {
    id: "top-level-display-spacing",
    message: "Top-level $$ block is attached to the previous line. Add a blank line before it for predictable Markdown parsing.",
    pattern: /([^\n])\n(?=\$\$\n)/g
  },
  {
    id: "deprecated-exist",
    message: "Prefer \\exists instead of \\exist. The renderer currently aliases it, but the source should still be corrected.",
    pattern: /\\exist\b/g
  },
  {
    id: "fallback-math-span",
    message: "Inline math contains quotes or Vietnamese text and will use the fallback renderer instead of full KaTeX.",
    pattern: /\$[^$\n]*(["“”]|[À-ỹĐđ])[^$\n]*\$/g
  }
];

function splitMarkdownSegments(text) {
  const segments = [];
  const fencePattern = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2[ \t]*(?=\n|$)/g;
  let lastIndex = 0;
  let match;

  while ((match = fencePattern.exec(text)) !== null) {
    const fenceStart = match.index + match[1].length;
    if (lastIndex < fenceStart) {
      segments.push({ type: "markdown", content: text.slice(lastIndex, fenceStart), startIndex: lastIndex });
    }

    segments.push({ type: "code", content: text.slice(fenceStart, fencePattern.lastIndex), startIndex: fenceStart });
    lastIndex = fencePattern.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "markdown", content: text.slice(lastIndex), startIndex: lastIndex });
  }

  return segments;
}

function getLineNumber(text, index) {
  let line = 1;
  for (let current = 0; current < index; current += 1) {
    if (text.charCodeAt(current) === 10) {
      line += 1;
    }
  }
  return line;
}

function recordMatches({ filePath, text, segment, rules, severity, findings }) {
  for (const rule of rules) {
    const pattern = new RegExp(rule.pattern.source, rule.pattern.flags);
    let match;

    while ((match = pattern.exec(segment.content)) !== null) {
      const matchIndex = segment.startIndex + match.index + (match[1] === "\n" ? 1 : 0);
      findings.push({
        severity,
        rule: rule.id,
        message: rule.message,
        filePath,
        line: getLineNumber(text, matchIndex)
      });

      if (match[0].length === 0) {
        pattern.lastIndex += 1;
      }
    }
  }
}

async function collectMarkdownFiles(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const findings = [];
  const markdownFiles = [];

  for (const relativeDir of scanDirs) {
    const absoluteDir = path.join(rootDir, relativeDir);
    markdownFiles.push(...await collectMarkdownFiles(absoluteDir));
  }

  for (const filePath of markdownFiles) {
    const text = await readFile(filePath, "utf8");
    for (const segment of splitMarkdownSegments(text)) {
      if (segment.type !== "markdown") {
        continue;
      }

      recordMatches({ filePath, text, segment, rules: errorRules, severity: "error", findings });
      recordMatches({ filePath, text, segment, rules: warningRules, severity: "warning", findings });
    }
  }

  const relativeFindings = findings
    .map((finding) => ({
      ...finding,
      filePath: path.relative(rootDir, finding.filePath) || finding.filePath
    }))
    .sort((left, right) => {
      if (left.filePath !== right.filePath) {
        return left.filePath.localeCompare(right.filePath, "vi");
      }
      return left.line - right.line;
    });

  if (relativeFindings.length === 0) {
    console.log("Markdown validation passed: no risky math patterns found.");
    return;
  }

  for (const finding of relativeFindings) {
    console.log(`${finding.severity.toUpperCase()} ${finding.filePath}:${finding.line} [${finding.rule}] ${finding.message}`);
  }

  const errorCount = relativeFindings.filter((finding) => finding.severity === "error").length;
  const warningCount = relativeFindings.length - errorCount;
  console.log(`\nSummary: ${errorCount} error(s), ${warningCount} warning(s).`);

  if (errorCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
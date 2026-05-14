from __future__ import annotations

import re
import subprocess
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parent
RAW_DIR = ROOT_DIR / "Raw"
REWRITE_DIR = ROOT_DIR / "ReWrite"
PDF_NAME_PATTERN = re.compile(r"Chuong\s+(\d+)\.pdf$", re.IGNORECASE)


def get_chapter_number(pdf_path: Path) -> int:
    match = PDF_NAME_PATTERN.search(pdf_path.name)
    if match is None:
        raise ValueError(f"Unsupported PDF name: {pdf_path.name}")
    return int(match.group(1))


def extract_pdf_text(pdf_path: Path) -> str:
    result = subprocess.run(
        [
            "pdftotext",
            "-enc",
            "UTF-8",
            "-layout",
            "-nopgbrk",
            str(pdf_path),
            "-",
        ],
        check=True,
        capture_output=True,
    )
    return result.stdout.decode("utf-8", errors="replace").rstrip() + "\n"


def main() -> None:
    REWRITE_DIR.mkdir(parents=True, exist_ok=True)

    pdf_files = sorted(RAW_DIR.glob("*.pdf"), key=get_chapter_number)
    if not pdf_files:
        raise FileNotFoundError(f"No PDF files found in {RAW_DIR}")

    for pdf_path in pdf_files:
        chapter_number = get_chapter_number(pdf_path)
        output_path = REWRITE_DIR / f"Chapter-{chapter_number}.md"
        output_path.write_text(extract_pdf_text(pdf_path), encoding="utf-8")
        print(f"Wrote {output_path.relative_to(ROOT_DIR)}")


if __name__ == "__main__":
    main()
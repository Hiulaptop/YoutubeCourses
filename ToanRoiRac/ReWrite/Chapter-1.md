# Chương I: Cơ sở logic

## I. Mệnh đề logic

### 1.1 Khái niệm

Mệnh đề logic (gọi tắt là mệnh đề) là một câu phát biểu về một lĩnh vực nào đó, đúng hoặc sai một cách khách quan. Tính đúng hoặc sai của một mệnh đề được xác định từ chính nội dung của mệnh đề đó mà không phụ thuộc vào người phát biểu.

Tính đúng hoặc sai của một mệnh đề được gọi là chân trị (hay giá trị chân lý) của mệnh đề đó. Ta thường sử dụng các số nhị phân $1$ và $0$ để thể hiện chân trị đúng và sai của một mệnh đề.

### 1.2 Phân loại mệnh đề

Một mệnh đề được xếp vào một trong hai loại sau đây:

- **Mệnh đề sơ cấp**: không sử dụng trạng từ **KHÔNG** trong phát biểu và không thể chia thành các mệnh đề nhỏ hơn.
- **Mệnh đề phức hợp**: có sử dụng trạng từ **KHÔNG** (hàm ý phủ định) trong phát biểu hoặc có thể chia thành các mệnh đề nhỏ hơn bằng cách sử dụng các từ nối như: **và**, **hay**, **suy ra**, **kéo theo**, **nếu … thì**, **tương đương**, **nếu và chỉ nếu**, **khi và chỉ khi**, **điều kiện cần**, **điều kiện đủ**, **điều kiện cần và đủ**, **hoặc**, …

**Ví dụ**:

- $A$ = “Tháng giêng của mỗi năm đều có 30 ngày” là mệnh đề sơ cấp.
- $B$ = “22 **không** chia hết cho 5” và $C = “4 \le 1”$ là các mệnh đề phức hợp.

## II. Các phép nối logic (các phép toán mệnh đề)

Cho các mệnh đề $P$ và $S$.

### 2.1 Mệnh đề phủ định

Ký hiệu $\neg P$ là mệnh đề phủ định của $P$ (đọc là phủ định $P$). $\neg P$ phát biểu các khả năng, các trường hợp còn lại mà $P$ chưa phát biểu. Chân trị của $\neg P$ trái ngược với chân trị của $P$.

| $P$ | $\neg P$ |
| --- | --- |
| 1 | 0 |
| 0 | 1 |

**Ví dụ**:

- $A = “3 \gt 8”$ có $\neg A = “3 \le 8”$.
- $C$ = “Tuổi của An khoảng từ 18 đến 20” có $\neg C$ = “Tuổi của An ít hơn 18 hoặc nhiều hơn 20”.

### 2.2 Mệnh đề hội (phép nối liền)

Ký hiệu $P \wedge Q$ là mệnh đề hội của $P$ và $S$ (đọc là $P$ hội $S$, $P$ và $S$). $P \wedge Q$ chỉ đúng khi $P$ và $S$ cùng đúng.

| $P$ | $S$ | $P \wedge Q$ |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |

### 2.3 Mệnh đề tuyển (phép nối rời)

Ký hiệu $P \vee Q$ là mệnh đề tuyển của $P$ và $S$ (đọc là $P$ tuyển $S$, $P$ hay $S$). $P \vee Q$ chỉ sai khi $P$ và $S$ cùng sai.

| $P$ | $S$ | $P \vee Q$ |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

### 2.4 Mệnh đề kéo theo

Ký hiệu $P \rightarrow Q$ là mệnh đề kéo theo của $P$ và $Q$ (đọc là $P$ kéo theo $Q$, $P$ suy ra $Q$, nếu $P$ thì $Q$). $P \rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai.

| $P$ | $S$ | $P \rightarrow Q$ |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 1 |
| 0 | 0 | 1 |

**Nhận xét từ bảng chân trị của $P \rightarrow Q$:**

- Nếu $P$ sai thì $(P \rightarrow Q)$ đúng, bất chấp chân trị của $Q$.
- Nếu $Q$ đúng thì $(P \rightarrow Q)$ đúng, bất chấp chân trị của $P$.

Chẳng hạn cho $D = [ A \rightarrow (B \rightarrow C) ]$ với $B$ là mệnh đề sai và $A$, $C$ là các mệnh đề có chân trị tùy ý. Mệnh đề phức hợp $D$ có chân trị đúng bất chấp chân trị của $A$ và $C$.

### 2.5 Mệnh đề tương đương

Ký hiệu $P \leftrightarrow Q$ là mệnh đề tương đương của $P$ và $S$.

Đọc là: $P$ **tương đương** $Q$, $P$ **nếu và chỉ nếu** $Q$, $P$ **khi và chỉ khi** $Q$.

Ta có:

$P \leftrightarrow Q ≡ (P \rightarrow Q) ∧ (Q \rightarrow P)$.

$P \leftrightarrow Q$ chỉ đúng khi $P$ và $S$ có cùng chân trị.

| $P$ | $S$ | $P \leftrightarrow Q$ |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

### 2.6 Thứ tự ưu tiên của các phép nối logic

Ta xếp hạng độ ưu tiên như sau:

1. Ưu tiên cao nhất là dấu ngoặc
2. Ưu tiên thứ hai là phép phủ định
3. Phép $\wedge$ và phép $\vee$ có cùng độ ưu tiên thứ 3
4. Cuối cùng là các phép toán $\rightarrow$ và $\leftrightarrow$ có cùng độ ưu tiên

Khi có mặt đồng thời hai phép toán có độ ưu tiên ngang nhau thì dùng dấu ngoặc để người đọc biết phép toán nào được thực hiện trước. Ta cũng sử dụng các dấu ngoặc để thay đổi thứ tự ưu tiên theo ý muốn.

Cho các mệnh đề $A$, $B$ và $C$:

- Các biểu thức $(A \vee B) \wedge C$, $A \vee (B \wedge C)$, $(A \rightarrow B) \leftrightarrow C$, $A \rightarrow (B \leftrightarrow C)$, $(A \rightarrow B) \vee C$, $(A \leftrightarrow B) \wedge C$ đều mang hàm ý rằng phép toán trong ngoặc được thực hiện trước.

### 2.7 Bảng chân trị của mệnh đề phức hợp

$A$ là mệnh đề phức hợp được tạo từ các mệnh đề sơ cấp $P_1$, $P_2$, ..., $P_n$. Muốn xét chân trị của $A$, ta cần xét chân trị của các mệnh đề trung gian.

Có $2^n$ khả năng xảy ra khi xét chân trị đồng thời của $P_1$, $P_2$, ..., $P_n$. Bảng chân trị của $A$ có $2^n$ cột tương ứng với mỗi khả năng chân trị đó.

**Ví dụ**:
Cho các mệnh đề sơ cấp $P$, $S$, $R$ và mệnh đề phức hợp:

$A = { [ (P \vee Q) \wedge (\neg P \rightarrow R) ] \leftrightarrow \neg R }$.

Để xét chân trị của $A$, ta cần xét các mệnh đề trung gian theo thứ tự:

- $B = (P \vee Q)$
- $\neg P$
- $C = (\neg P \rightarrow R)$
- $D = (B \wedge C)$
- $\neg R$

Trong 8 trường hợp chân trị đồng thời của $P$, $S$ và $R$, mệnh đề $A$ chỉ đúng trong 3 trường hợp và sai trong 5 trường hợp còn lại. Do đó xác suất để mệnh đề $A$ đúng là $(3/8) = 37,5 \% $ và sai là $(5/8) = 62,5 \%$.

| $P$ | $S$ | $R$ | $B = (P \vee Q)$ | $\neg P$ | $C=(\neg P \rightarrow R)$ | $D = (B \wedge C)$ | $\neg R$ | $A = (D \leftrightarrow \neg R)$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |

## III. Các dạng mệnh đề

### 3.1 Khái niệm

Biến mệnh đề là nơi để thay vào các dạng mệnh đề khác nhau.

Dạng mệnh đề là một cấu trúc bao gồm các mệnh đề, các biến mệnh đề và các phép toán mệnh đề $\neg$, $\wedge$, $\vee$, $\rightarrow$, $\leftrightarrow$ liên kết các mệnh đề và biến mệnh đề.

Ví dụ: $F(p, q, r, s) = {(p \leftrightarrow \neg q) \vee [r \rightarrow (A \wedge \neg s)]} \wedge (q \vee B)$ là một dạng mệnh đề theo các biến mệnh đề $p, q, r, s$ và các mệnh đề $A = "\pi \gt \sqrt{11}" (Sai)$ và $B = "Nước \space sôi \space ở \space 100^\circ C \space dưới \space áp \space suất \space thường" (Đúng)$

### 3.2 Dạng mệnh đề hằng đúng và hằng sai

Cho dạng mệnh đề $F(p_1, p_2, ..., p_n)$ theo $n$ biến mệnh đề $p_1, p_2, ..., p_n$.

- Nếu $F$ luôn đúng (Bảnh chân trị của $F$ có dòng cuối toàn giá trị 1) bất chấp chân trị của $p_1, p_2, ..., p_n$ thì ta nói $F$ là hằng đúng và ta ký hiệu $F \Leftrightarrow 1$

- Nếu $F$ luôn sai (Bảnh chân trị của $F$ có dòng cuối toàn giá trị 0) bất chấp chân trị của $p_1, p_2, ..., p_n$ thì ta nói $F$ là hằng sai và ta ký hiệu $F \Leftrightarrow O$

## IV. Các luật logic

Cho các dạng mệnh đề $E = E(p_1, p_2, ..., p_n)$, $F = F(p_1, p_2,..., p_n)$ và $G = G(p_1, p_2, ..., p_n)$ theo $n$ biến mệnh đề $p_1, p_2, ..., p_n$. Ta có:

- Luật phủ định kép: $\overline{\overline{E}} = E$
- Luật luỹ đẳng: $E \wedge E = E$ **và** $E \vee E = E$
- Luật giao hoán: $F \wedge E = E \wedge F$ **và** $F \vee E = E \vee F$
- Luật phủ định De Morgan: $\neg(E \wedge F) = \neg E \vee \neg F$ **và** $\neg(E \vee F) = \neg E \wedge \neg F$
- Luật phân phối: $[E \wedge (F \vee G)] \Leftrightarrow [(E \wedge F) \vee (E \wedge G)]$ **và** $[E \vee (F \wedge G)] \Leftrightarrow [(E \vee F) \wedge (E \vee G)]$
- Luật hấp thu: $E \wedge (E \vee F) \Leftrightarrow E$ **và** $E \vee (E \wedge F) \Leftrightarrow E$
- Luật kết hợp: $[(E \wedge F) \wedge G] \Leftrightarrow[E \wedge (F \wedge G)] \Leftrightarrow[E \wedge F \wedge G]$ **Và tương tự cho phép $\vee$**
- Luật trung hoà: $(E \wedge 1) = E$ **và** $(E \vee 0) = E$
- Luật thống trị: $(E \wedge 0) = 0$ **và** $(E \vee 1) = 1$
- Luật bù: $(E \wedge \neg E) = 0$ **và** $(E \vee \neg E) = 1$
- Xoá hoặc phục hồi dấu $\rightarrow$: $(E \rightarrow F) \Leftrightarrow (\neg E \vee F)$
- Dùng để suy luận theo dạng phản đảo: $(E \rightarrow F) \Leftrightarrow (\neg F \rightarrow \neg E)$

## V. Mệnh đề lượng từ

### 5.1 Lượng từ

Cho tập hợp A và biến x lấy các giá trị trong A.

- Lượng từ phổ biến $\forall$ (với mỗi, với mọi, ...): $\forall x \in A$ với mỗi phần tử x thuộc về tập hợp A.
- Lượng từ tồn tại $\exists$ (tồn tại, có ít nhất 1, ...): $\exists x \in A$ tồn tại phần tử x thuộc tập hợp A.

### 5.2 Vị từ

$p(x_1, x_2, ..., x_n)$ là một vị từ theo $N$ biến khi $p$ là một câu phát biểu liên quan đến các biến $x_j$ và chân trị của $p$ phụ thuộc theo các biến $x_j$ với $x_j \in A_j (1 \le j \le N)$

Ví dụ:

- $p(x, y) = "(4x - 7y) \vdots 5"$ với $x \in \Z$ và $y \in \R$. Ta gọi $p(x, y)$ là lượng từ hai biến.

### 5.3 Mệnh đề lượng từ

Cho các tập hợp $A_j$ và các biến $x_j \in A_j (1 \le j \le N)$. Xét vị từ theo $N$ biến $p(x_1, x_2, .., x_n)$ và các lượng từ $\delta_1, \delta_2, ..., \delta_n \in \{ \forall, \exist \}$

- Ta xây dựng một mệnh đề lượng từ theo $N$ biến $x_1, x_2, ..., x_n$ là $A = "\delta_1 x_1 \in A_1, delta_2 x_2 \in A_2, ..., delta_n x_n \in A_n, p(x_1, x_2, ..., x_n)"$
- Qui ước $\overline\forall \equiv \exists$ và $\overline\exists \equiv \forall$, từ đó ta có thể suy ra được dạng phủ định của $A$.
- Ta có thể trực tiếp xét chân trị của $A$ nếu đơn giản hoặc xét gián tiếp $\overline{A}$ để suy ra chân trị của $A$.

### 5.4 Hoán đổi lượng từ

- Ta có thể hoán đổi hai lượng từ cùng loại đứng cạnh nhau.
- Không thể hoán đổi hai lượng từ khác loại đứng cạnh nhau.

## VI. Các qui tắc suy diễn

- Quy tắc phản đảo: $(P \Rightarrow Q) \equiv (\overline{Q} \Rightarrow \overline{P})$.
- Quy tắc nêu mâu thuẫn: $(P \Rightarrow Q) \equiv [(P \wedge \overline{Q}) \Rightarrow 0]$ Ta có thể chứng minh vế trái bằng cách chứng minh vế phải vô lý.
- Quy tắc hội tuyển đơn giản:
  - $[(P \wedge Q) \Rightarrow P]$ Hội đơn giản để xoá bớt thông tin Q không cần thiết.
  - $[P \Rightarrow (P \vee Q)]$ Tuyển đơn giản để thêm vào thông tin Q gây nhiễu.
- Qui tắc khẳng định:

$$
\left\{
    \begin{matrix}
    P \Rightarrow Q \\
    P
    \end{matrix}
\right\}
\Rightarrow Q

\quad
\text{và}
\quad

\left\{
\begin{matrix}
P \vee Q \\
\overline{P}
\end{matrix}
\right\}
\Rightarrow Q
$$

- Qui tắc phủ định:

$$
\left\{
    \begin{matrix}
    P \Rightarrow Q \\ \overline{Q}
    \end{matrix}
\right\}
\Rightarrow \overline{P}
$$

- Qui tắc tam đoạn luận:

$$
\left\{
    \begin{matrix}
    P \Rightarrow Q \\
    Q \Rightarrow R
    \end{matrix}
\right\}
\Rightarrow (P \Rightarrow R)
$$

- Qui tắc chứng minh theo các trường hợp:
$
[ (P_1 \lor P_2 \lor \dots \lor P_n) \Rightarrow Q ]
\equiv
\left\{
    \begin{matrix}
    P_1 \Rightarrow Q \\
    P_2 \Rightarrow Q \\
    \vdots \\
    P_n \Rightarrow Q
    \end{matrix}
\right\}.
$
  - Ta có thể chứng minh các trường hợp riêng lẻ ở vế phải thay cho chứng minh vế trái vì việc chứng minh vế phải đơn giản hơn chứng minh một trường hợp tổng quát ở vế trái.
    - Ví dụ: Chứng minh $k^2$ chia 4 dư 1 hoặc 0
      - Ta chứng minh theo 2 trường hợp $k$ chẵn và lẻ.
      - Nếu $k = 2n (n \in \R)$ thì $k^2$ chia 4 dư 0
      - Nếu $k = 2n + 1 (n \in \R)$ thì $k^2 = [4(r^2 + r) + 1]$ chia 4 dư 1
- Hệ quả:

    1. $
        \left\{
            \begin{matrix}
            P \Rightarrow Q \\
            R \Rightarrow S \\
            \end{matrix}
        \right\} \Rightarrow [(P \wedge R) \Rightarrow (Q \wedge S)]
    $

    2. $
        \left\{
            \begin{matrix}
            P \Rightarrow Q \\
            R \Rightarrow S \\
            \end{matrix}
        \right\} \Rightarrow [(P \vee R) \Rightarrow (Q \vee S)]
    $

### Áp dụng

Cho các mệnh đề $E_1, E_2, ..., E_n$ và $F$. Ta muốn chứng minh $[(E_1, E_2, ..., E_n) \Rightarrow F]$ là đúng. Ta viết:

$$
E_1 \\
E_2 \\
\vdots \\
E_n \\
----- \\
\therefore F
$$

- **Cách 1:** Dùng bảng chân trị (dành cho $n$ rất nhỏ).
- **Cách 2:** Chia bài toán thành nhiều bước suy luận trung gian và ở mỗi bước, ta dùng luật logic ở **mục IV** hoặc các qui tắc suy diễn.
- **Cách 3:** Dùng qui tắc phản chứng, ta giả sử $E_1, E_2, ..., E_n$ đều đúng và $F$ sai từ đó chỉ ra sự mâu thuẫn.
- **Cách 4:** Ta giả sử $E_1, E_2, ..., E_n$ đều đúng từ đó chứng minh $F$ cũng đúng.

<!-- ## VII. Phương pháp chứng minh qui nạp -->

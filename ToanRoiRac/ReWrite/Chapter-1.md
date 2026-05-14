# Chương I: Cơ sở logic

## I. Mệnh đề logic

### 1.1 Khái niệm

Mệnh đề logic (gọi tắt là mệnh đề) là một câu phát biểu về một lĩnh vực nào đó, đúng hoặc sai một cách khách quan. Tính đúng hoặc sai của một mệnh đề được xác định từ chính nội dung của mệnh đề đó mà không phụ thuộc vào người phát biểu.

Ta dùng các ký hiệu `A`, `B`, `C`, … để chỉ các mệnh đề.

Tính đúng hoặc sai của một mệnh đề được gọi là chân trị (hay giá trị chân lý) của mệnh đề đó. Ta thường sử dụng các số nhị phân `1` và `0` để thể hiện chân trị đúng và sai của một mệnh đề.

**Ví dụ**

**a) Các phát biểu dưới đây là mệnh đề (logic):**

- `A = “Nước Việt Nam thuộc về châu Á”` (chân trị đúng).
- `B = “Tứ giác phẳng có bốn cạnh bằng nhau là hình vuông”` (chân trị sai).

**b) Các phát biểu dưới đây không phải là mệnh đề (logic):**

- `E = “Hãy đọc sách!”` (câu mệnh lệnh).
- `F = “Anh đi đâu?”` và `G = “Tú làm bài xong chưa?”` (các câu nghi vấn).
- `G = “Trời lạnh quá!”` (câu cảm thán mang tính chủ quan).

**c) Cần phân biệt Định nghĩa với Mệnh đề. Định nghĩa không phải là Mệnh đề.**

- `H = “Hình bình hành là tứ giác có các cặp cạnh đối song song”` (Định nghĩa).
- `K = “Hình bình hành có các cặp cạnh đối tương ứng bằng nhau”` (Mệnh đề).
- `L = “Tam giác đều là tam giác có ba cạnh bằng nhau”` (Định nghĩa).
- `M = “Tổng của ba góc trong một tam giác bằng 180o”` (Mệnh đề).

### 1.2 Phân loại mệnh đề

Một mệnh đề được xếp vào một trong hai loại sau đây:

- **Mệnh đề sơ cấp**: không sử dụng trạng từ `KHÔNG` trong phát biểu và không thể chia thành các mệnh đề nhỏ hơn.
- **Mệnh đề phức hợp**: có sử dụng trạng từ `KHÔNG` (hàm ý phủ định) trong phát biểu hoặc có thể chia thành các mệnh đề nhỏ hơn bằng cách sử dụng các từ nối như: `và`, `hay`, `suy ra`, `kéo theo`, `nếu … thì`, `tương đương`, `nếu và chỉ nếu`, `khi và chỉ khi`, `điều kiện cần`, `điều kiện đủ`, `điều kiện cần và đủ`, `hoặc`, …

**Ví dụ**

- `A = “Tháng giêng của mỗi năm đều có 30 ngày”` là mệnh đề sơ cấp.
- `B = “22 không chia hết cho 5”` và `C = “4 ≤ 1”` là các mệnh đề phức hợp.
- `D = “Nếu 6 > 7 thì 8 > 9”` là mệnh đề phức hợp.

## II. Các phép nối logic (các phép toán mệnh đề)

Cho các mệnh đề $P$ và $S$.

### 2.1 Mệnh đề phủ định

Ký hiệu $\neg P$ là mệnh đề phủ định của $P$ (đọc là phủ định $P$). $\neg P$ phát biểu các khả năng, các trường hợp còn lại mà $P$ chưa phát biểu. Chân trị của $\neg P$ trái ngược với chân trị của $P$.

| $P$ | $\neg P$ |
| --- | --- |
| 1 | 0 |
| 0 | 1 |

**Ví dụ**

- `A = “3 > 8”` có `¬A = “3 ≤ 8”`.
- `B = “4 ≠ 7”` có `¬B = “4 = 7”`.
- `C = “Tuổi của An khoảng từ 18 đến 20”` có `¬C = “Tuổi của An ít hơn 18 hoặc nhiều hơn 20”`.
- `D = “Áo này màu xanh”` có `¬D = “Áo này không phải màu xanh”`.
- `E = “Một nửa lớp 20CTT thi đạt môn Toán”` có `¬E = “Tỉ lệ số sinh viên của lớp 20CTT thi đạt môn Toán không phải là 1/2”`.
- `F = “Không quá 15 học sinh của trường được dự trại hè quốc tế”` có `¬F = “Hơn 15 học sinh của trường được dự trại hè quốc tế”`.

### 2.2 Mệnh đề hội (phép nối liền)

Ký hiệu `P ∧ Q` là mệnh đề hội của $P$ và $S$ (đọc là $P$ hội $S$, $P$ và $S$). `P ∧ Q` chỉ đúng khi $P$ và $S$ cùng đúng.

| $P$ | $S$ | `P ∧ Q` |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 0 |

### 2.3 Mệnh đề tuyển (phép nối rời)

Ký hiệu `P ∨ Q` là mệnh đề tuyển của $P$ và $S$ (đọc là $P$ tuyển $S$, $P$ hay $S$). `P ∨ Q` chỉ sai khi $P$ và $S$ cùng sai.

| $P$ | $S$ | `P ∨ Q` |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 0 |

### 2.4 Mệnh đề kéo theo

Ký hiệu `P → Q` là mệnh đề kéo theo của $P$ và $S$ (đọc là $P$ kéo theo $S$, $P$ suy ra $S$, nếu $P$ thì $S$). `P → Q` chỉ sai khi $P$ đúng và $S$ sai.

| $P$ | $S$ | `P → Q` |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 1 |
| 0 | 0 | 1 |

**Nhận xét từ bảng chân trị của `P → Q`:**

- Nếu $P$ sai thì `(P → Q)` đúng, bất chấp chân trị của $S$.
- Nếu $S$ đúng thì `(P → Q)` đúng, bất chấp chân trị của $P$.

Chẳng hạn cho `D = [ A → (B → C) ]` với `B` là mệnh đề sai và `A`, `C` là các mệnh đề có chân trị tùy ý. Mệnh đề phức hợp `D` có chân trị đúng bất chấp chân trị của `A` và `C`.

### 2.5 Mệnh đề tương đương

Ký hiệu `P ↔ Q` là mệnh đề tương đương của $P$ và $S$.

Đọc là: `P tương đương Q`, `P nếu và chỉ nếu Q`, `P khi và chỉ khi Q`.

Ta có:

`P ↔ Q ≡ (P → Q) ∧ (Q → P)`.

`P ↔ Q` chỉ đúng khi $P$ và $S$ có cùng chân trị.

| $P$ | $S$ | `P ↔ Q` |
| --- | --- | --- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

**Ví dụ**

- `A = “Nước tinh khiết không dẫn điện”` (đúng).
- `B = “Công thức hóa học của nước là H2O”` (đúng).
- `C = “Vua Quang Trung đã đại thắng quân Minh”` (sai).
- `D = “2 + 3 ≤ 3”` (sai).
- `E = “Có sự sống ở ngoài trái đất”` (`?`).
- `F = “Đội tuyển bóng đá Hà Lan sẽ vô địch worldcup trước năm 2100”` (`?`).

Các mệnh đề sau là đúng: `¬C`, `A ∧ B`, `A ∨ B`, `A ∨ D`, `B ∨ E`, `A → B`, `C → A`, `D → C`, `D → F`, `E → B`, `A ↔ B`, `C ↔ D`.

Các mệnh đề sau là sai: `¬A`, `C ∧ B`, `D ∧ C`, `D ∧ E`, `C ∨ D`, `A → C`, `B ↔ D`.

### 2.6 Thứ tự ưu tiên của các phép nối logic

Khi không có dấu ngoặc, ta quy ước phép phủ định có độ ưu tiên cao nhất; tiếp theo là các phép toán `∧` và `∨` (có cùng độ ưu tiên); thấp nhất là các phép toán `→` và `↔` (có cùng độ ưu tiên).

Khi có mặt đồng thời hai phép toán có độ ưu tiên ngang nhau thì dùng dấu ngoặc để người đọc biết phép toán nào được thực hiện trước. Ta cũng sử dụng các dấu ngoặc để thay đổi thứ tự ưu tiên theo ý muốn.

Cho các mệnh đề `A`, `B` và `C`:

- `A ∧ B → C` được hiểu là thực hiện `A`, rồi thực hiện `(A ∧ B)`, và sau cùng thực hiện `(A ∧ B) → C`.
- `A ∨ B ↔ C` được hiểu là thực hiện `C`, rồi thực hiện `(A ∨ B)`, và sau cùng thực hiện `(A ∨ B) ↔ C`.
- Các biểu thức `(A ∨ B) ∧ C`, `A ∨ (B ∧ C)`, `(A → B) ↔ C`, `A → (B ↔ C)`, `(A → B) ∨ C`, `(A ↔ B) ∧ C` đều mang hàm ý rằng phép toán trong ngoặc được thực hiện trước.

### 2.7 Bảng chân trị của mệnh đề phức hợp

`A` là mệnh đề phức hợp được tạo từ các mệnh đề sơ cấp `P1`, `P2`, ..., `Pn`. Muốn xét chân trị của `A`, ta cần xét chân trị của các mệnh đề trung gian.

Có `2^n` khả năng xảy ra khi xét chân trị đồng thời của `P1`, `P2`, ..., `Pn`. Bảng chân trị của `A` có `2^n` cột tương ứng với mỗi khả năng chân trị đó.

**Ví dụ**

Cho các mệnh đề sơ cấp $P$, $S$, `R` và mệnh đề phức hợp:

`A = { [ (P ∨ Q) ∧ (¬P → R) ] ↔ ¬R }`.

Để xét chân trị của `A`, ta cần xét các mệnh đề trung gian theo thứ tự:

- `B = (P ∨ Q)`
- $\neg P$
- `C = (¬P → R)`
- `D = (B ∧ C)`
- `¬R`

Trong 8 trường hợp chân trị đồng thời của $P$, $S$ và `R`, mệnh đề `A` chỉ đúng trong 3 trường hợp và sai trong 5 trường hợp còn lại. Do đó xác suất để mệnh đề `A` đúng là `(3/8) = 37,5 %` và sai là `(5/8) = 62,5 %`.

| $P$ | $S$ | `R` | `B = (P ∨ Q)` | $\neg P$ | `C = (¬P → R)` | `D = (B ∧ C)` | `¬R` | `A = (D ↔ ¬R)` |
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

      a) Biến số thực là nơi để thay vào các hằng số thực khác nhau.

        Biểu thức đại số là một cấu trúc bao gồm các hằng số thực, các biến số thực

        và các phép toán đại số +, , , : , lũy thừa liên kết các hằng số và biến số.

                                    2 x 2 y  4 yz 3t 4  t  3
        Chẳng hạn F(x, y, z, t) =                                 là một biểu thức đại số theo
                                           y 2  3z 4  1
        các biến số thực x, y, z và t.

      b) Biến mệnh đề là nơi để thay vào các mệnh đề khác nhau.

        Dạng mệnh đề là một cấu trúc bao gồm các mệnh đề, các biến mệnh đề và

        các phép toán mệnh đề  , , , ,  liên kết các mệnh đề và biến mệnh

        đề. Chẳng hạn F(p, q, r, s) = { (p  q )  [ r  (A  s ) ] }  (q  B) là

        một dạng mệnh đề theo các biến mệnh đề p, q, r, s và các mệnh đề

        A = “  > 11 ” (S) và B = “ Nước sôi ở 100o C dưới áp suất thường ” (Đ).

### 3.2 Dạng mệnh đề hằng đúng và hằng sai

      Cho dạng mệnh đề F = F(p1, p2, ... , pn) theo n biến mệnh đề p1, p2, ... và pn.

      a) Nếu F luôn luôn đúng (bảng chân trị của F có dòng cuối toàn giá trị 1)

        bất chấp chân trị của p1, p2, ... và pn thì ta nói F là một dạng mệnh đề

        hằng đúng và ta ký hiệu F  1.

                                                                                                 6
       b) Nếu F luôn luôn sai (bảng chân trị của F có dòng cuối toàn giá trị 0) bất

         chấp chân trị của p1, p2, ... và pn thì ta nói F là một dạng mệnh đề hằng

         sai và ta ký hiệu F  O.

       Ví dụ: Cho các biến mệnh đề p, q và r.

       a) F(p, q, r, t) = [ (p  q )  ( q  r  t ) ] có F  1 ( lập bảng chân trị cho F ).

       b) G(p, q, r) = { p  [ q  ( r  B) ] }  A với các mệnh đề A = “ 23 > 32 ”

         và B = “ Lào tiếp giáp với Việt Nam ”. Ta có G  O (vì A có chân trị sai).

### 3.3 Hệ quả logic và tương đương logic

       Cho các dạng mệnh đề E = E(p1, p2, ... , pn) và F = F(p1, p2, ... , pn) theo n

       biến mệnh đề p1, p2, ... và pn .

       a) ( E  F ) chỉ là sự kéo theo hình thức. ( E  F ) không phải là hằng đúng.

       b) Nếu ( E  F )  1 thì ta viết E  F và nói F là hệ quả logic của E.

          Đây là sự kéo theo thực sự.

       c) (E  F) chỉ là sự tương đương hình thức. (E  F) không phải là hằng đúng

       d) Nếu ( E  F )  1 thì ta viết E  F và nói E và F tương đương logic

          với nhau. Đây là sự tương đương thực sự.

       Ví dụ: Cho các biến mệnh đề p, q, r và s. Lập bảng chân trị để thấy

       a) [ p  (p  q ) ] và [ (p  q)  (p  q) ] đều không phải là các dạng mệnh

         đề hằng đúng nên không được ghi [ p  (p  q ) ] và [ (p  q)  (p  q) ].

       b) [ (p  r )  (p  q  s) ] và { [ p  (p  q) ]  [ p  (p  q) ]  p }.

## IV. Các luật logic (tính chất của các phép nối logic)

  Cho các dạng mệnh đề (hay các mệnh đề) E = E(p1, p2, ... , pn), F = F(p1, p2, ... , pn)

  và G = G(p1, p2, ... , pn) theo n biến mệnh đề p1, p2, ... và pn .

### 4.1 Luật phủ định kép

¬¬E  E.

### 4.2 Luật lũy đẳng (của  và )

E  E  E ; E  E  E.

### 4.3 Luật giao hoán (của  và )

F  E  E  F ; F  E  E  F.

### 4.4 Luật phủ định De Morgan (của  và )

  ¬(E  F)  (¬E  ¬F) ; ¬(E  F)  (¬E  ¬F).

   Ví dụ:

  A = “ Tôi học tiếng Anh và tiếng Pháp ”.

  ¬A = “ Tôi không học tiếng Anh hay không học tiếng Pháp ”.

   B = “ An đến trường hay đến thư viện ”.

  ¬B = “ An không đến trường và không đến thư viện ”.

   C = “ 3a  8 < 1 ” (a là hằng số thực).

  ¬C = “ (3a  8)  0 và       3a  8 < 1”.

  ¬C = “ (3a  8) < 0 hay    3a  8  1”.

### 4.5 Luật hấp thu (giữa  và )

   [ E  (E  F) ]  E           ;          [ E  (E  F) ]  E.

   Ví dụ: Cho x, y, u, v  R. Ta có

   x3(x2 + 5y6 ) = 0  [ x = 0 hay ( x2 + 5y6 ) = 0 ]

                     [ x = 0 hay ( x = 0 và y = 0 ) ]  x = 0 (y thực tùy ý).

   u8(3u4 + 6v2)  0  [ u  0 và (3u4 + 6v2)  0 ]

                      [ u  0 và (u  0 hay v  0) ]  u  0 (v thực tùy ý).

### 4.6 Luật kết hợp (của  và )

   [ (E  F)  G ]  [ E  (F  G) ]  ( E  F  G ).

   [ (E  F)  G ]  [ E  (F  G) ]  ( E  F  G ).

   Ví dụ: Cho a, b  R. Ta có

   [ (a  2) và (a  4 và 2a  b) ]  [ (a  2 và a  4) và (2a  b) ]

                                       [ (a  4) và (2a  b) ].

[ (a <  1) hay (a <  2 hay a3 = 2cosb) ]  [ (a <  1 hay a <  2) hay a3 = 2cosb ]

                                           [ (a <  1) hay (a3 = 2cosb) ].

### 4.7 Luật phân phối (giữa  và )

   [ E  (F  G) ]  [ (E  F)  (E  G) ] (  phân phối với  ).

   [ E  (F  G) ]  [ (E  F)  (E  G) ] (  phân phối với  ).

   Ví dụ: Cho x, y  R. Ta có

  [ (x <  1) và (x < 4 hay y  3) ]  [ (x <  1 và x < 4) hay (x <  1 và y  3) ]

   [ (x <  1) hay (x <  1 và y  3) ]  (x <  1)  (x <  1 và y thực tùy ý).

  [(xy  5) hay (xy  2 và x3  y2)]  [(xy  5 hay xy  2) và (xy  5 hay x3  y2)]

   [ ( xy  2 ) và ( xy  5 hay x3  y2 ) ].

### 4.8 Luật trung hòa (của  và )

(E  1)  E ; (E  O)  E.

   Ví dụ: Cho x, y  R. Ta có

   ( 2x + y > 3 và 4x2 + ey   1 )  ( 2x + y > 3 ).

   [ 8sinx  5cos(y3) = 14 hay x6  9y + 1 ]  ( x6  9y + 1 ).

### 4.9 Luật thống trị (của  và )

(E  O)  O ; (E  1)  1.

   Ví dụ: Cho a, b  R. Ta có

   (| a |  lnb = 2 và b2 < sin2b)  O (không có a,b nào thỏa hệ)  (hệ vô nghiệm)

   [acos(ab) > 2 hay eab + eab  1]  1 (a,b nào cũng thỏa hệ)  (a,b thực tùy ý)

### 4.10 Luật bù (của  và )

(E  ¬E)  O ; (E  ¬E)  1.

     Ví dụ: Cho u, v  R. Ta có

     ( uv  1 và uv < 1 )  O ( không có u, v nào thỏa hệ )  (hệ vô nghiệm).

  (7u4  2v + 3 hay 7u4 = 2v + 3)  1 (u,v nào cũng thỏa hệ )  (u, v thực tùy ý)

### 4.11 Các dạng tương đương và phủ định của mệnh đề kéo theo

    a) ( E  F )  ( ¬E  F ) ( dùng để xóa hoặc phục hồi dấu  ).

    b) ( E  F )  ( ¬F  ¬E ) ( dùng để suy luận theo dạng phản đảo ).

    c) ( E  F) không tương đương với dạng phản ( ¬E  ¬F ).

    d) ( E  F ) không tương đương với dạng đảo ( F  E ).

    e) ¬( E  F )  ( E  ¬F ) (dùng để xóa hoặc phục hồi dấu  dưới dấu phủ định).

      [ Từ a), dùng (4.4) và (4.1) ta có ¬( E  F )  ¬( ¬E  F )  ( E  ¬F ) ]

    Ví dụ:

    A = “ Nếu ( An học tốt ) thì ( An thi đạt ) ” ( E  F ).

    A  B với B = “ ( An học không tốt ) hay ( An thi đạt ) ” ( ¬E  F ).

    A  C với C = “ Nếu (An thi rớt) thì (An đã học không tốt) ” ( ¬F  ¬E ).

    A không tương đương với D, với D = “ Nếu ( An học không tốt ) thì ( An thi rớt ) ” ( ¬E  ¬F ).

    A không tương đương với E, với E = “ Nếu ( An thi đạt ) thì ( An đã học tốt ) ” ( F  E ).

    Để ý A đúng và D, E đều sai nên A không tương đương với D và E.

### 4.12 Áp dụng

    Các luật logic được sử dụng để

     Rút gọn một dạng mệnh đề.

     Chứng minh một dạng mệnh đề hằng đúng hoặc hằng sai.

     Chứng minh hai dạng mệnh đề tương đương với nhau.

    Ví dụ: Cho các biến mệnh đề p, q và r.

    a) Rút gọn dạng mệnh đề A = [ (p  q)  ( p  q)  (p  q ) ].

          A  [ (p  q)  ( p  q) ]  (p  q )  [ (p  p )  q ]  (p  q )

               ( 1  q )  (p  q )  q  (p  q )  (q  p)  (q  q )

               (q  p)  1  (q  p).

       b) Chứng minh dạng mệnh đề B = { [ p  (q  r) ]  [ (p  q)  (p  r) ] }

          là hằng đúng.

          B  p  (q  r )  p  q  p  r  p  (q  r )  ( p  p )  (q  r)

               p  (q  r )  [ p  (q  r) ]  G  G  1 với G = [ p  (q  r) ].

       c) Chứng minh dạng mệnh đề C = { [ p  (q  r) ]  ( p  q)  r } là hằng sai.

          C  [ (p  q)  (p  r) ]  p  q  r

               (H  K)  ( H  r ) với H = (p  q) và K = (p  r). Suy ra

        C  (H  H  r )  (K  H  r )  (O  r )  (K  H  r )  O  (K  H  r )

            K  H  r  H  K  r  ( H  p)  (r  r )  ( H  p)  O  O.

       d) Cho các dạng mệnh đề E = { [ q  (p  r) ]  ( p  r )  q } và

          F = ( p  r )  q . Chứng minh E  F.

          E  [ q  (p  r) ]  (p  r)  q  ( q  u)  q  (p  r) với u = (p  r)

           [ ( q  u)  q ]  (p  r)  q  (p  r)  (p  r)  q  ( p  r )  q = F.

## V. Mệnh đề lượng từ

### 5.1 Lượng từ

Cho tập hợp A và biến x lấy các giá trị trong A.

      a) Lượng từ phổ biến ( với mỗi, với mọi, với tất cả ).

        x  A : với mỗi (với mọi, với tất cả) phần tử x thuộc về tập hợp A.

      b) Lượng từ tồn tại  ( tồn tại, có ít nhất một, có ai đó, có cái gì đó ).

        x  A : tồn tại (có ít nhất một) phần tử x thuộc về tập hợp A.

### 5.2 Vị từ

Cho các tập hợp Aj và các biến xj  Aj (1  j  n).

    p(x1, x2, …, xn) là một câu phát biểu có nội dung liên quan đến các biến xj

    và chân trị của p(x1, x2, …, xn) phụ thuộc theo các biến xj (1  j  n).

    Ta nói p(x1, x2, …, xn) là một vị từ theo n biến xj  Aj (1  j  n).

    Ví dụ:

    a) p(x) = “ 3x2  4x > 1 ” với x  R. Ta có p(0) = “ 3.02  4.0 > 1 ” sai

      và p(2) = “ 3.22  4.2 > 1 ” đúng. Ta gọi p(x) là vị từ một biến.

    b) q(y, z) = “ (4y  7z)  5 ” với y  Z và z  Q. (ký hiệu  là chia hết cho).

                   3                    3
      Ta có q( 2,   ) = “ [ 4( 2)  7( ) ]  5 ” sai và
                   7                    7
            1                    1
      q(6,  ) = “ [ 4(6)  7(  ) ]  5 ” đúng. Ta gọi q(y, z) là vị từ hai biến.
            7                    7

### 5.3 Mệnh đề lượng từ

    Cho các tập hợp Aj và các biến xj  Aj (1  j  n). Xét vị từ theo n biến

    p(x1, x2, …, xn) và các lượng từ 1, 2, ... , n  { ,  }.

    a) Ta xây dựng một mệnh đề lượng từ theo n biến x1, x2, …, xn là

      A = “ 1x1 A1 , 2x2 A2 , ... , nxn An , p(x1, x2, …, xn) ”.

     b) Qui ước   ,   , ta có dạng phủ định của mệnh đề lượng từ A là

       ¬A = “ δ̄1 x1 A1 , δ̄2 x2 A2 , ... , δ̄n xn An , ¬p ( x1 , x2 ,..., xn ) ”.

    c) Ta có thể xét trực tiếp chân trị của A (nếu đơn giản) hoặc xét gián tiếp chân

      trị của ¬A rồi suy ra chân trị của A (nếu chân trị của ¬A dễ xét hơn A).

    Ví dụ:

     a) A = “ x  Q, x3 = x ” có ¬A = “ x  Q, x3  x ”. A đúng vì 1  Q, 13 = 1

     b) B = “ x  R, x > sinx ” có ¬B = “ x  R, x  sinx ”.

       ¬B đúng vì 0  R, 0  sin0 = 0. Suy ra B sai.
c) C = “ x  R, y > 0, x  2y  3 ” có ¬C = “ x  R, y > 0, x > 2y  3 ”.

  C đúng vì ( 2)  R, y > 0,  2  2y  3 ( để ý 2y > 1, y > 0 ).

d) D = “ x  Z, y  Q, 2y3 > 5x4 + 8 ” có
                             3     4
  ¬D = “ x  Z, y  Q, 2y  5x + 8 ”.

  Ta có thể giải thích trực tiếp D đúng hoặc giải thích gián tiếp là ¬D sai.

  D đúng vì x  Z, y  Q thỏa y > 3 5 x 4  8 > 0, nghĩa là 2y3 > y3 > 5x4 + 8.
                                                                  3       4
  ¬D sai. Thật vậy, nếu ¬D đúng thì có x nguyên cố định thỏa 2y  5x + 8,

  y  Q. Cho y  +  (lúc đó 2y3  + ) thì mâu thuẫn vì 5x4 + 8 cố định.

e) E = “ x  R, y  R, (x2 > y2)  (x > y) ” . Ta có

  E  E’ = “ x  R, y  R, (x2  y2) hay (x > y) ” (xóa dấu ) và
                              2    2
  ¬E = “ x  R, y  R, (x > y ) và (x  y) ”. Ta khẳng định E đúng bằng

  cách giải thích gián tiếp là E’ đúng hay giải thích gián tiếp là ¬E sai.

  E’ đúng vì x  R, y = x  R, (x2  y2 = x2) là đúng.
                                                              2       2
  ¬E sai. Thật vậy, nếu ¬E đúng thì có x thực cố định thỏa x > y , y  R.

  Cho y  +  ( y2  + ) thì mâu thuẫn vì x2 cố định. Vậy (x2 > y2 ) sai.

f ) F = “ Họ ( chúng tôi, các bạn ) đi du lịch Rome ” (lượng từ phổ biến tiềm ẩn).

  ¬F = “ Có ai đó trong số họ (chúng tôi, các bạn) không đi du lịch Rome ”.

g) G = “ ( Tất cả ) các nghệ sĩ thích học ngoại ngữ ”.

  ¬G = “ Có nghệ sĩ nào đó không thích học ngoại ngữ ”.

h) H = “ Có bạn nào đó trong lớp đạt điểm 10 môn Toán ”.

  ¬H = “ Cả lớp không đạt điểm 10 môn Toán ”.

     = “ Không có bạn nào đó trong lớp đạt điểm 10 môn Toán ”.

k) K = “ Không có ai (mọi người không) đến trễ ” . ¬K = “ Có ai đó đến trễ ”.

### 5.4 Hoán đổi lượng từ

     Cho các tập hợp A, B và vị từ 2 biến p(x, y) với x  A và y  B. Ta có

     a) Có thể hoán đổi 2 lượng từ cùng loại đứng cạnh nhau.

        “ x  A, y  B, p(x, y) ”  “ y  B, x  A, p(x, y) ”.

        “ x  A, y  B, p(x, y) ”  “ y  B, x  A, p(x, y) ”.

     b) Không được hoán đổi 2 lượng từ khác loại đứng cạnh nhau.

        “ x  A, y  B, p(x, y) ”  “ y  B, x  A, p(x, y) ” (chiều  sai)

        Vế trái : có x cố định trong A, y tùy ý trong B.

        Vế phải : với mỗi y tùy ý trong B, có x trong A và x phụ thuộc theo y.

     Ví dụ:

     a) “ x  R, y  R, ex + siny  4 ”  “ y  R, x  R, ex + siny  4 ”.

        Cả hai vế đều có chân trị sai (vế trái có giá trị lớn tùy ý với x, y thích hợp).

     b) “ x  Z, y  Q, 3x + y =  1 ”  “ y  Q, x  Z, 3x + y =  1 ”.

        Cả hai vế đều có chân trị đúng ( chọn x = 0 và y =  1).

     c) “ x  Q, y  R, y = sinx ” (chân trị đúng vì hàm sin xác định trên Q).

        “ y  R, x  Q, y = sinx ” (chân trị sai vì y = sin0 = 0 và y = sin1 > 0).

## VI. Các qui tắc suy diễn (các phương pháp chứng minh)

  Cho các mệnh đề P, Q, R, S, P1, P2, … và Pn .

### 6.1 Qui tắc phản đảo (Phản chứng dạng 1)

      ( P  Q )  ( Q  P ) ( Ta có thể chứng minh vế phải thay cho chứng minh vế

      trái nếu việc chứng minh vế phải đơn giản hơn ).

      Ví dụ: Cho a và b nguyên. Chứng minh “ ( ab lẻ )  ( a và b đều lẻ ) ”.

   a) Chứng minh trực tiếp : Viết a = 2c + r và b = 2d + s trong đó c, d là các

     số nguyên và r, s  { 0, 1}. Do ab = 2(2cd + cs + dr) + rs lẻ nên rs = 1.

     Suy ra r = s = 1, nghĩa là a và b đều lẻ (chứng minh phong cách hàn lâm).

   b) Chứng minh phản chứng : “ ( a hay b chẵn )  ( ab chẵn ) ”. Giả sử a

     hay b chẵn, nghĩa là a = 2c hay b = 2d với c, d là các số nguyên. Ta có

     ab = 2(cb) hay ab = 2(ad) nên ab chẵn (chứng minh kiểu đơn giản).

### 6.2 Qui tắc nêu mâu thuẫn (Phản chứng dạng 2)

   ( P  Q )  [ ( P  Q )  O ] trong đó O thể hiện sự mâu thuẫn hay vô lý.

   ( Ta có thể chứng minh vế phải thay cho chứng minh vế trái nếu việc chứng

   minh vế phải đơn giản hơn ).

   Ví dụ: Cho các số thực a và b.

   Chứng minh “ ( a hữu tỉ và b vô tỉ )  ( a + b vô tỉ ) ”.

   a) Chứng minh trực tiếp : không thể được vì ta không có dạng tường minh cho

     các số vô tỉ.

   b) Chứng minh phản chứng : “ (a hữu tỉ, b vô tỉ và a + b hữu tỉ )  O ”.

                                                               p            r
      Giả sử a hữu tỉ, b vô tỉ và a + b hữu tỉ, nghĩa là a =     và a + b =
                                                               q            s

      trong đó p, q, r, s là các số nguyên với q  0  s. Suy ra

                          r  p qr  ps
      b = (a + b)  a =      =          là số hữu tỉ : mâu thuẫn với giả thiết
                          s  q   qs

      b vô tỉ. Vậy ta có điều phải chứng minh.

### 6.3 Qui tắc hội tuyển đơn giản

   a) [ ( P  Q )  P ] ( hội đơn giản để xóa bớt thông tin Q không cần thiết).

   b) [ P  ( P  Q ) ] ( tuyển đơn giản để thêm vào thông tin Q gây nhiễu).


   Ví dụ:

   ( An học Anh văn và Pháp văn )  ( An học Anh văn ).

   Cho số thực a. Ta có ( a > 5 )  [ ( a > 5 ) hay ( a < 10 ) ].

### 6.4 Qui tắc khẳng định (Modus – Ponens)

               P  Q                                               P  Q 
   a) Dạng 1:         Q.                            b) Dạng 2:            Q.
                P                                                  P 

   Ví dụ:

   a) [ ( Nếu An rảnh thì An xem phim ) và ( An rảnh ) ]  ( An xem phim ).

   b) [ ( Tú hay Vy đã ăn gà quay ) và ( Tú ăn chay trường ) ]

      [ ( Tú hay Vy đã ăn gà quay ) và ( Tú không ăn gà quay ) ]

      ( Vy đã ăn gà quay ).

### 6.5 Qui tắc phủ định (Modus – Tollens)

    P  Q 
              P.
     Q 

   Ví dụ:

   [ ( Nếu An giàu thì An mua xe du lịch ) và ( An không mua xe du lịch ) ]

    ( An chưa giàu ).

### 6.6 Qui tắc tam đoạn luận (Syllogism)

   P  Q
           ( P  R) ( bỏ bớt suy luận trung gian Q ).
   Q  R 

   Ví dụ:

  [(Nếu trời mưa lớn thì đường bị ngập) và (nếu đường bị ngập thì An về nhà trễ)]

    [ ( Nếu trời mưa lớn thì An về nhà trễ ) ].




### 6.7 Qui tắc chứng minh theo các trường hợp

                                  P1  Q 
                                 P  Q
   [ (P1  P2  …  Pn)  Q ]   2        
                                            .
                                   
                                  Pn  Q 


   ( Ta có thể chứng minh các trường hợp riêng lẻ ở vế phải thay cho chứng minh

   vế trái vì việc chứng minh vế phải đơn giản hơn chứng minh một trường hợp

   tổng quát ở vế trái ).

   Ví dụ: Cho số nguyên k.

   a) Chứng minh k2 chia 4 dư 0 hoặc 1.

     Ta chứng minh theo 2 trường hợp k chẵn hoặc k lẻ.

     Nếu k = 2r (r  Z) thì k2 = 4r2 chia 4 dư 0.

     Nếu k = 2r + 1 (r  Z) thì k2 = [ 4(r2 + r) + 1 ] chia 4 dư 1.

   b) Chứng minh (2k2 + k + 1) không chia hết cho 3.

     Ta chứng minh theo 3 trường hợp tương ứng với số dư khi chia k cho 3.

     Nếu k = 3r (r  Z) thì (2k2 + k + 1) = 18r2 + 3r + 1 = [ 3r(6r + 1) + 1 ] chia

     3 dư 1.

     Nếu k = 3r + 1 (r  Z) thì (2k2 + k + 1) = 18r2 + 15r + 4 = [ 3r(6r + 5) + 4 ]

     chia 3 dư 1. Nếu k = 3r + 2 (r  Z) thì (2k2 + k + 1) = 18r2 + 27r + 11 =

     = [ 9r(2r + 3) + 11 ] chia 3 dư 2.

### 6.8 Hệ quả

      P  Q
   a)         [ ( P  R )  (Q  S) ].
      R  S 

      P  Q
   b)         [ ( P  R )  (Q  S) ].
      R  S 



### 6.9 Áp dụng

   Cho các dạng mệnh đề E1 , E2 , … , En và F.

   a) Giải thích một quá trình suy luận là đúng:

     Ta muốn chứng minh [ ( E1  E2  …  En )  F ] là đúng. Lúc đó ta viết

                                     E1
                                     E2
                                      
                                      En
                                  ----------
                                     F

     Nếu dùng bảng chân trị hoặc dùng các luật logic biến đổi thì khá phức tạp,

     đặc biệt là khi n lớn. Ta dùng một trong ba cách chứng minh sau để được

     đơn giản và có hiệu quả hơn:

     Cách 1: chia bài toán thành nhiều bước suy luận trung gian và ở mỗi bước

     ta dùng các luật logic (mục IV) hoặc các qui tắc suy diễn đã nêu trên.

     Muốn thực hiện cách này, chúng ta phải sử dụng thành thạo các luật logic và

     các qui tắc suy diễn.

     Cách 2 : dùng qui tắc phản chứng dạng 2 trong (6.2).

     Giả sử quá trình suy luận trên là sai, nghĩa là E1  E2  …  En  F . Ta có

     E1 , E2 , … , En đều đúng và F sai. Từ đó hãy chỉ ra một sự mâu thuẫn.

     Như vậy quá trình suy luận đã cho là đúng. Muốn thực hiện cách này, chúng

     ta chỉ cần biết chân trị đúng hoặc sai của các mệnh đề phủ định, mệnh đề

     hội, mệnh đề tuyển, mệnh đề kéo theo và mệnh đề tương đương.

     Cách 3 (chỉ thuận tiện trong một số trường hợp nhất định) :

     Giả sử E1 , E2 , … và En đều đúng. Ta sẽ chứng minh F cũng đúng.

     Như vậy quá trình suy luận đã cho thực sự là đúng. Muốn thực hiện cách

       này, chúng ta chỉ cần biết chân trị đúng hoặc sai của các mệnh đề phủ định,

       mệnh đề hội, mệnh đề tuyển, mệnh đề kéo theo và mệnh đề tương đương.

    b) Giải thích một quá trình suy luận là sai: Ta muốn khẳng định suy luận

       [ ( E1  E2  …  En )  F ] là sai. Ta chỉ có một cách duy nhất như sau :

       Ta gán cho mỗi biến mệnh đề chân trị 0 hoặc 1 ( mỗi biến chỉ gán một

       chân trị duy nhất ) sao cho E1 , E2 , … , En đều đúng và F sai. Khi đó

       quá trình suy luận [ ( E1  E2  …  En )  F ] là sai trong trường hợp

       đặc biệt đã gán chân trị, nghĩa là [ ( E1  E2  …  En )  F ] là sai.

    Ví dụ: Cho các biến mệnh đề p, q, r, s, t và u.

    Xem xét các suy luận dưới đây đúng hay sai và giải thích tại sao ?

a) p  t (1)        b) p  r (1)       c) ( p  q)  (r  s) (1)    d) p (1)
   r  q (2)           u (2)               t (2)                        p  q (2)
   p (3)               s  t (3)          r  t (3)                   (q  r)  s (3)
   t  q (4)           s  r (4)          -----------------           t  r (4)
   --------------       t  u (5)          s  p (4).               -------------------
    r  s (5).      -----------------                                s  t (5).
                        p  q (6).

   Ta chứng minh a) đúng bằng Cách 1: Từ (1) và (3), ta có t (6). Từ (6) và

   (4), ta có q (7). Từ (7) và (2), ta có r (8). Từ (8), ta có r (9). Từ (9), ta có

  r  s (5). Như vậy suy luận a) đúng.

   Ta chứng minh a) đúng bằng Cách 2: Giả sử (1), (2), (3), (4) đúng và (5) sai.

   Do (3) đúng nên p đúng. Do (5) sai nên r và s đều sai. Do (1) đúng và p

  đúng nên t đúng. Do (2) đúng và r sai nên q đúng. Do t và q đều đúng

  nên (4) sai : mâu thuẫn với điều đã giả sử. Như vậy suy luận a) đúng.

   Ta chứng minh b) đúng bằng Cách 2: Giả sử (1), (2), (3), (4), (5) đúng và (6)

  sai. Do (2) đúng và (6) sai nên p đúng và u, q đều sai. Do (1) đúng và p

đúng nên r đúng. Do (5) đúng và u sai nên t sai. Do (3) đúng và t sai nên

s sai. Do s sai và r đúng nên (4) sai : mâu thuẫn với điều đã giả sử.

Như vậy suy luận b) là đúng.

Ta chứng minh b) đúng bằng Cách 3: Giả sử (1), (2), (3), (4) và (5) đều đúng.

Do (2) đúng nên u sai. Do (5) đúng và u sai nên t sai. Do (3) đúng và t

sai nên s sai. Do (4) đúng và s sai nên r sai. Do (1) đúng và r sai nên p

sai. Do p sai nên (6) đúng. Như vậy suy luận b) đúng.

Ta chứng minh c) đúng bằng Cách 1: Từ (2) và (3), ta có r (5). Từ (5), ta có

r  s (6). Từ (6), ta có r  s (7). Từ (7) và (1), ta có p  q (8). Từ (8), ta có

p  q (9). Từ (9), ta có p  q (10). Từ (10), ta có p (11). Từ (11), ta có

s  p (12). Từ (12), ta có s  p (4). Như vậy suy luận c) đúng.

Ta chứng minh c) đúng bằng Cách 3: Giả sử (1), (2) và (3) đều đúng.

Do (2) đúng nên t sai. Do (3) đúng và t sai nên r sai, nghĩa là (r  s) sai.

Do (1) đúng và (r  s) sai nên ( p  q) sai, nghĩa là p sai và p đúng.

Do p đúng nên (4) đúng. Như vậy suy luận c) đúng.

Ta chứng minh d) sai bằng cách gán các chân trị đặc biệt 0 hoặc 1 cho các

biến mệnh đề p, q, r, s và t sao cho (1), (2), (3), (4) đều đúng và (5) sai.

Gán chân trị 1 cho p, r, t và gán chân trị 0 cho q, s thì (1), (2), (3), (4)

đều đúng và (5) sai. Như vậy suy luận d) sai trong một trường hợp đặc biệt

đã gán nên d) sai.

GHI CHÚ : Trong việc kiểm tra suy luận e) dưới đây là đúng, ta chỉ nên dùng

Cách 1 và Cách 2 mà thôi (nếu dùng Cách 3 sẽ phức tạp và khó khăn vì khi

xét khả năng đúng của một mệnh đề dạng  hay , ta có 3 khả năng xảy ra).


    e) [ ( p  q)  ( p  r)  ( r  s) ]  ( q  s).

       Cách 1 : Từ (3), ta có r  s (5). Từ (2) và (5), ta có p  s (6).

       Từ (1), ta có q  p (7). Từ (7) và (6), ta có (4).

       Như vậy suy luận e) đúng.

       Cách 2 : Giả sử (1), (2) và (3) đều đúng và (4) sai.

                 Do (4) sai nên q và s đều sai. Do (1) đúng và q sai nên p sai.

                 Do (2) đúng và p sai nên r đúng.

                 Do r đúng và s sai nên (3) sai : mâu thuẫn với điều đã giả sử.

                 Như vậy suy luận e) đúng.

## VII. Phương pháp chứng minh qui nạp

   Cho m  N. Giả sử ta có một dãy vô hạn các mệnh đề Pn (n  m) và ta muốn

   chứng minh chúng đều đúng. Ta dùng phương pháp chứng minh qui nạp.

### 7.1 Qui nạp giả thiết yếu (ít giả thiết)

       * Kiểm tra Pn đúng khi n = m.

       * Chứng minh k  m, (Pk đúng  Pk + 1 đúng).

       * Kết luận Pn đúng , n  m.

                                                                 n( n  1)(2n  1)
       Ví dụ: Chứng minh n  1, 12 + 22 +  + n2 =                                .
                                                                         6

                                                          n(n  1)(2n  1)
       Ta chứng minh Pn = “ 12 + 22 +  + n2 =                             ” đúng, n  1.
                                                                 6
                       1(1  1)(2.1  1)
       * P1 = “ 12 =                     ” hiển nhiên đúng.
                               6

       * Xét k  1 và giả sử Pk đúng, nghĩa là

                              k (k  1)(2k  1)
         12 + 22 +  + k2 =                     (*). Ta chứng minh Pk + 1 cũng đúng.
                                      6
                                                           ( k  1)[( k  1)  1][(2(k  1)  1]
         Viết Pk + 1 = “ 12 + 22 +  + k2 + (k + 1)2 =                                           ”.
                                                                              6

         Ta kiểm tra vế trái của Pk + 1 bằng vế phải của Pk + 1.

                                                   k (k  1)(2k  1)
       Vế trái = 12 + 22 +  + k2 + (k + 1)2 =                       + (k + 1)2 [ dùng (*) ]
                                                           6

                   (k  1)                            (k  1)(k  2)(2k  3)
               =           [ k(2k + 1) + 6(k + 1) ] =                        = Vế phải.
                      6                                          6

       * Vậy Pn đúng, n  1.

  ### 7.2 Qui nạp giả thiết mạnh (nhiều giả thiết)

      * Kiểm tra Pn đúng khi n = m.

      * Chứng minh k  m, [ ( Pm, Pm + 1, … và Pk đều đúng )  Pk + 1 đúng ].

      * Kết luận: Pn đúng, n  m.

Ví dụ: Chứng minh n  2, n là tích của các số nguyên tố dương (số nguyên tố

      dương là số nguyên dương chỉ có đúng hai ước số dương là 1 và chính nó).

       Ta chứng minh Pn = “ n là tích của các số nguyên tố dương ” đúng, n  2.

      * P2 = “ 2 là tích của đúng một số nguyên tố dương ” hiển nhiên đúng.

      * Xét k  2 và giả sử P2, P3, … , Pk đều đúng, nghĩa là

        t  { 2, 3, … , k }, t là tích của các số nguyên tố dương (*).

        Ta chứng minh Pk + 1 cũng đúng bằng cách xét 2 trường hợp [ xem (6.7) ].

        Viết Pk + 1 = “ (k + 1) là tích của các số nguyên tố dương ”.

        Khi (k + 1) là số nguyên tố thì đương nhiên (k + 1) là tích của đúng một

        số nguyên tố dương.

        Khi (k + 1) là số không nguyên tố thì (k + 1) = uv với u, v  {2, 3, … , k}.

        Theo (*), u = p1p2…pr và v = q1q2…qs với p1 , p2 , …, pr , q1 , q2 , … , qs

        là các số nguyên tố dương. Suy ra (k + 1) = uv = p1p2…pr q1q2…qs cũng là

        tích của các số nguyên tố dương.

      * Vậy Pn đúng, n  2.

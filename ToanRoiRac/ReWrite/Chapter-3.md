# Chương III: Phương pháp đếm

## I. CÁC NGUYÊN LÝ ĐẾM CƠ BẢN

### 1.1 MỆNH ĐỀ: Cho các tập hợp hữu hạn A, B, A1, A2, … và An .

     a) Nếu A và B rời nhau ( A  B =  ) thì | A  B | = | A | + | B |.

     b) Nếu A1, A2, … và An rời nhau từng đôi một ( Ai  Aj =  khi

       1  i  j  n ) thì | A1  A2  …  An | = | A1 | + | A2 | +  + | An |.




     Ví dụ:

     a) Lớp học L có 80 sinh viên nam và 65 sinh viên nữ. Ta viết L = A  B với

       A = { x  L | x là nam }, B = { x  L | x là nữ } và A  B = . Suy ra

       | L | = | A  B | = | A | + | B | = 80 + 65 = 145. Vậy lớp L có 145 sinh viên.

     b) Trường T có 300 học sinh lớp 6, 280 học sinh lớp 7, 250 học sinh lớp 8

       và 220 học sinh lớp 9. Ta có thể viết T = A6  A7  A8  A9 với

       Aj = { x  T | x học lớp j } (6  j  9) và Ai  Aj =  khi 6  i  j  9.

       Suy ra | T | = | A6 | + | A7 | + | A8 | + | A9 | = 300 + 280 + 250 + 220 = 1050.

       Vậy trường T có 1050 học sinh.

### 1.2 MỆNH ĐỀ: Cho tập hợp hữu hạn E và B  E. B̄ là phần bù của B trong E.

    a) Đặt (E) = { A | A  E } ((E) là tập hợp tất cả các tập hợp con của E)

      Nếu | E | = n (n nguyên  0) thì |(E) | = 2n .
                                                                                          1
  b) | B̄ | = | E |  | B | (nếu việc đếm | E | và | B | dễ dàng hơn việc đếm | B̄ |).




   Ví dụ: Cho E = { 1, 2, 3, ... , 8, 9 } và  = (E) = { A | A  E }.

   a) Do | E | = 9 nên |  | = 29 = 512.

    b) Cho  = { A | A  E và (1  A hay 2  A) } thì    và

      ̄ = { A | A  E và ( 1  A và 2  A ) } = (F) với F = E \ { 1, 2 } và

      | F | = 7. Suy ra | ̄ | = 27 và |  | = |  |  | ̄ | = 29  27 = 512  128 = 384.

### 1.3 NGUYÊN LÝ BÙ TRỪ: Cho các tập hợp hữu hạn A và B. Ta có

   a) | A  B | = | A | + | B |  | A  B | (nguyên lý bù trừ).

   b) | A  B | = | A | + | B \ A | = | B | + | A \ B | =

                = | A \ B | + | A  B | + | B \ A |.




   Ví dụ: Lớp học L có 95 sinh viên học tiếng Anh, 60 sinh viên học tiếng Pháp và

   43 sinh viên học tiếng Anh và tiếng Pháp. Giả sử mỗi sinh viên trong lớp L đều

   học tiếng Anh hay tiếng Pháp. Hỏi lớp L có bao nhiêu sinh viên ? Có bao nhiêu

   sinh viên chỉ học tiếng Anh ? Có bao nhiêu sinh viên chỉ học tiếng Pháp ?

   Đặt A = { x  L | x học tiếng Anh } và B = { x  L | x học tiếng Pháp } thì

   L = A  B và A  B = = { x  L | x học tiếng Anh và tiếng Pháp }. Ta có

   | L | = | A  B | = | A | + | B |  | A  B | = 95 + 60  43 = 112.
                                                                                           2
   Số sinh viên chỉ học tiếng Anh = | A \ B | = | A |  | A  B | = 95  43 = 52.

   Số sinh viên chỉ học tiếng Pháp = | B \ A | = | B |  | A  B | = 60  43 = 17.

### 1.4 NGUYÊN LÝ CỘNG: Một công việc có thể thực hiện bằng một trong k cách

   khác nhau (chọn cách này thì không chọn các cách khác). Cách thứ j có thể thu

   được mj kết quả khác nhau (1  j  k). Ta có số kết quả khác nhau có thể xảy ra

   khi thực hiện xong công việc là (m1 + m2 +  + mk).




   Ví dụ: Người ta đưa vào danh sách bầu chọn “ quả bóng vàng ” gồm 5 cầu thủ

   Đức, 4 cầu thủ Argentina, 3 cầu thủ Hà Lan và 2 cầu thủ Brazil. Số cầu thủ là

   ứng viên của “ quả bóng vàng ” là 5 + 4 + 3 + 2 = 14 (cầu thủ).

### 1.5 NGUYÊN LÝ NHÂN: Một qui trình bao gồm k công việc diễn ra liên tiếp

   hoặc đồng thời. Việc thứ j có thể có mj cách thực hiện (1  j  k).

   Số cách khác nhau để thực hiện xong quá trình là (m1  m2    mk).



   Ví dụ:

   a) Đi từ Sài gòn đến Cần Thơ là một quá trình bao gồm 4 công việc liên tiếp

      trong đó việc 1: đi từ Sài Gòn đến Long An (giả sử có 3 lộ trình), việc 2: đi từ

      Long An đến Tiền Giang (giả sử có 4 lộ trình), việc 3: đi từ Tiền Giang đến

      Vĩnh Long (giả sử có 2 lộ trình) và việc 4: đi từ Vĩnh Long đến Cần Thơ (giả sử

      có 3 lộ trình). Khi đó lộ trình khác nhau để đi từ Sài Gòn đến Cần Thơ là

                           3  4  2  3 = 72 ( lộ trình ).
                                                                                         3
   b) Xét số nguyên dương N = abcd có 4 chữ số thập phân trong đó a tùy ý, b

     chẵn, c  3 và d > 3. Việc xây dựng số N xem như một quá trình bao gồm 4

     công việc đồng thời (a có 9 cách chọn, b có 5 cách chọn, c có 4 cách chọn,

     d có 6 cách chọn). Số lượng số nguyên dương N có thể tạo ra là

                             9  5  4  6 = 1.080 (số).

### 1.6 NGUYÊN LÝ DIRICHLET: ( Khẳng định sự tồn tại )

   Có n con cá và m cái ao (chưa có cá) thỏa n > m.

   Thả tùy ý n cá xuống m ao. Khi đó




   a) Có ít nhất một ao chứa ít nhất 2 cá [ phát biểu dạng đơn giản ].

                                       n
   b) Có ít nhất một ao chứa ít nhất   cá ( a  R,  a  là phần nguyên già
                                       m

     của a, nghĩa là  a  là số nguyên nhỏ nhất thỏa  a   a ) [ dạng chặt chẽ ].

   Ví dụ:

   a) Trong giảng đường hiện có  367 sinh viên. Có tất cả 366 ngày sinh nhật

     khác nhau (tính từ ngày 1/1 đến ngày 31/12 của mỗi năm kể cả năm nhuận).

     Số sinh viên (số cá)  367 > 366 = số ao (số ngày sinh nhật có thể có). Dùng

     nguyên lý Dirichlet ta thấy ngay có ít nhất 2 sinh viên có cùng ngày sinh nhật.
                                                                                           4
    b) Cho A  S = {1, 2, 3, … , 9, 10} và | A |  6.

      Chứng minh có a, b  A thỏa a + b = 11.

      Mỗi con số của A được xem như là một con cá có mã số chính là số đó. Ta có

       6 cá. Tạo ra 5 ao B, C, D, E và F để thả cá từ tập hợp A với qui định đặc

      biệt ( một cách thả đặc biệt ) : B chỉ nhận cá có mã số 1 và 10, C chỉ nhận cá

      có mã số 2 và 9, D chỉ nhận cá có mã số 3 và 8, E chỉ nhận cá có mã số 4

      và 7, F chỉ nhận cá có mã số 5 và 6.




      Số cá  6 > 5 = số ao nên theo nguyên lý Dirichlet, ta thấy ngay có ít nhất một

      ao nào đó chứa đúng 2 cá là a và b. Theo qui định đặc biệt, ta có a + b = 11.

    c) Lớp học có 100 học sinh. Có ít nhất 100 /12  = 9 học sinh có tháng sinh giống

      nhau và có ít nhất 100 / 7  = 15 học sinh có ngày sinh trong tuần ( tính theo

     thứ hai, thứ ba, … , chủ nhật ) là như nhau.

## II. GIẢI TÍCH TỔ HỢP (KHÔNG LẶP)

### 2.1 PHÉP HOÁN VỊ: Cho số nguyên n  1.

     a) Một phép hoán vị (không lặp) trên n phần tử là một cách sắp xếp n phần tử

        khác nhau vào n vị trí cho sẵn sao cho mỗi vị trí chỉ nhận một phần tử.
                                                                                          5
b) Số phép hoán vị trên n phần tử là Pn = n! = 1.2.3. … (n  1).n

Ví dụ:

a) Có P3 = 3! = 6 cách sắp xếp 3 phần tử a, b, c vào 3 vị trí cho trước (không

  xếp trùng) như sau: abc, acb, cba, bac, bca và cab.

b) Có P7 = 7! = 5.040 cách sắp xếp 7 người vào một bàn dài có 7 ghế (mỗi

  ghế chỉ có 1 người ngồi).

c) 5 nam và 5 nữ xếp thành một hàng dọc.

  Nếu xếp tùy ý thì có P10 = 10! = 3.628.800 cách xếp.

  Nếu xếp xen kẽ thì có 2  (5!)2 = 28.800 cách xếp.




  Nếu 5 nam đứng gần nhau thì có 5!  6! = 86.400 cách xếp.




  Nếu 5 nam đứng gần nhau và 5 nữ đứng gần nhau thì có 2  (5!)2 = 28.800

  cách xếp.




  Nếu một nam đứng ở đầu hàng và một nữ đứng ở cuối hàng thì có

  52  8! = 1.008.000 cách xếp.
                                                                             6
### 2.2 PHÉP TỔ HỢP VÀ CHỈNH HỢP: Cho các số nguyên n  1 và 0  m  n.

       a) Một tổ hợp n chọn m là một cách chọn ra m phần tử khác nhau từ n phần

          tử khác nhau cho trước mà không quan tâm đến thứ tự chọn.

       b) Một chỉnh hợp n chọn m là một cách chọn ra m phần tử khác nhau từ n

          phần tử khác nhau cho trước mà có quan tâm đến thứ tự chọn ( hoặc sau khi

.         chọn xong lại tiếp tục xếp m phần tử đã chọn vào m vị trí cho sẵn ).

                                           n         n!
       c) Số tổ hợp n chọn m là Cnm =   =             .
                                       m    m !(n  m)!
                                            




                                                           n!
       d) Số chỉnh hợp n chọn m là Anm = Cnm .Pm =               .
                                                        (n  m)!

       Ví dụ:

       a) Chọn 4 học sinh từ 10 học sinh để lập đội văn nghệ. Số cách chọn là C104 = 210.

       b) Chọn 4 học sinh từ 10 học sinh để bổ nhiệm làm đội trưởng, đội phó, thư ký và

       thủ quĩ của một đội công tác xã hội. Số cách chọn là A104 = C104 P4 = 210  24 = 5040.

       c) Lập các dãy số gồm 8 chữ số thập phân mà trong đó có đúng 3 chữ số 2.

          Số dãy số có được là C83  95 = 3.306.744.




                                                                                            7
   d) Lập các dãy số gồm 8 chữ số thập phân mà trong đó có các chữ số 1, 4, 9

      ( mỗi chữ số xuất hiện đúng một lần ) và các chữ số còn lại thì khác nhau từng

      đôi một. Số dãy số có được là A83  7  6  5  4  3 = 846.720 ( A83 = C83 .P3 ).




   e) Có bao nhiêu dãy số gồm 9 chữ số thập phân mà trong đó có đúng 3 chữ số

      5 đứng liền nhau hay có đúng 4 chữ số 8 đứng liền nhau ?

      Ta giải bài toán này bằng nguyên lý bù trừ.




    Số dãy số gồm 9 chữ số thập phân có đúng 3 chữ số 5 đứng liền nhau là 7.96

    Số dãy số gồm 9 chữ số thập phân có đúng 4 chữ số 8 đứng liền nhau là 6.95

      Số dãy số gồm 9 chữ số thập phân có đúng 3 chữ số 5 đứng liền nhau và có

      đúng 4 chữ số 8 đứng liền nhau là A42  82 = 12  64 = 768.

      Số dãy số cần tìm là (7.96 + 6.95)  768 = 69.95  768 = 4.073.613.

### 2.3 TÍNH CHẤT: Cho các số nguyên n  1 và 0  m  n. Khi đó

   a) Cnm = Cnn  m ( sự đối xứng ở hai cực ).

   b) Cn0 = Cnn = 1 và Cn1 = Cnn 1 = n.

   c) Khi m  1 thì Cnm1 = Cnm + Cnm 1 ( hạ chỉ số dưới ).

   Ví dụ:

   a) C70 = C77 = 1, C71 = C76 = 7, C72 = C75 = 21 và C73 = C74 = 35.
                                                                                           8
     b) C95 = C85 + C84 = ( C75 + C74 ) + ( C74 + C73 ).

### 2.4 NHỊ THỨC NEWTON: Cho số nguyên n  1 và các số thực x, y. Ta có
                         n
       (x + y)n =  Cni x i y n i (số mũ của x tăng dần và số mũ của y giảm dần)
                     i0
                         n
     = (y + x)n =  Cni x n i y i (số mũ của x giảm dần và số mũ của y tăng dần).
                     i 0

     Ví dụ:
                     6
       (x + y)6 =  C6i xi y 6i = y6 + 6xy5 + 15x2y4 + 20x3y3 + 15x4y2 + 6x5y + x6
                    i0
                     6
     = (y + x)6 =  C6i x 6i y i = x6 + 6x5y + 15x4y2 + 20x3y3 + 15x2y4 + 6xy5 + y6.
                    i 0




### 2.5 HỆ QUẢ: Cho số nguyên n  1. Ta có

     a) Cn0 + Cn1 + Cn2 +  + Cnn 1 + Cnn = (1 + 1)n = 2n .

     b) Cn0  Cn1 + Cn2 +  + ( 1)n  1 Cnn 1 + ( 1)n Cnn = [ ( 1) + 1]n = 0.

     c) Cn0 + Cn2 + Cn4 +  = Cn1 + Cn3 + Cn5 +  = 2n  1 [ a) cộng hoặc trừ với b) ]

## III. GIẢI TÍCH TỔ HỢP (CÓ LẶP)

### 3.1 PHÉP HOÁN VỊ LẶP: Cho các số nguyên dương k, n1 , n2 , ... và nk .

       Có k loại vật khác nhau, loại thứ j có nj vật giống hệt nhau (1  j  k).

       Tổng số vật là n = n1 + n2 +  + nk .

       a) Một phép hoán vị lặp trên n phần tử nói trên là một cách sắp xếp n phần tử

         đó vào n vị trí cho trước sao cho mỗi vị trí chỉ nhận một phần tử và không

         phân biệt các vật cùng loại .
                                                                                         9
b) Số phép hoán vị lặp trên n phần tử nói trên là

                                                              n!
                           Pn* ( n1 , n2 ,..., nk ) =                    .
                                                        n1 ! n2 !...nk !

   Khi n1 = n2 =  = nk = 1 thì hoán vị lặp trở về hoán vị không lặp.

Ví dụ:

a) Từ các chữ số 8, 1, 1, 9, 9, 9, 6, 6, 6, 6, ta có thể tạo ra bao nhiêu dãy số khác

   khác nhau (mỗi dãy số có 10 chữ số, chẳng hạn như dãy số 6196816996, ...) ?




   Đây là phép đếm số hoán vị lặp trên n = 10 phần tử với k = 4 loại vật, mỗi

   loại vật là một loại chữ số và số vật của mỗi loại là n1 = 1, n2 = 2, n3 = 3 và

                                                                   10!
   n4 = 4. Số dãy số có được là P10* (1, 2, 3, 4) =                       = 12.600.
                                                                 1!2!3!4!

b) Nếu yêu cầu thêm đầu dãy là chữ số lẻ ( 1 hoặc 9 ) và cuối dãy là chữ số

  chẵn ( 6 hoặc 8 ) thì ta có được bao nhiêu dãy ?

  Số dãy số có được là P8* (1,1, 3,3) + P8* (1,3, 4) + P8* (1, 2, 2, 3) + P8* (2, 2, 4) = 3.500.




                                                                                               10
   c) Nếu yêu cầu thêm đầu dãy là chữ số khác 6 thì số dãy số có được là

        P10* (1, 2, 3, 4)  P9* (1, 2, 3,3) =12.600  P9* (1, 2,3,3) = 12.600  5.040 = 7.560.




### 3.2 ÁP DỤNG: Cho các số nguyên n  1, k  2 và các số thực x1, x2, ... , xk .

    Ta có khai triển đa thức Newton nhiều biến ( mở rộng nhị thức Newton ) :

               ( x 1 + x 2 +  + x k )n =                            Pn* (n1 , n2 ,..., nk ) x1n1 x2n2 ....xknk
                                              n1  n2 ... nk  n
                                               n1 , n2 ,..., nk  0

                                               n!
    trong đó Pn* (n1 , n2 ,..., nk ) =                    (để ý các hệ số và số mũ của các biến
                                         n1 ! n2 !...nk !
    trong ngoặc đơn ở vế trái đều bằng 1).

    Ví dụ:

 a) Tìm hệ số của đơn thức x4y5z3u trong khai triển ( 9x  2y + 5z  8t + u )13 .

    Đặt a = 9x, b =  2y, c = 5z và d =  8t. Dùng đa thức Newton, ta có :

    ( 9x  2y + 5z  8t + u )13 = ( a + b + c + d + u )13 = P13* (4, 5,3, 0,1) a4b5c3dou1 + 
            13!
    =               (9x)4( 2y)5(5z)3( 8t)ou1 +  =  360.360  25 5394(x4 y5z3u) + 
         4!5!3!0!1!
    Hệ số cần tìm là  360.360  25 5394 =  9.457.287.840.000.

 b) Tìm hệ số của đơn thức x2y15z12t2 trong khai triển ( 3x2 + 4y5  z3  5t )10 .

    Đặt a = 3x2, b = 4y5, c =  z3 và d =  5t. Dùng đa thức Newton, ta có :

    ( 3x2 + 4y5  z3  5t )10 = ( a + b + c + d )10 = P10* (1,3, 4, 2) a1b3c4d2 + 
          10!
    =            (3x2)1(4y5)3( z3)4( 5t)2 +  = 12.600  314352 (x2 y15z12t2) + 
        1!3!4!2!
    Hệ số cần tìm là 12.600  314352 = 60.480.000.

### 3.3 PHÉP TỔ HỢP LẶP: Cho các số nguyên k  1 và m  0.

    Có k loại vật khác nhau, mỗi loại vật có nhiều vật giống hệt nhau.

    a) Một tổ hợp lặp k loại vật chọn m là một cách chọn ra m vật từ k loại vật

        nói trên sao cho mỗi loại vật được chọn một số lần tùy ý không quá m và

        không phân biệt các vật cùng loại.
                                                                                                                   11
   b) Số tổ hợp lặp k loại vật chọn m là K km  Cmk 1( k 1)  Cmm( k 1) .




      Mỗi tổ hợp lặp k loại vật chọn m là một cách chọn (k – 1) ô trắng tùy ý trên

      một thanh có [ m + (k – 1) ] ô như trên. Do đó số tổ hợp lặp k loại vật chọn

      m là Cmk 1( k 1) .

   Ví dụ: An đến siêu thị mua 15 cái mũ. Siêu thị bán 4 loại mũ (cùng kiểu dáng,

   chất lượng và giá cả) có các màu trắng, xanh, đen và nâu. Hỏi An có bao nhiêu

   cách mua mũ (theo màu sắc) ?

   Mỗi cách mua mũ là một tổ hợp lặp 4 loại vật chọn ra 15 vật.

   Số cách mua mũ là K 415  C1541(41)  C183 = 816.

### 3.4 ÁP DỤNG: Cho các số nguyên k  1 và m  0.

   Tìm số nghiệm nguyên  0 của phương trình x1 + x2 +  + xk = m

   ( các ẩn số x1, x2 , ... và xk là các số nguyên  0 ).

   Mỗi nghiệm nguyên  0 của phương trình trên chính là một cách chọn ra m

   vật từ k loại vật, mỗi giá trị xj là số vật loại thứ j được chọn ( 1  j  k ).

   Do đó số nghiệm nguyên  0 của phương trình cũng là Kkm  Cmk 1( k 1) .



                                                                                     12
Ví dụ:

a) Xếp tùy ý 20 viên bi (y hệt nhau) vào 4 cái hộp. Hỏi có bao nhiêu cách xếp ?

   Gọi xj là số bi xếp vào hộp thứ j (1  j  4) thì x1 + x2 + x3 + x4 = 20 và

  x1, x2 , x3 và x4 nguyên  0. Số cách xếp = ( số nghiệm nguyên  0 của

  phương trình trên ) = K 420  C233 = 1.771.

b) Khi khai triển ( 9x  2y + 5z  8t + u )13, ta được bao nhiêu đơn thức khác

  nhau ?

  (9x  2y + 5z  8t + u)13 =                          c( p, q, r , s, n) x p y q z r t s u n với c(p, q, r, s, n)  R
                                p  q  r  s  n 13
                                  p ,q ,r , s ,n 0

  Mỗi đơn thức c(p, q, r, s, n).xp yq zr ts un tương ứng với một bộ số nguyên

  không âm (p, q, r, s, n). Mỗi bộ số nguyên không âm (p, q, r, s, n) chính là

   một nghiệm nguyên  0 của phương trình p + q + r + s + n = 13.

  Do đó số đơn thức xuất hiện = ( số nghiệm nguyên  0 của phương trình

  p + q + r + s + n = 13 ) = K 513  C174 = 2.380.

c) Tìm số nghiệm nguyên của phương trình x + y + z + t + u + v = 20 trong đó

  x  2, y  0, z   3, t  0, u  4 và v = 3 (*). Loại ẩn v, giữ nguyên các ẩn

   y, t và đổi biến x’ = (x  2)  0, z’ = (z + 3)  0 và u’ = (u  4)  0, ta có

  phương trình tương đương

  x’ + y + z’ + t + u’ = 14 với x’, y, z’, t, u’ đều nguyên  0 (**).

Số nghiệm nguyên của (*) = Số nghiệm nguyên  0 của (**) = K 514  C184 = 3.060.

d) Tìm số nghiệm nguyên của phương trình x + y + z = 21 trong đó x >  4,

  y > 5 và 2  z < 7 (*). Do x, y  Z nên ( x >  4  x   3 ) và

  (y > 5  y  6). Đổi biến x’ = (x + 3)  0, y’ = (y  6)  0 và z’ = (z  2)  0,

  ta có phương trình tương đương
                                                                                                                   13
  x’ + y’ + z’ = 16 với x’, y’, z’ đều nguyên  0 và z’ < 5 (**).




   Xét phương trình x’ + y’ + z’ = 16 với x’, y’, z’ đều nguyên  0 (I) và

  phương trình x’ + y’ + z’ = 16 với x’, y’, z’ đều nguyên  0 và z’  5 (II).

   Đổi biến z’’ = (z’  5)  0, (II) tương đương với phương trình

  x’ + y’ + z’’ = 11 với x’, y’, z’’ đều nguyên  0 (III).

   Số nghiệm nguyên của (*) = Số nghiệm nguyên của (**) =

   = Số nghiệm của (I)  số nghiệm của (II) =

   = Số nghiệm của (I)  số nghiệm của (III) = K 316  K 311 = C182  C132 = 153  78 =

   = 75.

e) Tìm số nghiệm nguyên  0 của bất phương trình x + y + z  19 (*).

   Đặt t = 19  (x + y + z) thì ta có phương trình tương đương x + y + z + t = 19

  với x, y, z, t đều nguyên  0 (**).

   Số nghiệm nguyên  0 của (*) = Số nghiệm nguyên  0 của (**) = K 419  C223

   = 1.540.

f ) Tìm số nghiệm nguyên của bất phương trình x + y + z + t >  20 trong đó

  x < 1, y  4, z   3 và t < 6 (*).

   Đổi biến x’ =  x  0, y’ =  y   4, z’ =  z  3 và t’ =  t   5, ta có bất

  phương trình tương đương x’ + y’ + z’ + t’  19. Đổi biến y’’ = (y’ + 4)  0,

   z’’ = (z’  3)  0 và t’’ = (t’ + 5)  0, ta có bất phương trình tương đương

  x’ + y’’ + z’’ + t’’  25. Đặt u = 25  (x’ + y’’ + z’’ + t’’) thì ta có phương

  trình tương đương x + y + z + t + u = 25 với x, y, z, t, u đều nguyên  0 (**)
                                                                                      14
            Số nghiệm nguyên của (*) = Số nghiệm nguyên  0 của (**) = K 525  C294 =

            = 23.751.

------------------------------------------------------------------------------------------------------------




                                                                                                         15

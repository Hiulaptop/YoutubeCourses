# Chương II: Tập hợp và ánh xạ

## I. TẬP HỢP

### 1.1 KHÁI NIỆM

     Tập hợp là một bộ sưu tập các phần tử có chung một số tính chất nào đó.

     Ta ký hiệu các tập hợp là A, B, C, … và ký hiệu các phần tử là a, b, c, ...

     Nếu phần tử a thuộc về tập hợp A, ta viết a  A.

     Nếu phần tử b không thuộc về tập hợp A, ta viết b  A.




     Khái niệm “ tập hợp tất cả các tập hợp” là vô nghĩa (vì không thể có A  A).

 Ví dụ:

 a) Tập hợp các sinh viên năm thứ nhất khoa Công nghệ thông tin trường Đại học

   Khoa học tự nhiên TP Hồ Chí Minh (4 tính chất chung).

 b) Tập hợp các môn học của ngành Sử học trường Đại học Khoa học xã hội và nhân

   nhân văn Hà Nội (3 tính chất chung).

### 1.2 CÁC TẬP HỢP SỐ

     Tập hợp các số nguyên tự nhiên N = { 0, 1, 2, … } (với các phép toán + và ).

     Tập hợp các số nguyên Z = { …,  2,  1, 0, 1, 2, … }

     ( với các phép toán +,  và  ).

                                         1     7         2     8
     Tập hợp các số hữu tỉ Q = { …,  ,  ,  6, 0,        , 9, , … }
                                         5     4         3     7

     ( với các phép toán +,  ,  và : ).

     Tập hợp các số thực R = { các số hữu tỉ, các số vô tỉ ( 2 ,  ,  ln3,  e, ...) }
                                                                                        1
    ( với các phép toán +,  , , : và rút căn chưa hoàn chỉnh ).

    Tập hợp các số phức C = R + iR ( với các phép toán +,  , , : và rút căn hoàn

    chỉnh ).

### 1.3 LỰC LƯỢNG CỦA TẬP HỢP: Cho tập hợp X.

    Ký hiệu | X | là số phần tử ( hay lực lượng ) của tập hợp X.

    Nếu X là tập hợp hữu hạn có n phần tử ( n  N ) thì ta ghi | X | = n.

    Nếu X là tập hợp vô hạn ( có vô số phần tử ) thì ta ghi | X | = + .

Ví dụ:

a) Các tập hợp số N, Z, Q, R và C đều là các tập hợp vô hạn.

b) Đặt X là tập hợp các ngày trong tháng 1 năm 2000 và Y là tập hợp những

  người nhập cảnh vào Việt Nam trong ngày 01 tháng 01 năm 2020.

  Ta có X và Y đều là các tập hợp hữu hạn với | X | = 31 nhưng không biết được

  | Y | nếu chưa tra cứu hồ sơ.

### 1.4 BIỂU DIỄN TẬP HỢP: Có 3 cách biểu diễn tập hợp

    a) Giản đồ Venn: vẽ một đường cong khép kín trên mặt phẳng. Các phần tử của

         tập hợp được vẽ phía trong đường cong. Các phần tử khác ( nếu có ) được vẽ

         phía ngoài đường cong.




    b) Liệt kê: giữa hai dấu { và }, mỗi phần tử được viết ra đúng một lần ( theo thứ

         tự tùy ý ) và có dấu phẩy ngăn cách giữa hai phần tử liên tiếp.

         Chẳng hạn A = { a, b, c, d, e } = { c, a, d, b, e } = { e, a, d, c, b } = …

    c) Nêu các tính chất chung:

         A = { x | p(x) } hay B = { x  C | q(x) }.

                                                                                       2
      ( p(x) và q(x) là các vị từ theo biến x dùng để mô tả các tính chất của x ).

      Chẳng hạn A = { cầu thủ x | x đã đoạt giải thưởng quả bóng vàng FIFA },

      B = { x  Z |  75 < x  100 và x 9 } = {  72,  63,  54, …, 81, 90, 99 }.

### 1.5 TẬP HỢP TRỐNG

    Ta ký hiệu  là tập hợp trống, nghĩa là tập hợp không có phần tử nào cả.

    Chẳng hạn A = { x  R | 3x2  8x + 11 = 0 } =  và

    B = { Những người Việt Nam đã đoạt giải Nobel kinh tế } = .

### 1.6 TẬP HỢP CON: Cho các tập hợp A và B.

    a) Ta nói A là một tập hợp con của B (hay A chứa trong B hay B chứa A)

         nếu “ x, ( x  A  x  B ) ” . Lúc đó ta ký hiệu A  B hay B  A.

    b) Suy ra A  B ( A không phải là một tập hợp con của B hay A không chứa

         trong B hay B không chứa A ) nếu “ xo , ( xo  A và xo  B ) ”.




Ví dụ:

Cho A = { x  Z | x 2 }, B = { x  Z | x 3 } và C = { x  Z | x 4 }. Ta có C  A

( x, x  C  x 4  x = 4r với r  Z  x = 2s với s = 2r  Z  x 2 

x  A ) và C  B ( 4  C và 4  B ). Tương tự, A  C, B  C, A  B và B  A.

### 1.7 TÍNH CHẤT: Cho các tập hợp A, B và C. Khi đó

    a)   A  A.                             b) ( A  B )  ( | A |  | B | ).

    c) (A  B và B  C)  ( A  C ) [ tính truyền ( bắc cầu ) của quan hệ  ].




                                                                                      3
### 1.8 TẬP HỢP BẰNG NHAU: Cho các tập hợp A và B.

    a) Ta nói A = B nếu ( A  B và B  A ).

    b) Suy ra A = B  “ x, ( x  A  x  B ) ”.

    c) Suy ra A  B  ( A  B hay B  A ).

Ví dụ:

a) A = { x  Z | x  4 và x  6 } và B = { x  Z | x  12 }. Chứng minh A = B.

   x, x  A  x  4 và x  6  x = 4r = 6s với r, s  Z  2r = 3s  s = 2t

   với t  Z  x = 6(2t) = 12t với t  Z  x 12  x  B. Vậy A  B.

   x, x  B  x  12  x = 12t với t  Z  x = 4r = 6s với r = 3t  Z và

   s = 2t  Z  x 4 và x  6  x  A. Vậy B  A.

   Do A  B và B  A nên A = B.

b) C = { các hình chữ nhật có hai đường chéo vuông góc với nhau },

  D = { các hình chữ nhật có hai cạnh liên tiếp bằng nhau },

 E = {các hình thoi có góc vuông}, F = {các hình thoi có hai đường chéo bằng nhau}

  và G = { các hình vuông }. Ta có C = D = E = F = G.

### 1.9 TẬP HỢP CÁC TẬP CON: Cho tập hợp E.

     Đặt (E) là tập hợp tất cả các tập hợp con của E, nghĩa là

     (E) = { A | A  E } = { , { a }, … , { a, b }, … , { a, b, c }, … , E }.

      ( liệt kê các tập hợp con có số phần tử tăng dần lên ).

### 1.10 MỆNH ĐỀ: Cho tập hợp E.

      a) Nếu | E | = n  0 thì |(E) | = 2n.     b) Nếu | E | = +  thì |(E) | = + .

      Chứng minh:

      a) Ta chứng minh kết quả này bằng phương pháp qui nạp theo n  0.

                                                                                     4
           Khi | E | = n = 0 thì E =  nên (E) = {  } và |(E) | = 1 = 2o .

           Vậy mệnh đề đúng khi n = 0.

           Xét k  0 tùy ý và giả sử các tập hợp có k phần tử đều có 2k tập hợp

           con. Xét | E | = k + 1. Viết E = F  { e } với e  E và F = E \ { e }.

           Ta có | F | = k nên |(F) | = 2k . Đặt  = { A  { e } | A  (F) } thì

           (E) = (F)   , (F)   =  và |  | = |(F) | = 2k. Suy ra

           |(E) | = |(F) | + |  | = |(F) | + |(F) | = 2k + 2k = 2k + 1, nghĩa là

           mệnh đề cũng đúng khi n = k + 1. Vậy mệnh đề đúng n  0.

       b) Đặt  = { { a } | a  E } thì   (E) và |  | = +  nên |(E) | = + .

  Ví dụ:

  Nếu | E | = 1 thì E = { a } và (E) = { , E } có |(E) | = 2 = 21.

  Nếu | E | = 2 thì E = {a, b} và (E) = { , { a }, { b }, E } có |(E) | = 4 = 22.

  Nếu | E | = 3 thì E = { a, b, c } và

  (E) = { , { a }, { b }, { c }, { a, b }, { a, c }, { b, c }, E } có |(E) | = 8 = 23.

## II. CÁC PHÉP TOÁN TẬP HỢP

  Cho các tập hợp A, B, C  E (ta nói E là tập hợp vũ trụ).




### 2.1 PHẦN BÙ

      a) Đặt A = { x  E | x  A } thì A được gọi là phần bù của A ( trong E ).
                                                                                            5
    b)  = E, E =  và A = A (luật bù kép).

    c) A  B  B  A ; A = B  A = B .




Ví dụ: Cho E = R, A = ( , 1] và B = ( 5, + ).

Ta có A = (1, + ) và B = ( ,  5 ] .




### 2.2 PHẦN GIAO

    a) Đặt A  B = { x  E | x  A và x  B } là phần giao của A và B.

      Ta có x  (A  B)  (x  A và x  B).

             x  (A  B)  (x  A hay x  B).




    b) (A  B)  A và     (A  B)  B. Hơn nữa      (A  B) = A  A  B.

    c) Phép  giao hoán và kết hợp, nghĩa là

      B  A = A  B và (A  B)  C = A  (B  C) = A  B  C.
                                                                           6
    d) A  A = A ( luật lũy đẳng ), A  E = A ( luật trung hòa ),

       A   =  ( luật thống trị ) và A  A =  ( luật bù ).

Ví dụ: Cho E = R, A = [ 2, 15) và B = (1, 18 ]. Ta có A  B = (1, 7).




### 2.3 PHẦN HỘI

    a) Đặt A  B = { x  E | x  A hay x  B } là phần hội của A và B.

      Ta có x  (A  B)  (x  A hay x  B).

             x  (A  B)  (x  A và x  B).




    b) (A  B)  A và     (A  B)  B. Hơn nữa      (A  B) = A  A  B.

    c) Phép  giao hoán và kết hợp, nghĩa là

      B  A = A  B và       (A  B)  C = A  (B  C) = A  B  C.

    d) A  A = A ( luật lũy đẳng ), A   = A ( luật trung hòa ),

      A  E = E ( luật thống trị ) và A  A = E ( luật bù ).

Ví dụ: Cho E = R, A = ( 4, 5) và B = [ 0, 11]. Ta có A  B = ( 4, 11].




                                                                           7
### 2.4 PHẦN HIỆU

    a) Đặt A \ B = { x  E | x  A và x  B } là phần hiệu của A và B.

      Ta có x  (A \ B)  (x  A và x  B).

             x  (A \ B)  (x  A hay x  B).




    b) (A \ B)  A . Hơn nữa (A \ B) = A  A  B = .

    c) Phép \ không giao hoán và không kết hợp, nghĩa là có thể xảy ra

       (B \ A)  (A \ B) và (A \ B) \ C  A \ (B \ C).

    d) A \ A = , A \  = A,  \ A = ,

       A \ E = , E \ A = A , A \ A = A và A \ A = A .

Ví dụ: Cho E = R, A = ( ,  3) và B = [ 10, + ).

       Ta có A \ B = ( ,  10) và B \ A = [ 3, + ).




### 2.5 CÁC TÍNH CHẤT LIÊN QUAN GIỮA CÁC PHÉP TOÁN

    a) A  B = A  B và A  B = A  B ( luật bù DE MORGAN ).

    b) Phép  và  phân phối lẫn nhau, nghĩa là

      A  (B  C) = (A  B)  (A  C) và

      A  (B  C) = (A  B)  (A  C).

                                                                         8
    c) A  (A  B) = A và A  (A  B) = A ( luật hấp thu ).




Luật hấp thu : A  (A  B) = A                      Luật hấp thu : A  (A  B) = A

 [ A : tập lớn, A  B : tập nhỏ ]                     [ A : tập nhỏ, A  B : tập lớn ]

    d) A \ B = A  B (xóa hoặc phục hồi phép toán \ ).

### 2.6 ÁP DỤNG

    Các tính chất của các phép toán tập hợp dùng để

     Rút gọn một biểu thức tập hợp.

     Chứng minh một đẳng thức tập hợp.

     Chứng minh một bao hàm thức tập hợp.

Ví dụ: Cho các tập hợp A, B, C  E.

a) Rút gọn biểu thức tập hợp D = (A  B) \ [ (A \ B)  (B \ A) ].

  D = (A  B)  ( A  B)  ( B  A) [ xóa phép toán \ ]

    = (A  B)  A  B  B  A [ luật bù DE MORGAN ]

    = (A  B)  ( A  B )  ( B  A ) [ luật bù DE MORGAN ]

    = (A  B)  ( A  B)  ( B  A) [ luật bù kép ]

    = [ (A  B)  ( A  B) ]  ( B  A) [ luật kết hợp ]

    = [ (A  A )  B ]  ( B  A) [ luật phân phối (rút gọn lại) ]

    = (   B)  ( B  A) [ luật bù ] = B  ( B  A) [ luật trung hòa ]

    = (B  B )  (B  A) [ luật phân phối (khai triển ra) ]

    =   (B  A) [ luật bù ] = (B  A) [ luật trung hòa ].
                                                                                     9
 b) Chứng minh đẳng thức tập hợp      A  (B \ C) = (A  B) \ (A  C).

   Vế phải = (A  B)  A  C [ xóa phép toán \ ]

            = (A  B)  ( A  C ) [ luật bù DE MORGAN ]

         = (A  B  A )  (A  B  C ) [ luật phân phối (khai triển ra) và kết hợp ]

            = (A  A  B)  (A  B  C ) [ luật giao hoán ]

         = (  B)  (A  B  C ) [ luật bù ] =   (A  B  C ) [ luật thống trị ]

            = (A  B  C ) [ luật trung hòa ] = A  (B  C ) [ luật kết hợp ]

            = A  (B \ C) [ phục hồi phép toán \ ] = Vế trái.

 c) Chứng minh bao hàm thức tập hợp [ (B \ C) \ (B \ A) ]  (A \ C).

   Cho ví dụ để thấy không có dấu đẳng thức xảy ra trong bao hàm thức trên.

   Vế trái = (B  C )  B  A [ xóa phép toán \ ]

           = (B  C )  ( B  A ) [ luật bù DE MORGAN ]

           = (B  C )  ( B  A) [ luật bù kép ]

        = (B  C  B )  (B  C  A) [ luật phân phối (khai triển ra) và kết hợp ]

           = (B  B  C )  (B  C  A) [ luật giao hoán ]

        = (  C )  (B  C  A) [ luật bù ] =   (B  C  A) [ luật thống trị ]

        = (B  C  A) [ luật trung hòa ]  ( C  A) = (A  C ) [ luật giao hoán ]

          = (A \ C) [ phục hồi phép toán \ ] = Vế phải.

   Chọn A = { 1, 2 }, B = { 1 } và C =  thì (B \ C) \ (B \ A) = B  (A \ C) = A.

## III. TÍCH DESCARTES CỦA CÁC TẬP HỢP

   Cho số nguyên n  2 và các tập hợp A1, A2, …, An đều  .

### 3.1 ĐỊNH NGHĨA

       aj  Aj (1  j  n) , ta có bộ (a1, a2, ... , an) được ghép một cách hình thức.
                                                                                          10
                                  n
     Đặt A1  A2    An =  A j = { (a1, a2, ... , an) | aj  Aj (1  j  n) }.
                                  j 1
                                         n
     Ta nói A1  A2    An =  A j là tích Descartes của A1, A2, … và An .
                                         j 1

     Khi A1 = A2 =  = An = A thì ta viết gọn

     A1  A2    An = An = { (a1, a2, ... , an) | a1, a2, ... , an  A }.




Ví dụ:

                                                2               8
Z  Q = { (k, q) | k  Z, q  Q } = { (5,  ), (0, 9), ( 4,      ), … }.
                                                7               3
R  Q  N  Z = { (x, q, m, k) | x  R, q  Q, m  N, k  Z }

                           1                     9
                 = {( 2,     , 6,  1), ( ln3,  , 0, 7), (,  8, 11, 0), …}.
                           4                     5
R  R = R2 = { (a, b) | a, b  R } = Tập hợp các điểm trên mặt phẳng (Oxy).

R  R  R = R3 = { (a, b, c) | a, b, c  R }

                 = Tập hợp các điểm trong không gian (Oxyz).




### 3.2 MỆNH ĐỀ: Cho các tập hợp hữu hạn A, A1, A2, … và An . Khi đó

    a) | A1  A2    An | = | A1 |.| A2 | … | An |.           b) Suy ra | An | = | A |n.
                                                                                       11
  Ví dụ: Cho A = { a, b }, B = { 1, 2, 3 } và C = { ,  }. Khi đó

  A  B = { (a,1), (a,2), (a,3), (b,1), (b,2), (b,3) } và | A  B | = 6 = | A |.| B | = 2  3.

  A  B  C = { (a,1,), (a,2,), (a,3,), (b,1,), (b,2,), (b,3,), (a,1,), (a,2,),

  (a,3,), (b,1,), (b,2,), (b,3,) } và | A  B  C | = 12 = | A |.| B |.| C | = 2  3  2.

  A2 = A  A = { (a, a), (a, b), (b, a), (b, b) } và | A2 | = 4 = | A |2 = 22.

  A3 = A2  A = { (a,a,a), (a,b,a), (b,a,a), (b,b,a), (a,a,b), (a,b,b), (b,a,b), (b,b,b) } và

  | A3 | = 8 = | A |3 = 23.

## IV. ÁNH XẠ

### 4.1 ĐỊNH NGHĨA: Cho các tập hợp X và Y với X    Y.

       a) Một ánh xạ f từ X vào Y là một qui tắc như sau:

           Với mỗi x  X, có tương ứng duy nhất yx  Y ( x  X, ! yx  Y ).

           Ký hiệu ánh xạ f là f : X ---- Y      trong đó
                                   x  yx = f (x)

           yx = f (x) gọi là ảnh của x qua ánh xạ f hay là giá trị của ánh xạ f tại x.

           X là miền xác định của ánh xạ f . Y là miền (chứa các) ảnh của ánh xạ f .

       b) Khi X, Y  R, ta thường gọi ánh xạ f là hàm số y = f (x).




  Ví dụ:

  a) f : X = { a, b, c, d }  Y = { 1, 2, 3, 4, 5 } có f (a) = 1, f (b) = 2, f (c) = 2 và

    f (d) = 3. Ta có f là một ánh xạ.




                                                                                            12
b) Các qui tắc u và v ( đi từ X vào Y ) dưới đây không phải là các ánh xạ vì u(b)

  không xác định trong Y và v(c) có hơn một giá trị trong Y :




                                                 2x
c) g : X = R \ {1}  Y = (0, + ) có g(x) =            , x  X.
                                              | x 1 |
  Ta có g là một hàm số.

d) h : X = R  Y = [ 1, + ) thỏa h(x) = ln | x2  3x + 2 |, x  X.

  Ta có h không phải là một hàm số vì 1 X, h(1) = ln0 không xác định

  ( hoặc nói 0  X, h(0) = ln2  Y = [ 1, + ) vì ln2 < lne = 1).

                             p                 p
e) u : X = Q  Y = Z có u( ) = p + q, x =        X. Ta có u không là một hàm
                             q                 q

                1  2
  số vì xo =     =  X mà u(xo) = 1 + 2 = 3 và u(xo) = 2 + 4 = 6 : mâu thuẫn.
                2  4

### 4.2 ÁNH XẠ ĐỒNG NHẤT: Cho tập hợp X  .

    Ánh xạ IdX : X  X được gọi là ánh xạ đồng nhất trên X ( Id = Identity ).
                 xx




                                                                                13
### 4.3 SO SÁNH ÁNH XẠ: Cho các ánh xạ f : X  Y và g : X  Y.

    a) Ta nói f = g nếu x  X, f (x) = g(x).

     b) Suy ra f  g  xo  X, f (xo)  g(xo).




Ví dụ: Cho f, g, h : X = R  Y = R thỏa f (x) = sinx, g(x) = | sin | x | | và

                          7
        h(x) = cos (x +      ), x  X. Ta có g  f và h = f vì
                           2

                                                        
( )  X, g( ) = | sin|         | | = 1  f ( ) = sin( ) =  1.
    2             2            2                2           2

                           7                      
x  X, h(x) = cos (x +       ) = cos (x  ) = cos (  x) = sinx = f (x).
                            2             2         2

### 4.4 TÍCH CÁC ÁNH XẠ: Cho f : X  Y và g : Z  T với Y  Z .

    a) Lập ánh xạ h : X  T có h(x) = g [ f (x) ], x  X.

        Ta nói h là ánh xạ tích của f và g và ký hiệu h = g o f .

        Như vậy x  X, h(x) = (g o f )(x) = g [ f (x) ].




    b) Tích ánh xạ có tính kết hợp nên ta có thể lập tích của nhiều ánh xạ liên tiếp

        nếu miền ảnh của ánh xạ trước chứa trong miền xác định của ánh xạ đi sau.

                                                                                       14
 Ví dụ: Cho f : X = R  Y = (8, + ) thỏa f (x) = 3ex + 8, x  X,

               g : Z = [ 0, + )  T = [  2, + ) thỏa g(x) = x  2, x  Z

         và    h : U = ( 5, + )  V = R thỏa h(x) = x4 + 1, x  X.

Do Y  Z và T  X nên có các ánh xạ tích u = g o f : X  T và v = f o g : Z  Y.




 x  X, u(x) = (g o f )(x) = g [ f (x) ] = g(3ex + 8) = 3e x  8  2 và

 x  Z, v(x) = (f o g)(x) = f [ g(x) ] = f ( x  2) = 3 e x 2 + 8.

Do T  U nên có ánh xạ tích w = h o u = h o g o f : X  V.




 x  X, w(x) = (h o u)(x) = h [ u(x) ] = h( 3e x  8  2) = ( 3e x  8  2)4 + 1.

### 4.5 TÍNH CHẤT: Cho f : X  Y . Khi đó

     a) (IdY) o f = f = f o (IdX) . Hơn nữa nếu X = Y thì (IdX) o f = f = f o (IdX).




                                                                                       15
    b) Nếu X  Y và g : Y  X thì tồn tại g o f và f o g nhưng g o f  f o g.




    c) Nếu f : X  X và g : X  X thì tồn tại g o f và f o g nhưng không nhất

         thiết g o f = f o g . Như vậy tích ánh xạ không giao hoán.




Ví dụ:

a) f : X = R  Y = [ 0, + ) thỏa f (x) = (x + 1)2, x  X và

  g : Y = [ 0, + )  X = R với g(x) = sin x , x  Y.

  x  X, (g o f )(x) = g [ f (x) ] = g [ (x + 1)2 ] = sin ( x  1) 2 = sin | x + 1 |.

  x  Y. (f o g )(x) = f [g(x)] = f (sin x ) = (sin x + 1)2.

  Do X  Y nên g o f  f o g .
                                                                       3x  2
b) u và v : X = R  X thỏa u(x) = 2x2  5x + 1 và v(x) =                        , x  X.
                                                                        x2  1
                                    3(2 x 2  5 x  1)  2            6 x 2  15 x  5
  x  X, (v o u)(x) = v [ u(x) ] =                        =
                                    (2 x 2  5 x  1)2  1   4 x 4  20 x3  29 x 2  10 x  2
                                       3x  2 2      3x  2         x 4  15 x 3  10 x 2  9 x  1
  và (u o v )(x) = u [ v(x) ] = 2(            )  5(        ) + 1 =                                 .
                                       x2  1        x2  1                 x4  2 x2  1

  Do 0  X, (vou)(0) = (5/ 2)  (uov)(0) =  1 nên v o u  u o v.
                                                                                                        16
## V. ẢNH VÀ ẢNH NGƯỢC CỦA TẬP HỢP QUA ÁNH XẠ

### 5.1 ĐỊNH NGHĨA: Cho f : X  Y và A  X.

      a) Đặt f (A) = { f (a) | a  A }  Y. Ta nói f (A) là ảnh của A qua ánh xạ f.

       y  Y, [ y  f (A)  x  A, y = f (x) ] và [y  f (A)  x  A, y  f (x) ].

       b) Khi A =  thì f () = . Khi A = X thì f (X) = { f (x) | x  X }  Y.

           Ta nói f (X) là tập hợp tất cả các ảnh của f và ký hiệu f (X) = Im(f )

           ( Images of f ) .




       c) Cho f : X  Y và g : Z  T . Để lập được ánh xạ tích h = g o f : X  T,

           ta chỉ cần có điều kiện f (X)  Z ( không cần điều kiện đặc biệt Y  Z ).




  Ví dụ:

  a) f : X = { 1, 2, 3, 4, 5, 6, 7 }  Y = { a, b, c, d, e, u, v, w, z } có f (1) = a,

    f (2) = b, f (3) = a, f (4) = c, f (5) = b, f (6) = d và f (7) = e.


                                                                                         17
  Với A = { 1, 2, 3, 4, 5 }  X thì f (A) = { a, b, c }  Y và

  Im(f ) = f (X) = { a, b, c, d, e }  Y.

b) g : X = R  Y = (0, + ) thỏa g(x) = x2  2x + 3, x  X.

  Tìm g(A), g(B), g(C) và Im(g) = g(X) nếu A = {  2, 1, 0, 1, 2, 3 }, B = [ 3, 5)

  và C = [  2, 3 ] = D  E với D = [  2, 1] và E = (1, 3 ].

  Viết X = H  K với H = ( , 1] và K = (1, + ).

  Ta có g(A) = { 2, 3, 6, 11 } vì g( 2) = 11, g( 1) = g(3) = 6, g(0) = g(2) = 3 và

  g(1) = 2. Do g’(x) = 2(x  1), x  X nên g tăng trên G và giảm trên H.

 Lập bảng biến thiên của hàm số y = g(x):




                                                                                  18
   Ta thấy g(B) = [ 6, 18 ), g(C) = g(D)  g(E) = [ 2, 11 ]  (2, 6 ] = [ 2, 11 ] và

  g(X) = g(H)  g(K) = [ 2, + )  (2, + ) = [ 2, + ).

### 5.2 ĐỊNH NGHĨA: Cho f : X  Y và B  Y.

    a) Đặt f  1(B) = { x  X | f (x)  B }  X.

         Ta nói f  1(B) là ảnh ngược của B bởi ánh xạ f .

         x  X, [ x  f  1(B)  f (x)  B ] và [ x  f  1(B)  f (x)  B ].

    b) Khi B =  thì f  1() = . Khi B = Y thì f  1(Y) = X.

         Khi B = { b } thì f  1(B) = f  1(b) = { x  X | f (x) = b } là tập hợp các

         nghiệm trên X của phương trình f (x) = b ( ẩn số x  X ).

         Ta cũng nói f  1(b) là tập hợp tất cả các ảnh ngược của b bởi ánh xạ f .




Ví dụ:

a) f : X = { a, b, c, d, e, u, v, w, z }  Y = { 1, 2, 3, 4, 5, 6, 7, 8 } với f (a) = 1,

  f (b) = 2, f (c) = 1, f (d) = 3, f (e) = 2, f (u) = 4, f (v) = 1, f (w) = 5 và f (z) = 7.

  Ta có f 1(1) = { a, c, v }, f  1(2) = { b, e }, f  1(3) = {d} và f  1(6) = f  1(8) = .

  Với B = { 1, 2, 3, 6, 8 }  Y thì f 1(B) = { a, b, c, d, e, v }  X và f 1(Y) = X.




                                                                                              19
b) g : X = R  Y = [ 3, + ) thỏa g(x) = 2x2  1, x  X. Tìm g 1(A), g 1(B),

 g 1(C) , g 1(D) nếu A = { 5,  1, 0, 8}, B = ( ,  2 ], C = ( 4, 5), D = [1, 6).

 Lần lượt giải các phương trình g(x) =  5, g(x) =  1, g(x) = 0 và g(x) = 8 với

 ẩn số x  R), ta có g 1( 5) = , g 1( 1) = { 0 }, g 1(0) = {  1/ 2 } và

 g 1(8) = {  3/ 2 }. Suy ra g 1(A) = { 0,  1/ 2 ,  3/ 2 }.

 Lần lượt giải các phương trình g(x) = 1, g(x) = 5 và g(x) = 6 với ẩn số x  R,

 ta có g 1(1) = { 1}, g 1(5) = {  3 }, g 1(6) = {  7 / 2 }.

 Do g’(x) = 4x, x  X nên g tăng trên (0, + ) và giảm trên ( , 0).

 Lập bảng biến thiên của hàm số y = g(x) với a = 3 và b = 7 / 2 .




                                                                                     20
  g(R) = [ 1, + ). Do B  g(R) = ( ,  2 ]  g(R) =  nên g 1(B) = . Do

  C’ = C  g(R) = ( 4, 5)  g(R) = [ 1, 5 ) nên g 1(C) = g 1(C’) = ( 3 , 3 ).

  Do D  g(R) = [1, 6)  g(R) = [1, 6) nên g 1(D) = ( 7 / 2 ,  1]  [ 1, 7 / 2 ).

### 5.3 TÍNH CHẤT: Cho f : X  Y với A, A’  X và B, B’  Y. Khi đó

    a) Nếu A  A’ thì f (A)  f (A’). Nếu B  B’ thì f  1 (B)  f  1 (B’).




    b) f  1[ f (A) ]  A và f [ f  1(B) ]  B.




    c) f (A  A’) = f (A)  f (A’), f (A  A’)  [ f (A)  f (A’) ] và

      f (A \ A’)  f (A) \ f (A’).

    d) f  1(B  B’) = f  1(B)  f  1(B’), f  1(B  B’) = [ f  1(B)  f  1(B’) ]

      và f  1(B \ B’) = [ f  1(B) \ f  1(B’) ].

Ví dụ: Cho f : X = R  Y = ( 2, + ) thỏa f (x) = x2, x  X.

a) A = { 1 }  X có f (A) = {1} và f  1[ f (A) ] = { 1}  A với f 1[ f (A) ]  A.

b) B = {1}  Y có f 1(B) = {1} và f [ f 1(B) ] = {1}  B với f [ f 1(B) ]  B.

c) A = { 1 }, A’ = {  1 }  X có A  A’ =  và f (A) = f (A’) = { 1 } nên

  f (A  A’) =   [ f (A)  f (A’) ] = { 1 } và f (A  A’)  [ f (A)  f (A’) ].
                                                                                        21
    Mặt khác A \ A’ = {1} nên f (A \ A’) = { 1 }  [ f (A) \ f (A’) ] =  và

    f (A \ A’)  [ f (A) \ f (A’) ].

## VI. PHÂN LOẠI ÁNH XẠ

### 6.1 ĐƠN ÁNH: Cho ánh xạ f : X  Y.

       a) f là đơn ánh nếu “ x, x’  X, x  x’  f (x)  f (x’) ”.




       b) Suy ra : f là đơn ánh  “ x, x’  X, f (x) = f (x’)  x = x’ ”

            “ y  Y, phương trình f (x) = y có không quá một nghiệm trên X ”.

  Ví dụ:

  a) u : X = { 1, 2, 3 }  Y = { a, b, c, d, e } với u(1) = a, u(2) = b và u(3) = c.




    Ta có u là một đơn ánh vì

    Cách 1: 1  2  3  1 có u(1) = a  u(2) = b  u(3) = c  u(1) = a.

    Cách 2 : Các phương trình u(x) = a, u(x) = b và u(x) = c đều có nghiệm duy

               nhất lần lượt là x = 1, x = 2 và x = 3 trên X. Các phương trình

               u(x) = d và u(x) = e đều vô nghiệm trên X. Như vậy mỗi phương

               trình trên có không quá một nghiệm trên X.
                                                                                       22
                                         5  2x        3
b) f : X = R \{1}  Y = R thỏa f (x) =          =2+      , x  X.
                                          x 1       x 1
  Ta có f là một đơn ánh vì
                                                              3     3
  Cách 1: x, x’  X, x  x’  0  x  1  x’  1  0                  
                                                            x  1 x ' 1
              3         3
   2+          2+         f (x)  f (x’).
            x 1      x ' 1
                                                 3         3        3     3
  Cách 2: x, x’  X, f (x) = f (x’)   2 +        =2+              =       
                                               x 1      x ' 1   x  1 x ' 1
   x  1 = x’  1  x = x’.

                                                                  3
  Cách 3: y  Y, xét phương trình f (x) = y có ẩn x  X thì         = y + 2 (*).
                                                                x 1
  Nếu y =  2 thì phương trình (*) vô nghiệm trên X.
                                                                    3
  Nếu y   2 thì phương trình (*) có nghiệm duy nhất x = 1 +           X.
                                                                   y2
  Như vậy, y  Y, phương trình f (x) = y có không quá một nghiệm trên X.

c) Cho g : X = R  Y = R thỏa g(x) = 2ex  3e x, x  X.

  Ta có g’(x) = 2ex + 3e x > 0, x  X nên g tăng ngặt trên khoảng X

  [ x, x’  X, x < x’  g(x) < g(x’) ] , nghĩa là g là một đơn ánh.

d) Cho h : X = ( 6, 25)  Y = R thỏa h(x) = 4cos2x  5x, x  X.

  Ta có h’(x) =  4sin2x  5   1 < 0, x  X nên h giảm ngặt trên khoảng X

  [ x, x’  X, x < x’  h(x) > h(x’) ] , nghĩa là h là một đơn ánh.


### 6.2 HỆ QUẢ: Cho ánh xạ f : X  Y.

    a) f không là đơn ánh  “  x, x’  X, x  x’ và f (x) = f (x’) ”.

    b) f không là đơn ánh  “  y  Y, phương trình f (x) = y có hơn một

      nghiệm trên X ”.




                                                                                23
Ví dụ:

a) Cho u : X = { a, b, c, d }  Y = { 1, 2, 3, 4 } vói u(a) = 1, u(b) = u(d) = 2 và

   u(c) = 3. Ta có u không phải là một đơn ánh vì




   Cách 1 :  b, d  X, b  d và u(b) = u(d) = 2.

   Cách 2 :  2  Y, phương trình u(x) = 2 có hai nghiệm x = b, x = d trên X.

b) Cho f : X = R  Y = R thỏa f (x) = 2x2  6x + 1, x  X.

   Ta có f không phải là một đơn ánh vì

   Cách 1:  0, 3  X, 0  3 và f (0) = f (3) = 1.

   Cách 2:  1 Y, phương trình f (x) = 1 có các nghiệm là x = 0 và x = 3 trên X.

### 6.3 TOÀN ÁNH: Cho ánh xạ f : X  Y.

    a) f là toàn ánh nếu f (X) = Y.




    b) Suy ra :

         f là toàn ánh  “ y  Y, phương trình f (x) = y có nghiệm trên X ”.
Ví dụ:

a) Cho u : X = { 1, 2, 3, 4 }  Y = { a, b, c } vói u(1) = a, u(3) = u(4) = c và

  u(2) = b. Ta có u là một toàn ánh vì
                                                                                   24
  Cách 1 : u(X) = { a, b, c } = Y.

  Cách 2 : Các phương trình u(x) = a, u(x) = b và u(x) = c đều có nghiệm lần

           lượt là x = 1, x = 2 và x = 3 trên X.




b) f : X = R  Y = [ 5, + ) thỏa f (x) = x2  4x + 9 = (x – 2)2 + 5 , x  X.

  f ’(x) = 2(x – 2), x  X. Ta có f là một toàn ánh vì

  Cách 1: dùng bảng biến thiên của hàm số y = f (x), ta thấy f (X) = [ 5, + ) = Y.




  Cách 2: y  Y, phương trình f (x) = y  (x  2)2 = y  5 có (ít nhất một)

           nghiệm trên X là x = 2 +     y 5.

### 6.4 HỆ QUẢ: Cho ánh xạ f : X  Y.

    a) f không là toàn ánh  f (X)  Y.

    b) f không là toàn ánh   y  Y, phương trình f (x) = y vô nghiệm trên X.




                                                                                 25
Ví dụ:

a) Cho u : X = { a, b, c }  Y = { 1, 2, 3, 4 } vói u(a) = 1, u(b) = 2 và u(c) = 3.

  Ta có u không phải là một toàn ánh vì

  Cách 1 : u(X) = { 1, 2, 3 }  Y = { 1, 2, 3, 4 }.

  Cách 2 :  4  Y, phương trình u(x) = 4 vô nghiệm trên X.




b) Cho f : X = R  Y = ( 1, + ) thỏa f (x) = 3.2x + 1, x  X.

  Ta có f không phải là một toàn ánh vì

  Cách 1: x  X, f (x) = 3.2x + 1 > 1 nên f (X)  (1, + ) và do đó f (X)  Y.

  Cách 2:  0  Y, phương trình f (x) = 0  3.2x =  1 vô nghiệm trên X.

                                                 3x  4      10
c) Cho g : X = R \ {2}  Y = R thỏa g(x) =              =3+     , x  X.
                                                  x2       x2

               10
  g’(x) =              , x  X. Ta có g không là một toàn ánh vì
            ( x  2) 2

  Cách 1: dùng bảng biến thiên của hàm số y = g(x), ta thấy g(X) = R \ {3}  Y.




                                                   10
  Cách 2:  3  Y, phương trình g(x) = 3             = 0 vô nghiệm trên X.
                                                  x2
                                                                                      26
### 6.5 SONG ÁNH: Cho ánh xạ f : X  Y.

     a) f là song ánh nếu f là đơn ánh và toàn ánh.

     b) Suy ra : f là song ánh  “ y  Y, phương trình f (x) = y có nghiệm

         duy nhất trên X ” (chỉ dùng khi giải được phương trình f (x) = y trên X).

     c) Suy ra : f không là song ánh  f không đơn ánh hay f không toàn ánh.




Ví dụ:

a) Cho u : X = { 1, 2, 3 }  Y = { a, b, c } với u(1) = a, u(2) = b và u(3) = c.




  Ta có u là một song ánh vì

  Cách 1 : u đơn ánh [ 1  2  3  1 cho u(1) = a  u(2) = b  u(3) = c  u(1) ]

            và u toàn ánh [ u(X) = { a, b, c } = Y ].

  Cách 2 : Các phương trình u(x) = a, u(x) = b và u(x) = c đều có nghiệm duy

             nhất ( lần lượt là x = 1, x = 2 và x = 3 ) trên X.

b) Cho f : X = R  Y = R thỏa f (x) = 2sinx  3x, x  X.

  f là đơn ánh vì f ’(x) = 2cosx  3   1 < 0, x  X và f giảm ngặt trên X.


                                                                                   27
  f là toàn ánh do từ bảng biến thiên của hàm số y = f (x), ta có f (R) = R.

  Vậy f là một song ánh (không giải được phương trình f (x) = 2sinx  3x = y).

c) Cho g : X = R  Y = R thỏa g(x) = 3ex  e x + 2, x  X.

  y  Y, phương trình g(x) = y ( ẩn x  X )  3e2x + (2  y)ex  1 = 0 

   3t2 + (2  y) t  1 = 0 với t = ex > 0 và  = (y  2)2 + 12  12 > 0.
          y  2  ( y  2)2  12                    y  2  ( y  2) 2  12
   t=                           > 0  x = lnt = ln                          X.
                    6                                         6
  Phương trình g(x) = y có nghiệm duy nhất trên X nên g là một song ánh.

d) Cho h : X = { a, b, c, d }  Y = { 1, 2, 3, 4 } thỏa h(a) = h(c) = 1, h(b) = 2

  và h(d) = 3.




 Ta có h không phải là một song ánh vì

  Cách 1: h không phải là một đơn ánh ( do a, c  X, a  c và h(a) = h(c) = 1).

  Cách 2 : h không phải là một toàn ánh ( do h(X) = {1, 2, 3}  Y = {1, 2, 3, 4} ).

### 6.6 ÁNH XẠ NGƯỢC CỦA SONG ÁNH: Cho song ánh f : X  Y.

    Ta đã biết y  Y, phương trình f (x) = y có nghiệm duy nhất là xy trên X.

    Lập ánh xạ g : Y  X có g(y) = xy ,y  Y. Ta nói g là ánh xạ ngược của

    f và ký hiệu g = f  1. Khi đó x  X, y  Y, y = f (x)  x = f  1(y).
                                                                                    28
Ví dụ:

a) u : X = { a, b, c, d }  Y = { 1, 2, 3, 4 } với u(a) = 1, u(b) = 2, u(c) = 3 và

  u(d) = 4.




  Ta có u là một song ánh vì các phương trình u(x) = 1, u(x) = 2, u(x) = 3 và

  u(x) = 4 đều có nghiệm duy nhất ( lần lượt là x = a, x = b, x = c, x = d ) trên X.

  Ta có ánh xạ ngược v = u 1 : Y  X với v(1) = a, v(2) = b, v(3) = c, v(4) = d.

b) Cho f : X = ( 3, 6 ]  Y = [  27,  6 ) thỏa f (x) =  x2 + 2x  3, x  X.

  y  Y, phương trình f (x) = y (ẩn x  X)  x2  2x + y + 3 = 0 với

  ’ = 1  (y + 3) =  (y + 2)  ( 4, 25 ],  '  ( 2, 5 ] và   '  [  5,  2 ).

  Ta có x1 = 1 +  '  ( 3, 6 ] = X (nhận x1) và x2 = 1   '  [  4,  1 ),

  nghĩa là x2  X (loại x2). Vậy phương trình f (x) = y có nghiệm duy nhất trên

  X là xy = x1 = 1 +  y  2 . Do đó f là một song ánh và có ánh xạ ngược

  f  1 : Y  X thỏa f  1(y) = xy = 1 +  y  2 , y  Y. Đổi tên biến y thành

   biến x, ta có thể viết lại f  1 : Y  X với f  1(x) = 1 +  x  2 , x  Y.



                                                                                      29
### 6.7 TÍNH CHẤT: Cho các ánh xạ f : X  Y và g : Y  Z . Khi đó

   a) Nếu f là một song ánh thì f  1 cũng là một song ánh và (f  1)  1 = f.

   b) Nếu f là một song ánh thì f  1 o f = IdX và f o f  1 = IdY.




   c) Nếu f là một song ánh và X = Y thì f  1 o f = f o f  1 = IdX .




   d) Nếu f và g là các song ánh thì h = g o f cũng là một song ánh và

      h  1 = f  1 o g 1.




                                                                                 30
Ví dụ:

a) Xét lại f : X = ( 3, 6 ]  Y = [  27,  6 ) với f (x) =  x2 + 2x  3, x  X.

  Từ Ví dụ của (6.6), ta thấy f là một song ánh có f  1 : Y  X thỏa

  f  1(x) = 1 +  x  2 , x  Y. Đặt g = f  1 thì ta có thể kiểm chứng được g

  cũng là một song ánh thỏa g 1 = f , g o f = IdX và f o g = IdY.

b) Cho h : X = R  X thỏa h(x) = 3x + 4, x  X. Ta kiểm chứng được h là

                               x4
  một song ánh và h 1(x) =        , x  X. Do đó h 1 o h = h o h 1 = IdX .
                                3

c) Cho  : X = R  Y = (1, + ) thỏa (x) = ex + 1, x  X và

   : Y  Z = (0, + ) thỏa (x) = x2 + 4x  5, x  Y. Ta có

   =  o  : X  Z thỏa (x) = (ex + 1)2 + 4(ex + 1)  5 = e2x + 6ex, x  X.

  Ta kiểm chứng được  và  đều là các song ánh với

   1(x) = ln(x  1), x  X và  1(x) = x  9  2, x  Y.

  Do đó  =  o  cũng là một song ánh và  1 = ( o ) 1 =  1o  1 : Z  X

  thỏa  1(x) = ( 1o  1) (x) =  1[  1(x) ] = ln( x  9  3), x  Z.

### 6.8 MỆNH ĐỀ: (nhận diện hai ánh xạ là song ánh và là ánh xạ ngược của nhau)

    Cho f : X  Y và g : Y  X. Các phát biểu sau đây là tương đương :

    a) f là một song ánh và f  1 = g.              b) g là một song ánh và g 1 = f.

    c) g o f = IdX và f o g = IdY.




                                                                                     31
Ví dụ: Cho f : X = R \ {1}  Y = R \ { 2} và g : Y  X thỏa

                3  2x                    x3
      f (x) =          , x  X và g(x) =     , x  Y.
                 x 1                     x2
      Ta kiểm chứng được g o f = IdX và f o g = IdY.

      Như vậy f và g đều là các song ánh thỏa f  1 = g và g 1 = f.

### 6.9 PHÉP LŨY THỪA ÁNH XẠ: Cho ánh xạ f : X  X.

   a) Đặt f o = IdX , f 1 = f, f 2 = f o f , … và f k = f o f k  1 = f k  1o f , k  1.

      Ta có các ánh xạ f k : X  X, k  0.




   b) Nếu f là một song ánh thì ta đặt thêm : f  1 là ánh xạ ngược của f ,

      f  2 = (f  1) 2 , … và f  k = (f  1) k, k  2. Ta có f  k : X  X, k  1.

      Như vậy nếu f là một song ánh thì m  Z, ta có các ánh xạ f m : X  X

      đều là các song ánh.




                                                                                             32
Ví dụ:

                                                x
a) Cho f : X = R  X thỏa f (x) =               2
                                                      , x  X.
                                               x 1

                                 x
  k  N, ta có f k(x) =                  , x  X ( chứng minh qui nạp theo k  0 ).
                               kx 2  1

b) Cho g : X = R  X thỏa g(x) = 2x + 3, x  X.

  k  N, ta có gk (x) = 2k x + 3(2k  1), x  X (chứng minh qui nạp theo k  0).

                                                                  x3
  Ta kiểm chứng được g là một song ánh và g 1(x) =                   , x  X.
                                                                   2

  Từ đó ta có k  N, g k(x) = 2 k x + 3(2 k  1), x  X (chứng minh qui nạp

  theo k  0). Như vậy m  Z, gm (x) = 2m x + 3(2m  1), x  X.

### 6.10 ÁP DỤNG ÁNH XẠ NGƯỢC ĐỂ GIẢI PHƯƠNG TRÌNH ÁNH XẠ

     a) Cho ánh xạ h và song ánh f. Giả sử có ánh xạ  thỏa f o  = h.

         Ta có f o  = h  f  1o (f o ) = f  1o h  (f  1o f ) o  = f  1o h 

                            ( IdX ) o  = f  1o h   = f  1o h (nghiệm duy nhất).

     b) Cho ánh xạ h và song ánh g. Giả sử có ánh xạ  thỏa  o g = h.

         Ta có  o g = h  ( o g) o g 1 = h o g 1   o (g o g 1 ) = h o g 1

                           o (IdY) = h o g 1   = h o g 1 (nghiệm duy nhất).

      c) Cho ánh xạ h và các song ánh f và g. Giả sử có ánh xạ  thỏa

         f o  o g = h. Ta có f o  o g = h  f  1o (f o  o g) o g 1 = f  1o h o g 1 

         (f  1 o f) o  o (g o g 1 ) = f  1 o h o g 1  (IdX) o  o (IdY) = f  1 o h o g 1 

           = f  1 o h o g 1 (nghiệm duy nhất).

Ví dụ:

                                                         1      x8
a) Cho f : Y = ( 8, + )  Z = R thỏa f (x) =             ( ln      1), x  Y.
                                                         4       5
  Ta có f là một song ánh và f  1: Z  Y thỏa f  1(x) = 5e4x + 1  8, x  Z.
                                                                                                33
                                     1      4 x2  4 x  3
  Xét h : X = R  Z thỏa h(x) =        ( ln                 1), x  X.
                                     4            5
  Tìm  : X  Y thỏa f o  = h. Ta có  = f  1 o h và

  x  X, (x) = (f  1 o h)(x) = f  1 [ h(x)] = 4x2  4x  5.

b) Cho g : X = [  1, 4 ]  Y = [  4, 31 ] thỏa g(x) = x2 + 4x  1, x  X.

  Ta có g là một song ánh và g 1: Y  X thỏa g 1(x) = x  5  2, x  Y.

  Xét p : X  Z = R thỏa p(x) = 4 ln( x 2  4 x  7)  3, x  X.

  Tìm  : Y  Z thỏa  o g = p. Ta có  = p o g 1 và

  x  Y, (x) = (p o g 1 )(x) = p [ g 1 (x)] = 4 ln( x  8)  3.

                                                     x
c) Cho u : X = R  Y = ( 1, 1) thỏa u(x) =          2
                                                           , x  X.
                                                    x 1
                                                                    x
  Ta có u là một song ánh và u  1: Y  X thỏa u 1(x) =                   , x  Y.
                                                                  1  x2

                                                           2x  5
  Cho v : Z = R \ { 4}  T = R \ {2} thỏa v(x) =                 , x  Z.
                                                           x4

                                                                 4x  5
  Ta có v là một song ánh và v  1 : T  Z thỏa v 1(x) =               , x  T.
                                                                 2 x
                                    28 x 2  5
   Xét q : X  T thỏa q(x) =                  , x  X.
                                    12 x 2  4
   Tìm  : Y  Z thỏa v o  o u = q. Ta có  = v 1 o q o u 1 và

                                                                         4 x2
   x  Y, (x) = (v 1 o q o u 1 )(x) = v 1 { q [ u 1(x) ] } =  2        .
                                                                        x 3

### 6.11 MỆNH ĐỀ: Cho X, Y là các tập hợp hữu hạn và f : X  Y.

     a) Nếu f là một đơn ánh thì | X |  | Y |.

      b) Suy ra nếu | X | > | Y | thì f không phải là đơn ánh.

      c) Nếu f là một toàn ánh thì | X |  | Y |.

      d) Suy ra nếu | X | < | Y | thì f không phải là toàn ánh.

      e) Nếu f là một song ánh thì | X | = | Y |.

      f) Suy ra nếu | X |  | Y | thì f không phải là song ánh.
                                                                                       34
     Ví dụ:

     a) Xét đơn ánh u trong Ví dụ của (6.1). Ta có | X | = 3  | Y | = 5.

     b) Xét u trong Ví dụ của (6.2). Ta có | X | = 4 > | Y | = 3 nên u không đơn ánh.

     c) Xét toàn ánh u trong Ví dụ của (6.3). Ta có | X | = 4  | Y | = 3.

     d) Xét u trong Ví dụ của (6.4). Ta có | X | = 3 < | Y | = 4 nên u không toàn ánh.

     e) Xét song ánh u trong Ví dụ của (6.6). Ta có | X | = 4 = | Y |.

     f) Xét u trong Ví dụ của (6.1). Ta có | X | = 3  | Y | = 5 nên u không song ánh.

----------------------------------------------------------------------------------------------------------




                                                                                                       35

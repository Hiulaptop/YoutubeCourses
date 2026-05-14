# Chương VI: Quan hệ trên các tập hợp

## I. QUAN HỆ HAI NGÔI

### 1.1 VÍ DỤ MỞ ĐẦU: Cho S = { 0, 1, 2, … , 9, 10 }.

    x, y  S, đặt xy ( ta nói x có quan hệ  với y )  2x + y = 18,

      nghĩa là x không có quan hệ  với y  2x + y ≠ 18.

      Ta có 90, 82, 74, 66, 58 và 410. Ngoài ra 2 không có quan hệ  với 3,

      5 không có quan hệ  với 6, ...

    [ vì 2(9) + 0 = 2(8) + 2 = 2(7) + 4 = 2(6) + 6 = 2(5) + 8 = 2(4) + 10 = 18  2(2) + 3... ]

    Đặt  = { (x, y)  S2 | xy } = { (9, 0), (8, 2), (7, 4), (6, 6), (5, 8), (4, 10) }  S2.

     Như vậy từ quan hệ hai ngôi  trên S, ta có tương ứng tập hợp con  của S2.

    x, y  S, ta viết [ xy  (x, y)   ] và [ x không có quan hệ  với y  (x, y)   ].

    Chẳng hạn như [ 74  (7, 4)   ] và [ 1 không có quan hệ  với 9  (1, 9)   ].

### 1.2 ĐỊNH NGHĨA: Một quan hệ hai ngôi  trên tập hợp S ≠  thực chất là một tập

    hợp con  của tập hợp S2 = S  S. Tập hợp con này chứa tất cả các cặp (x, y) của

    S2 có quan hệ . Nói khác đi, mỗi tập hợp con của S2 xác định một quan hệ hai

    ngôi trên S. Ta có  = { (x, y)  S2 | xy }  S2.

    x, y  S, ta viết [ xy  (x, y)   ] và [ x không có quan hệ  với y  (x, y)   ].

    Nếu | S | = n thì | S2 | = n2 nên ta có 2n quan hệ hai ngôi khác nhau trên S.
                                                2




                                                                                                1
### 1.3 XÁC ĐỊNH QUAN HỆ HAI NGÔI

   Cho tập hợp S ≠ . Có 3 cách xác định một quan hệ hai ngôi  trên S như sau:

   a) Cách 1: giới thiệu  như một tập hợp con của S2 ( nếu  có ít phần tử ).

   Ví dụ: S = Z với các quan hệ hai ngôi  và  trên S như sau:

    = { (4,  1), (0, 0), ( 9, 2), (3, 3), ( 5,  6), (7, 4), ( 8,  8), (1, 0) }  S2.

    = { (2k, 5k + 1) | k  Z } = { (0, 1), (2, 6), ( 2,  4) , … }  S2 .

   b) Cách 2: giới thiệu nội dung của quan hệ hai ngôi  ( nếu  có nhiều phần tử ).

   Ví dụ: S = R và x, y  S, đặt xy  4x3 > 5y2 + 1 ( nội dung của quan hệ  ).

   Ta kiểm tra được 3( 4), 4  9, … vì 4. 33 > 5.( 4)2 + 1 và 4. 43 > 5.92 + 1, …

   c) Cách 3: dùng ma trận số nhị phân biểu diễn quan hệ hai ngôi  khi S hữu hạn.

      Xét S = { a1, a2, … , an }. Một quan hệ hai ngôi  trên S có thể biểu diễn bằng

      một bảng ma trận vuông (n  n) gồm các số nhị phân như sau:

      M = M =  mij 1i , j  n trong đó mij = 1 ( nếu aiaj ) và mij = 0 ( nếu ai  aj )
                             M     a1        …       aj       …       an
                             a1    m11       …       m1j      …       m1n
                                                                  
                             ai    mi1       …       mij      …       min
                                                                 
                             an    mn1       …       mnj      …       mnn

   Ví dụ: S = { a, b, c, d } và quan hệ hai ngôi  trên S có ma trận biểu diễn là
                                 M = M =  mij 1i , j  4
                                         M   a   b        c   d
                                         a   1   0        1   0
                                         b   0   0        1   1
                                         c   1   0        1   1
                                         d   1   1        0   0

   Suy ra  = { (a, a), (a, c), (b, c), (b, d), (c, a), (c, c), (c, d), (d, a), (d, b) }  S2.

                                                                                                 2
## II. CÁC TÍNH CHẤT CỦA QUAN HỆ HAI NGÔI

  Cho quan hệ hai ngôi  trên tập hợp S ≠ .

### 2.1 TÍNH PHẢN XẠ

      a)  phản xạ nếu “ x  S, xx ” ( mọi phần tử của S quan hệ  với chính nó ).

      b)  không phản xạ nếu “  xo  S, xo  xo ”.

        ( có ít nhất một phần tử xo của S không quan hệ  với chính nó ).




      Ví dụ:

      a) S = { 1, 2, 3 }  T = { 1, 2, 3, 4 }.

        Xét quan hệ hai ngôi  trên S ( và cũng là quan hệ hai ngôi trên T ):

         = { (3, 3), (2, 1), (1, 1), (1, 3), (2, 2) }  S2  T2.

         ( trên S ) phản xạ ( x  S, xx ) nhưng

         ( trên T ) không phản xạ (  4  T, 4  4 ) .

      b) S = R. x, y  S, đặt [ x  y  x  y + 2 ] và [ x  y  2x3  3y2 ].

         phản xạ ( x  S, x  x + 2 nên x  x ).

         không phản xạ (  0  S, 2.03 = 3.02 nên 0  0 ).

### 2.2 TÍNH ĐỐI XỨNG

      a)  đối xứng nếu “ x, y  S, xy  yx ”. ( mọi cặp phần tử của S có quan

        hệ  theo hai chiều hoặc không có quan hệ  theo bất cứ chiều nào cả ).

      b)  không đối xứng nếu “  xo, yo  S, xoyo và yo  xo ” .

        ( có ít nhất một cặp phần tử xo , yo của S chỉ có quan hệ  theo một chiều ).

                                                                                        3
   Ví dụ:

   a) S = { 0, 1, 2 }. Xét các quan hệ hai ngôi  và  trên S như sau:

      = { (0, 0), (2, 1), (1, 1), (1, 2) }   =   { (0, 1) }  S2.

      đối xứng [ các cặp (0,0), (1,1), (1,2) có quan hệ hai chiều. Các cặp khác vắng

     mặt thì không có quan hệ gì cả ].  không đối xứng (  0, 1  S, 01 và 1  0 ).



   b) S = Q. x, y  S, đặt [ x  y  x2 + sinx = y2 + siny ] và

     [ x  y  3x2 + 2y = 3x  2y2 ].

      đối xứng (x, y  S, x  y  x2 + sinx = y2 + siny  y2 + siny = x2 + sinx

      y  x ).  không đối xứng (  1, 0  S, 10 và 0  1 ).

### 2.3 TÍNH PHẢN ( ĐỐI ) XỨNG

   a)  phản xứng nếu “ x, y  S, ( xy và yx )  x = y ”

     [ cặp phần tử nào của S có quan hệ  theo hai chiều thì phải trùng nhau ].

   a’)  phản xứng nếu “ x, y  S, x  y  ( x  y hay y  x ) ”

      [ mọi cặp phần tử khác nhau của S không có quan hệ  đầy đủ hai chiều ].




   b)  không phản xứng nếu “  xo, yo  S, (xoyo và yoxo) và xo  yo ”

      ( có ít nhất hai phần tử khác nhau xo , yo của S có quan hệ  theo hai chiều ).




                                                                                        4
   Ví dụ:

   a) S = N. Xét các quan hệ hai ngôi  và  trên S như sau:

      = { (0, 0), (2, 3), (4, 1), (8, 8), (5, 5) }   =   { (3, 2) }  S2.
                                                ( x  0, y  0)
      phản xứng [ x, y  S, ( xy và yx )   ( x  8, y  8)  ( x = y ) ].
                                                 ( x  5, y  5)
      không phản xứng [  2, 3  S, ( 23 và 32 ) và 2  3 ].

   b) S = R. x, y  S, đặt [ x  y  x = y2 ], [ x  y  x < y ] và

     [ x  y  2x2  4y3  5 ].

      phản xứng [ x, y  S, ( x  y và y  x )  ( x = y2 và y = x2 ) 

                                              ( x  0, x  1)   ( x  0, y  0)
                 ( x = x4 và y = x2 )                 2
                                                                                  x = y ].
                                               yx               ( x  1, y  1)

                                                                      [ dùng phát biểu a) ].

      phản xứng [ x, y  S, ( x  y và y  x )  ( x < y và y < x )  ( x < y < x )

      ( x < x )  ( x = y ) ] [ dấu  cuối cùng đúng vì ( x < x ) có chân trị sai ]

                                                                      [ dùng phát biểu a) ].

      phản xứng [ x, y  S, x  y  ( x > y hay y > x )  ( x  y hay y  x ) ]

                                                                     [ dùng phát biểu a’) ].

      không phản xứng [  1, 0  S, (10 và 01) và 0  1 ] [ dùng phát biểu b) ].

### 2.4 TÍNH TRUYỀN ( BẮC CẦU )

   a)  truyền nếu “ x, y, z  S, ( xy và yz )  xz ”.

   b)  không truyền nếu “  xo, yo, zo  S, ( xoyo và yozo ) và xo  zo ” .




                                                                                                5
     Ví dụ:

     a) S = Z. Xét các quan hệ hai ngôi  và  trên S như sau:

        = { (0, 0), ( 5, 4), ( 8, 9), (1, 4), (0, 6), (1, 5) }   =  {( 9, 7)}  S2.

                                                 ( x  0, y  0, z  0)        00
                                                                               
        truyền [ x, y, z  S, (xy và yz)  ( x  0, y  0, z  6)      0(6) 
                                                 ( x  1, y  5, z  4)      14
                                                                               
       x  z ].  không truyền [  ( 8), ( 9), 7  S, ( 8)( 9), ( 9)7 và ( 8)  7 ].

     b) S = Q. x, y  S, đặt [ x  y  x + 1 < y ] và [ x  y  x < y + 1 ].

        truyền [ x, y, z  S, ( x  y và y  z )  ( x + 1 < y và y + 1 < z ) 

                    (x + 1) < y < y + 1 < z  (x + 1) < z  x  z ].

                                1            1 1
        không truyền [  1,      , 0  S, 1 , 0 và 1  0 ].
                                2            2 2

## III. QUAN HỆ THỨ TỰ

### 3.1 ĐỊNH NGHĨA: Cho quan hệ hai ngôi  trên tập hợp S ≠ .

      a)  là một quan hệ thứ tự trên S nếu  phản xạ, phản xứng và truyền trên S.

      b) Ta dùng ký hiệu  để thể hiện một quan hệ thứ tự tổng quát trên S.

         Ký hiệu (S,  ) được hiểu là trên tập hợp S có quan hệ thứ tự  .

         x, y  S, nếu x  y thì ta nói một cách hình thức rằng

         “ x nhỏ hơn y ” hay “ x kém hơn y ” hay “ x đứng trước y ” hay

         “ y lớn hơn x ” hay “ y trội hơn x ” hay “ y đứng sau x ”.

      c) Nếu  là một quan hệ thứ tự trên S và   T  S thì  cũng là một quan

         hệ thứ tự trên T. Một quan hệ thứ tự có thể đối xứng hoặc không đối xứng.

      Ví dụ:

      a)  và  là các quan hệ thứ tự trên R. Thật vậy,  phản xạ ( x  R, x  x ),
                                                                                             6
      phản xứng [ x, y  R, ( x  y và y  x )  ( x = y ) ] và  truyền

     [ x, y, z  R, ( x  y và y  z )  ( x  z ) ]. Tương tự cho quan hệ  .

     Do đó  và  cũng là các quan hệ thứ tự trên N, Z và Q.

  b) | và  là các quan hệ thứ tự trên N. Thật vậy, | phản xạ (x  N, x = 1. x nên

    x | x), | phản xứng [ x, y  N, (x | y và y | x)  (a, b  N, y = ax và x = by)

                             x  0& y  0                x  0& y  0 
                                                                                   
     (x = abx và y = ax)            hoac                        hoac              (x = y) ]
                             x  1, ab  1, y  ax     x  1, a  b  1, y  x 


    và | truyền [ x, y, z  N, (x | y và y | z)  ( a, b  N, y = ax và z = by) 

     ( z = abx với ab  N )  ( x | z ) ]. Tương tự cho quan hệ  .

  c)  và  là các quan hệ thứ tự trên  =(E) . Thật vậy,  phản xạ ( A  ,

    A  A ),  phản xứng [ A, B  , ( A  B và B  A )  A = B ],  truyền

    [ A, B, C  , ( A  B và B  C )  ( A  C ) ]. Tương tự cho quan hệ .

   d) < và > không phải là các quan hệ thứ tự trên R vì các quan hệ < và >

     không phản xạ trên R (  1 R, 1  1 và 1  1 ).

     Để ý các quan hệ < và > vẫn phản xứng và truyền trên R.

   e) | và  không phải là các quan hệ thứ tự trên Z vì các quan hệ | và  không

     phản xứng trên Z [ 1, 1  Z, 1 | (1), (1) | 1, 1  (1), (1) 1 và 1  1 ].

     Để ý các quan hệ | và  vẫn phản xạ và truyền trên Z.

### 3.2 THỨ TỰ TOÀN PHẦN  THỨ TỰ BÁN PHẦN: Cho (S,  ).

   Có đúng một trong hai trường hợp sau đây xảy ra:

   a) Trường hợp 1: x, y  S, x  y hay y  x ( x và y so sánh được với nhau bởi

     quan hệ thứ tự  ). Ta nói  là một thứ tự toàn phần trên S.
                                                                                                  7
   b) Trường hợp 2:  xo, yo  S, xo  yo và yo  xo ( xo và yo không so sánh được

     với nhau bởi quan hệ thứ tự  ). Ta nói  là một thứ tự bán phần trên S.

   Ví dụ:

   a) (R,  ) và (R,  ) lần lượt là các tập hợp có quan hệ thứ tự toàn phần  và .

     [ x, y  R, ( x  y hay y  x ) và ( x  y hay y  x ) ].

   b) S = { a = 2n | n  N }  N. Do | và  là các quan hệ thứ tự trên N nên (S, | )

     và (S,  ) cũng là các tập hợp có quan hệ thứ tự | và  . Hơn nữa đây là các thứ

     tự toàn phần [ x = 2p, y = 2q  S, ( x | y  p  q ) và ( x  y  p  q ) ].

   c) ( N, | ) và ( N,  ) là các tập hợp có quan hệ thứ tự bán phần | và 

     (  2, 3  N, 2 | 3 và 3 | 2 cũng như 23 và 3 2 ).

   d)  và  là các quan hệ thứ tự bán phần trên  =(E) nếu | E |  2. Thật vậy,

     với E = { a, b, ... } và  = { , A = {a}, B = {b}, C = {a,b}, ... } thì A, B  ,

     A  B và B  A. Nếu E =  hoặc E = { a } thì  = {  } hoặc  = { , {a} }

     nên ta thấy ngay  và  là các quan hệ thứ tự toàn phần trên  =(E).

### 3.3 KHÁI NIỆM KỀ NHAU TRONG QUAN HỆ THỨ TỰ

   Cho (S,  ) và x, y  S với x  y.

   a) Nếu x  y và không có z  S \ { x, y } thỏa x  z  y thì ta nói

     “ x kề với y (với vị thế x kém y trội) ” hay “ y là một trội trực tiếp của x ”.

     Ta vẽ đoạn thẳng (cong) có mũi tên định hướng nối trực tiếp từ x đến y: x  y.

   b) Suy ra x và y không kề nhau nếu xảy ra một trong các trường hợp sau:

     * x  y và y  x (x và y không so sánh được với nhau bởi quan hệ thứ tự  ).

     *  z  S \ { x, y } thỏa ( x  z  y hay y  z  x ).

                                                                                       8
   Lúc này không có đoạn thẳng (hay đoạn cong) nào nối trực tiếp từ x đến y.




Ví dụ:

a) k  (Z,  ), ta có k và (k + 1) là kề nhau [ k  k + 1 và a  Z, không xảy ra

  k < a < k + 1] nhưng k và k + 2 không kề nhau [ (k + 1)  Z, k < k + 1 < k + 2].

b) Trong (R,  ) và (R,  ) , không có cặp phần tử nào kề nhau.

  [ x, y  R mà x < y (tức y > x), z = 2 1(x + y)  R, x < z < y (tức y > z > x) ].




c) Trong (N, | ) :

  12 và 36 kề nhau ( 12 | 36 và không có a  N thỏa 12 | a, a | 36 và

  12  a  36 ). 3 và 5 không kề nhau ( 3 | 5 và 5 | 3 ).

   4 và 40 không kề nhau (  8  N thỏa 4 | 8, 8 | 40 và 4  8  40 ).




d) Xét quan hệ thứ tự ước số ( hoặc quan hệ thứ tự bội số ) trên N và a, b  N.

  * Nếu a = qb với q là số nguyên tố thì a và b kề nhau.

  * Nếu a = qb với q là số không nguyên tố thì không có kết luận về a và b.

  Chẳng hạn S = { 3, 6, 18, 72, 360, 3600 } với quan hệ thứ tự ước số | .



  6 = 2  3, 18 = 3  6 và 360 = 5  72 với 2, 3, 5 là các số nguyên tố nên 3 kề

  với 6, 6 kề với 18 và 72 kề với 360.
                                                                                     9
    18 = 6  3 và 3600 = 10  360 với 6, 10 là các số không nguyên tố. Tuy nhiên

    3 không kề với 18 và 360 lại kề với 3600.

  e) Xét ((E),  ) với E = { a, b, c }. Khi đó:  và A = { a } kề nhau (   A )

    A = { a } và B = { a, b } kề nhau (A  B). A = { a } và C = { a, c } kề nhau

    ( A  C ). B = { a, b } và C = { a, c } không kề nhau ( vì B  C và C  B ).

    A = { a } và E không kề nhau ( vì A  B = { a, b }  E và A  B  E ).




### 3.4 BIỂU ĐỒ HASSE CỦA QUAN HỆ THỨ TỰ: Cho (S,  ) với S hữu hạn.

   a) Vẽ cạnh nối ( có mũi tên định hướng ) cho tất cả các cặp phần tử kề nhau trong

     (S,  ). Hình vẽ có được gọi là biểu đồ Hasse của (S,  ).

   b) Nếu  là một thứ tự toàn phần trên S thì biểu đồ Hasse của (S,  ) có thể vẽ

     một cách đơn giản trên một đoạn thẳng. Nếu  là một thứ tự bán phần trên S

     thì biểu đồ Hasse của (S,  ) phải rẽ thành nhiều nhánh.

   Ví dụ:

   a) S = { a = 2k | k = 0, 1, 2, … , 7 }. Ta có | và  đều là các quan hệ thứ tự toàn

     phần trên S [ x = 2p, y = 2q  S, ( x | y  p  q ) và ( x  y  p  q ) ] nên

     biểu đồ Hasse của chúng có thể vẽ trên một đoạn thẳng lần lượt như sau:




   b) T = { các ước số dương của 30 } = { 1, 2, 3, 5, 6, 10, 15, 30 }. Ta có | và 

     đều là các quan hệ thứ tự bán phần trên T ( 2 | 3 , 3 | 2 , 2 3 và 3 2 ) nên biểu đồ

     Hasse của chúng sẽ rẽ nhánh như sau:

                                                                                         10
              ( T, | )                                 ( T,  )
### 3.5 PHẦN TỬ CỰC TIỂU (NHỎ NHẤT) VÀ CỰC ĐẠI (LỚN NHẤT)

   Cho (S,  ).

   a) Ta nói a là phần tử nhỏ nhất ( phần tử cực tiểu ) của (S,  )

     [ ký hiệu a = min(S,  ) ] nếu a  S và a  x, x  S.

   b) Ta nói b là phần tử lớn nhất ( phần tử cực đại ) của (S,  )

     [ ký hiệu b = max(S,  ) ] nếu b  S và x  b, x  S.

   c) Phần tử min ( cực tiểu, nhỏ nhất ) và max ( cực đại, lớn nhất ) của (S,  ) hoặc

     không tồn tại hoặc tồn tại duy nhất.

### 3.6 NHẬN XÉT: Cho (S,  ).

   a) Trên biểu đồ Hasse của (S,  ), phần tử min ( nếu có ) là điểm xuất phát chung

     của mọi nhánh và phần tử max ( nếu có ) là điểm kết thúc chung của mọi nhánh.

   b) Nếu S hữu hạn ( | S | = n ) và  là thứ tự toàn phần thì (S,  ) luôn có min

     và max. Trong hình dưới đây, min(S,  ) = a1 và min(S,  ) = an .




   c) Nếu tồn tại a = min(S,  ) và b = max(S,  ) thì hiển nhiên a  b.
                                                                                     11
Ví dụ:

a) Cho (S,  ) có biểu đồ Hasse như sau:




                                 (S,  ).
  Ta có a = min(S,  ) và b = max(S,  ).

b) Xét các tập S và T trong Ví dụ (3.4). Ta có




  min(S, | ) = 2o, max(S, | ) = 27, min(S,  ) = 27 và max(S,  ) = 2o.




           ( T, | )                                   ( T,  )
  min(T, | ) = 1, max(T, | ) = 30, min(T,  ) = 30 và max(T,  ) = 1.

c) Cho S = [  3, 8 ]  R. Khi đó

  min(S,  ) =  3 và max(S,  ) = 8 ( vì  3, 8  S và x  S,  3  x  8 ).

  min(S, ) = 8 và max(S, ) =  3 ( vì 8,  3  S và x  S, 8  x   3 ).

                                                                                 12
   d) min(N, | ) = 1 và max(N, | ) = 0 ( vì 1, 0  N và x  N, 1 | x và x | 0 ).

      min(N,  ) = 0 và max(N,  ) = 1 ( vì 0, 1  N và x  N, 0  x và x 1 ).

   e) min(  =(E),  ) =  và max(  =(E),  ) = E

      ( vì , E   và A  ,   A  E ).

      min(  =(E),  ) = E và max(  =(E),  ) = 

      ( vì E,    và A  , E  A   ).

   f ) (R,  ) và (R,  ) không có min và max vì x  R,  (x  1), (x + 1)  R,

      x  1 < x < x + 1 và x + 1 > x > x  1.




  g) Cho T = ( 4, 9)  R. Khi đó (T,  ) và (T,  ) không có min và max vì

                 x4 x9      x4     x9    x9     x4
     x  T,       ,     T,     <x<     và     >x>     .
                  2   2        2       2      2       2




### 3.7 PHẦN TỬ TỐI TIỂU VÀ TỐI ĐẠI: Cho (S,  ).

   a) Ta nói a là một phần tử tối tiểu của (S,  ) nếu a  S và không có

      a’  S \ {a} thỏa a’  a.

      Phần tử min của (S,  ) [ nếu có ] là một phần tử tối tiểu đặc biệt và duy nhất.

   b) Ta nói b là một phần tử tối đại của (S,  ) nếu b  S và không có

      b’  S \ {b} thỏa b  b’.

      Phần tử max của (S,  ) [ nếu có ] là một phần tử tối đại đặc biệt và duy nhất.

   c) Phần tử tối tiểu và tối đại của (S,  ) hoặc không tồn tại hoặc tồn tại mà không

      nhất thiết duy nhất.
                                                                                         13
### 3.8 NHẬN XÉT: Cho (S,  ).

   a) Trên biểu đồ Hasse của (S,  ), phần tử tối tiểu ( nếu có ) là điểm xuất phát của

     ít nhất một nhánh và phần tử tối đại ( nếu có ) là điểm kết thúc của ít nhất một

     nhánh. Các phần tử cô lập (nếu có) của (S,  ) [ phần tử cô lập là phần tử không

     so sánh được với mọi phần tử khác ] được xem như là các nhánh cụt có điểm

     xuất phát trùng với điểm kết thúc nên chúng vừa là phần tử tối tiểu vừa là phần

     tử tối đại của (S,  ).

   b) Nếu S hữu hạn và  là thứ tự tùy ý thì (S,  ) có các phần tử tối tiểu và phần

     tử tối đại.

   Ví dụ:

   a) Cho S = { 2, 3, 4, … , 12, 13, 14 } với các quan hệ | và  trên S.

     Biểu đồ Hasse của (S, | ) và (S,  ) lần lượt là




     (S, | ) có các phần tử tối tiểu là 2, 3, 5, 7, 11, 13 và các phần tử tối đại là 8, 9,

     10, 11, 12, 13, 14. (S,  ) có các phần tử tối tiểu là 8, 9, 10, 11, 12, 13, 14 và các

     phần tử tối đại là 2, 3, 5, 7, 11, 13.



                                                                                         14
   b) Cho (S,  ) có biểu đồ Hasse như sau:




                                        (S,  ).

 (S,  ) có các phần tử tối tiểu a, c, e, g, j, h, i và có các phần tử tối đại là b, d, f, h, i.

   c) (R,  ) và (R,  ) không có các phần tử tối tiểu và tối đại vì

     x  R, (x  1), (x + 1)  R, x  1 < x < x + 1 và x + 1 > x > x  1.




   d) Cho T = ( 4, 9)  R. Khi đó (T,  ) và (T,  ) không có tối tiểu và tối đại vì

                  x4 x9      x4     x9    x9     x4
     x  T,        ,     T,     <x<     và     >x>     .
                   2   2        2       2      2       2




   e) Đặt N* = N \ {0} và N** = N \ {0,1}. Ta có min(N*, | ) = 1 và (N*, | ) không

     có phần tử tối đại. Ta có max(N*,) = 1 và (N*,  ) không có phần tử tối tiểu.

     (N**, | ) có vô số phần tử tối tiểu là các số nguyên tố dương và không có phần tử

     tối đại. (N**, ) có vô số phần tử tối đại là các số nguyên tố dương và không có

     phần tử tối tiểu.

### 3.9 TOÀN PHẦN HÓA MỘT THỨ TỰ BÁN PHẦN (SẮP XẾP TOPO)

   Cho (S,  ) với S hữu hạn ( | S | = n ) và  là thứ tự bán phần trên S.
                                                                                             15
    Ta muốn xây dựng một thứ tự toàn phần  * trên S nới rộng thứ tự bán phần  .

    ( nghĩa là x, y  S, x  y  x  * y ).

    Quá trình xây dựng thứ tự toàn phần  * trên S gọi là một sự sắp xếp topo (S,  ).

    a) Thuật toán dựa trên các phần tử tối tiểu.

      Chọn phần tử tối tiểu tùy ý a1 của S và đặt S1 = S \ { a1 }.

      j  { 2, 3, … . n  1 }, chọn phần tử tối tiểu tùy ý aj của Sj  1 và đặt

      Sj = Sj 1 \ { aj }. Ta có | Sn  1 | = 1 và viết Sn  1 = { a }. Chọn an = a.

      Sắp thứ tự a1  * a2  * a3  *   * an 2  * an  1  * an .

      Biểu đồ Hasse của (S,  *) là




      Ta có  * là một thứ tự toàn phần trên S nới rộng thứ tự bán phần  .

    b) Thuật toán dựa trên các phần tử tối đại: hoàn toàn tương tự như thuật toán dựa

      trên các phần tử tối tiểu nhưng ta chọn các phần tử tối đại ( thay vì tối tiểu ) và

      sắp theo thứ tự ngược lại an  * an 1  * an 2  *   * a3  * a2  * a1.

      Biểu đồ Hasse của (S,  *) là




      Thứ tự toàn phần  * trên S không duy nhất do việc chọn tùy ý các phần tử tối

       tiểu ( hoặc tối đại ) trong thuật toán.

Ví dụ: S = {Văn (V), Sử (Su), Địa (Đ), Toán (T), Lý (L), Hóa (H), Sinh (Si), Anh (A)}

       Ký hiệu x  y được hiểu là môn x thi trước môn y. Ta muốn sắp một lịch thi

       cho 8 môn học trong S sao cho H  V, V  T, T  A, V  Si, Đ  Si và

       Si  Su ( môn Lý thì sắp tùy ý ). Hãy vẽ biểu đồ Hasse cho (S,  ) rồi sắp xếp
                                                                                            16
     topo cho nó để có thứ tự toàn phần (S,  *) phục vụ cho việc sắp lịch thi 8

     môn học. Biểu đồ Hasse của (S,  ) là

                                HVTA
                                           .L
                                Đ  Si  Su

     Cách 1: Với thứ tự  , lần lượt chọn các phần tử tối tiểu Đ, H, V, Si, L, Su, T,

     A của các tập hợp S, S1 = S \ { Đ }, S2 = S1 \ { H }, S3 = S2 \ { V },

     S4 = S3 \ { Si }, S5 = S4 \ { L }, S6 = S5 \ { Su }, S7 = S6 \ { T }. ta có thứ tự toàn

     phần  * trên S là Đ  * H  * V  * Si  * L  * Su  * T  * A.

     Biểu đồ Hasse của (S,  *) là




      Cách 2: Với thứ tự  , lần lượt chọn các phần tử tối đại L, A, Su, Si, T, V, Đ,

      H của các tập hợp S, S1 = S \ { L }, S2 = S1 \ { A }, S3 = S2 \ { Su },

      S4 = S3 \ { Si }, S5 = S4 \ { T }, S6 = S5 \ { V }, S7 = S6 \ { Đ }. Ta có thứ tự toàn

      phần  * trên S là H  * Đ  * V  * T  * Si  * Su  * A  * L.

      Biểu đồ Hasse của (S,  *) là




### 3.10 THỨ TỰ TỪ ĐIỂN

    Cho (S,  ) với S hữu hạn và  là thứ tự toàn phần trên S. Mỗi phần tử của

    S được gọi là một “ ký tự ”.

    Đặt  = Tập hợp tất cả các chuỗi ký tự được thành lập từ S, nghĩa là

     = {  = a1a2 … am | m nguyên  1 và a1 , a2 , … , am  S } và ta có S  .

    Ta muốn xây dựng một thứ tự toàn phần  * trên  nới rộng thứ tự  trên S.
                                                                                          17
 = a1a2 … am ,  = b1b2 … bn  , ta sắp   *  nếu  và  thỏa một

trong các trường hợp sau:

Trường hợp 1: m  n và ai = bi ( 1  i  m ), nghĩa là  là một đoạn đầu của .

Trường hợp 2 : a1  b1 và a1  b1 ( và  có sự khác biệt ở ngay ký tự đầu tiên).

Trường hợp 3 : p = min{ m, n }  2 và k  { 1, … , p  1 } sao cho

ai = bi (1  i  k), ak + 1  bk + 1 và ak + 1  bk + 1 (  và  giống nhau ở k ký tự

đầu tiên và có sự khác biệt ở ký tự thứ k + 1 ).

Trường hợp 2 có thể xem như tương tự với trường hợp 3 ứng với k = 0.

Thứ tự toàn phần  * gọi là thứ tự từ điển trên  nới rộng thứ tự  trên S.

Các từ trong một cuốn từ điển và các số nguyên dương được sắp theo thứ tự này.

Ví dụ:

a) S = {0, 1, 2, … , 7, 8, 9} với thứ tự toàn phần tự nhiên 0 < 1 < 2 <  < 8 < 9.

    = Tập hợp tất cả các dãy số được thành lập từ S. Ta có thứ tự toàn phần

    * được xây dựng trên  gọi là thứ tự từ điển.

   Chẳng hạn như 37952  * 37952041 ( trường hợp 1 ), 6589617  * 9109

   ( trường hợp 2 ), 543018  * 543092 ( trường hợp 3 ứng với k = 4 ).

b) T = {a, b, c, … , x, y, z} với thứ tự toàn phần tự nhiên a < b < c <  < y < z .

   = Tập hợp tất cả các từ ( có nghĩa trong tiếng Anh ) được thành lập từ S.

  Ta có thứ tự toàn phần  * được xây dựng trên  gọi là thứ tự từ điển.

  Chẳng hạn như home  * homework ( trường hợp 1 ), comedy  * nature

  ( trường hợp 2 ), architect  * artist ( trường hợp 3 ứng với k = 2 ).



                                                                                    18
## IV. QUAN HỆ TƯƠNG ĐƯƠNG

### 4.1 ĐỊNH NGHĨA: Cho quan hệ hai ngôi  trên tập hợp S ≠ .

     a)  là một quan hệ tương đương trên S nếu  phản xạ, đối xứng và truyền

        trên S. Một quan hệ tương đương có thể phản xứng hoặc không phản xứng.

     b) Ta dùng ký hiệu ~ để thể hiện một quan hệ tương đương tổng quát.

        Ký hiệu (S, ~) được hiểu là trên tập hợp S có quan hệ tương đương ~ .

        x, y  S, nếu x ~ y thì ta nói một cách hình thức rằng “ x tương đương với y ”

     c) Nếu  là một quan hệ tương đương trên S và   T  S thì  cũng là một

        quan hệ tương đương trên T.

     Ví dụ:

     a) S = Tập hợp mọi người trên trái đất.

                    x, y  S, đặt x ~ y  x cùng tuổi với ( ctv ) y.

        Ta có ~ là một quan hệ tương đương trên S. Thật vậy,

        ~ phản xạ ( x  S, x ctv x nên x ~ x ),

        ~ đối xứng ( x, y  S, x ~ y  x ctv y  y ctv x  y ~ x ),

       ~ truyền [ x, y, z  S, (x ~ y & y ~ z)  (x ctv y & y ctv z)  x ctv z  x ~ z ].

      b) S = R và hàm số tùy ý f : R  R. x, y  S, đặt x  y  f (x) = f (y).

        Ta có  là một quan hệ tương đương trên S vì

         phản xạ [ x  S, f (x) = f (x) nên x  x ],

         đối xứng [ x, y  S, x  y  f (x) = f (y)  f (y) = f (x)  y  x ] và

         truyền [ x, y, z  S, (x  y và y  z)  { f (x) = f (y) và f (y) = f (z) }

                    f (x) = f (z)  x  z ].

                                                                                         19
### 4.2 LỚP TƯƠNG ĐƯƠNG CỦA MỘT PHẦN TỬ: Cho (S, ~) và a  S.




                                    (S, ~).
  Đặt a = { x  S | x ~ a } = { a, … } ( vì a ~ a do tính phản xạ của quan hệ ~ ).

  Ta có   a  S và ta nói a là lớp tương đương của a ( xác định bởi quan hệ

  tương đương ~ ) trên S. Ta cũng có thể dùng ký hiệu [ a ] thay cho a .

   Ví dụ:

   a) S = { An18, Lý21, Tú18, Hà19, Vũ20, Hy19, Sĩ18, Sử19, Tá20, Vy18 } (có tuổi đi kèm).

                    x, y  S, đặt x ~ y  x cùng tuổi với y.

     Ta có ~ là một quan hệ tương đương trên S [ xem Ví dụ (4.1) ]. Lúc đó

     [ An ] = {x  S | x ~ An} = {An, Tú, Sĩ, Vy}, [ Lý ] = {x  S | x ~ Lý} = {Lý}

     [ Hy ] = { x  S | x ~ Hy }={Hy, Hà, Sử}, [ Tá ] = {x  S | x ~ Tá}={Tá, Vũ}.

   b) S = R. x, y  S, đặt xy  f (x) = f (y) trong đó f (t) = t3  3t, t  R.

     Ta có  là một quan hệ tương đương trên S [ xem Ví dụ (4.1) ].

     Ta tìm 0 , 2 , 5 và a với a  R.
                                         3
     0 = { x  R | x0 } = { x  R | x  3x = 0 } = { 0,      3 ,  3 }.

                                         3
      2 = { x  R | x2 } = { x  R | x  3x  2 = 0 } =

        = { x  R | (x +1)2(x  2) = 0 } = { 2,  1 }.
                                             3
     5 = { x  R | x( 5) } = { x  R | x  3x + 110 = 0 } =

                                                                                        20
        = { x  R | (x + 5)(x2  5x + 22) = 0 } = {  5 }.
                                          3
      a = { x  R | xa } = { x  R | x        3x = a3  3a } =

        = {x  R | (x  a)(x2 + ax + a2  3) = 0}. Như vậy a có từ 1 đến 3 phần tử.

      Đặt g(x) = x2 + ax + a2  3 có  = 3(4  a2) và g(a) = 3(a  1)(a + 1). Ta có

      | a | = 3  [  > 0 và g(a)  0 ]  ( 1  | a | < 2 )

                a  ( 2,  1)  (1, 1)  (1, 2).

                       a  3(4  a 2 ) a  3(4  a 2 )
      Lúc đó a = { a,                  ,                 }.
                              2               2
      | a | = 1  { < 0 hay [ = 0 và g(a) = 0]}  [a2 > 4 hay (a2 = 4 và a2 = 1)]

               a2 > 4  a  ( ,  2)  (2, +). Lúc đó a = { a }.

      | a | = 2  { [  > 0 và g(a) = 0 ] hay [  = 0 và g(a)  0 ] } 

                [ (a2 < 4 và a2 = 1) hay (a2 = 4 và a2  1) ]  a  { 2, 1, 1, 2}.

      Lúc đó 2 = 1 = {  2, 1 } và 2 = 1 = {  1, 2 }.

      (S, ) được phân hoạch thành vô hạn lớp tương đương rời nhau từng đôi một

      và mỗi lớp tương đương có từ 1 đến 3 phần tử.

### 4.3 SỰ PHÂN HOẠCH THÀNH CÁC LỚP TƯƠNG ĐƯƠNG: Cho (S, ~).

   Quan hệ tương đương ~ sẽ phân hoạch S thành các lớp tương đương rời nhau

   từng đôi một và mỗi lớp tương đương đều có dạng a (với a nào đó thuộc S).

   x  a , ta có x = a và ta nói x là một phần tử đại diện của lớp tương đương a .

   Hai phần tử ( của S ) có quan hệ ~ sẽ thuộc cùng một lớp tương đương.

   Hai phần tử ( của S ) không có quan hệ ~ sẽ thuộc hai lớp tương đương rời nhau.

   x, y  S, ta có

   x ~ y  x = y  x  y  y  x  x  y   (không rời = trùng nhau).
                                                                                   21
        x ~ y  x  y  x  y  y  x  x  y =  (rời nhau = không trùng)

        Ví dụ:  là một quan hệ tương đương trên T = { 1, 2, 3, 4, 5, 6 } và (T, ) có sơ

                đồ phân lớp như sau:




           T = { 2 }  { 3, 5 }  { 1, 4, 6 } (T được phân hoạch thành 3 lớp tương đương).

           Ta có 2 = { 2 }, 3 = 5 = { 3, 5 }, 1 = 4 = 6 = { 1, 4, 6 }, T = 1  2  3 và

 = {(2,2), (3,3), (5,5), (3,5), (5,3), (1,1), (4,4), (6,6), (1,4), (4,1), (1,6), (6,1), (4,6), (6,4)}.

           Ta có 14  1 = 4  1  4  4  1  1  4  .

           2  3  2  3  2  3  3  2  2  3 = .

        b) S = { Việt Nam (V), Hoa Kỳ (Us), Ý (I), Nhật (Nh), Áo (Ao), Úc (Uc), Peru (P),

       Nga (Ng), Congo (Co), Lào (L), Anh (An), Maroc (M), Hàn (H), Chile (Ch), Bỉ (B)}

                  x, y  S, đặt x ~ y  nước x cùng châu lục với nước y.

           ~ là một quan hệ tương đương trên S ( kiểm tra tương tự như quan hệ cùng tuổi

           với ). Ta có các lớp tương đương như sau:




                                   Sơ đồ phân lớp của (S, ~).

                                                                                                    22
          V = { x  S | x ~ V } = { V, Nh, L, H } = Nh = L = H .

          Us = { x  S | x ~ Us } = { Us, P, Ch } = P = Ch .

           I = { x  S | x ~ I } = { I, Ao, Ng, An, B } = Ao = Ng = An = B .


          Uc = { x  S | x ~ Uc } = { Uc } và Co = { x  S | x ~ Co } = { Co, M } = M .

          S = V  Us  I  Uc  Co = Nh  P  Ao  Uc  M = L  Ch  Ng  Uc  M .

          S được phân hoạch thành 5 lớp tương đương rời nhau từng đôi một. Ta có

          V ~ Nh  V = Nh  V  Nh  Nh  V                                V  Nh  .

          Ng ~ P  Ng  P  Ng  P  P  Ng  Ng  P = .

### 4.4 TẬP HỢP THƯƠNG XÁC ĐỊNH BỞI QUAN HỆ TƯƠNG ĐƯƠNG

       Cho (S, ~).

       Đặt S /~ là tập hợp tất cả các lớp tương đương ( xác định bởi quan hệ ~ trên S ),

       nghĩa là S / ~ = { x | x  S }. Như vậy x  S, ta có x  S và x  S / ~ .

       Ta nói S / ~ là tập hợp thương của S xác định bởi quan hệ tương đương ~ .

       Ví dụ: Xét lại các quan hệ tương đương (S, ~) và (T, ) trong Ví dụ (4.3). Ta có

      (S /~) = { x | x  S} = { V , Us , I , Uc , Co } = { Nh , P , Ao , Uc , M } = { L , Ch , Ng , Uc , M }

       (T / ) = { x | x  T } = { 1 , 2 , 3 } = { 4 , 2 , 5 } = { 6 , 2 , 3 }.

## V. QUAN HỆ ĐỒNG DƯ TRÊN Z

  Cho số nguyên n  1.

### 5.1 TẬP HỢP Zn

      Một số nguyên khi chia Euclide cho n sẽ có số dư có thể là 0, 1, 2, ..., (n  1).

      a, b  Z, đặt a ~ b  a và b có cùng số dư khi chia cho n

                                 n | (a  b)  (a  b)  n   k  Z, a = b + nk.
                                                                                                          23
Quan hệ ~ là một quan hệ tương đương trên Z (kiểm chứng dễ dàng) và ~ được

gọi là quan hệ đồng dư modulo n trên Z. Ta cũng viết a ~ b là a  b (mod n).

Đặt Zn = Z / ~ = { k | k  Z } [ liệt kê dạng tổng quát có trùng lặp ]

                   = { 0 , 1 , 2 , ... , n  1 } (*) [ liệt kê dạng chuẩn không trùng lặp ]

trong đó 0 = { k  Z | k chia cho n dư 0 } = { nt | t  Z } = nZ,

1 = { k  Z | k chia cho n dư 1 } = { nt + 1 | t  Z } = nZ + 1 = 1 + nZ,

2 = { k  Z | k chia cho n dư 2 } = { nt + 2 | t  Z } = nZ + 2 = 2 + nZ, … và

n  1 = { k  Z | k chia cho n dư (n – 1) } = { nt + (n – 1) | t  Z } = nZ + (n – 1).

Ta có Z = 0  1  2  ...  n  1 : Z được phân hoạch thành n lớp tương đương

rời nhau từng đôi một và mỗi lớp có vô hạn phần tử.

k  Z, ta có thể viết k về dạng chuẩn (*) như sau :

Chia Euclide k = qn + r với 0  r < | n | = n thì k = r với 0  r  n  1.

Ví dụ: Z5 = { k | k  Z } ( có trùng lặp ) = { 0 , 1 , 2 , 3 , 4 } ( không trùng lặp ) có

0 = { 5t | t  Z } = { ... ,  10,  5, 0, 5, 10, ... } ( các số chia hết cho 5 ) = 5Z.

1 = { 5t + 1 | t  Z } = { ... ,  9,  4, 1, 6, 11, ... } ( các số chia 5 dư 1 ) = 5Z + 1.

2 = { 5t + 2 | t  Z } = { ... ,  8,  3, 2, 7, 12, ... } ( các số chia 5 dư 2 ) = 5Z + 2.

3 = { 5t + 3 | t  Z } = { ... ,  7,  2, 3, 8, 13, ... } ( các số chia 5 dư 3 ) = 5Z + 3.

4 = { 5t + 4 | t  Z } = { ... ,  6,  1, 4, 9, 14, ... } (các số chia 5 dư 4) = 5Z + 4.

Ta có Z = 0  1  2  3  4 ( Z được phân hoạch thành 5 lớp tương đương rời

nhau từng đôi một và mỗi lớp có vô hạn phần tử ).

Ta qui đổi các phần tử 245 , 716 và 593 trong Z5 về dạng chuẩn:

Chia Euclide cho 5 : 245 = 81(5) + 0,  716 =  144(5) + 4 và 593 = 118(5) + 3.
                                                                                              24
    Ta có 245 = 0 , 716 = 4 và 593 = 3 .

### 5.2 CÁC PHÉP TOÁN TRÊN Zn: Cho Zn = { k | k  Z }( dạng tổng quát ). Trên Zn

    ta có thể định nghĩa các phép toán +,  và . một cách tự nhiên như sau :  u , v  Zn

    ( u, v  Z ), đặt u + v = u  v  Zn, u  v = u  v  Zn và u . v = u.v  Zn.

    Suy ra m  N*,  u  Zn , u m = u m .

    Ví dụ: Ta thực hiện các phép tính sau trong Z12 : 725 + 548 = 725  548 = 1273 = 1

    548  725 = 548  725 = 177 = 3                          692 . 473 = 692  (473) = 327316 = 8

                                                               4
    356 . 855 = 356  855 = 304380 = 0                       45 = 454 = 45  45  45  45 = 4100625 = 9 .

### 5.3 TẬP HỢP U(Zn): Cho Zn = { k | k  Z }( dạng tổng quát ). Đặt

    U(Zn) = { k  Zn |  k '  Zn , k . k ' = 1 } = { 1 , n  1 = 1 , ... }. Ta có 0  U(Zn).

     k  U(Zn), ta nói k là một phần tử khả nghịch trong Zn và phần tử duy nhất
                                                                                               1
    k '  Zn thỏa k . k ' = 1 gọi là phần tử nghịch đảo của k và ta ký hiệu k ' = k                 .

    Dĩ nhiên k ' cũng khả nghịch trong Zn [ k '  U(Zn) ] và k '  1 = k .

    Như vậy U(Zn) là tập hợp các phần tử khả nghịch trong Zn .

    Ví dụ:

    a) U(Z8) = { 1 , 3 , 5 , 7 } [ do 1 . 1 = 3 . 3 = 5 . 5 = 7 . 7 = 1 nên mỗi phần tử của

      U(Z8) đều là nghịch đảo của chính nó : 1  1 = 1 , 3  1= 3 , 5  1 = 5 và 7  1 = 7 ].

    b) U(Z9) = { 1 , 2 , 4 , 5 , 7 , 8 } ( do 1 . 1 = 2 . 5 = 4 . 7 = 8 . 8 = 1 nên
           1
       1        = 1 , 2  1 = 5 , 5  1 = 2 , 4  1 = 7 , 7  1 = 4 và 8  1 = 8 ).

### 5.4 MỆNH ĐỀ

    a) U(Zn) = { k  Zn | ( k, n ) = 1} = { k  Zn | 1  k  n  1 và ( k, n ) = 1}.


                                                                                                        25
   b) Nếu p là một số nguyên tố  2 thì U(Zp) = Zp \ { 0 }= { k | 1  k  p  1}.

   c)  k  U(Zn), do ( k, n ) = 1 nên có r, s  Z thỏa rk + sn = 1, nghĩa là
                              1
      rk = r .k = 1 và k           =r.

   Ví dụ:

   a) U(Z15) = { k  Z15 | 1  k  14 và ( k, 15 ) = 1 } = { 1 , 2 , 4 , 7 , 8 , 11 , 13 , 14 }

      ( để ý 1 . 1 = 2 . 8 = 4 . 4 = 7 . 13 = 11 . 11 = 14 . 14 = 1 ).

   b) U(Z20) = { k  Z20 | 1  k  19 và ( k, 20 ) = 1 } = { 1 , 3 , 7 , 9 , 11 , 13 , 17 , 19 }

      ( để ý 1 . 1 = 3 . 7 = 9 . 9 = 13 . 17 = 19 . 19 = 1 ).

   c) U(Z11) = Z11 \ { 0 }={ 1 , 2 , … , 9 , 10 }( 1 . 1 = 2 . 6 = 3 . 4 = 5 . 9 = 7 . 8 = 10 . 10 = 1 )

   d) Ta có (31)21 + ( 13)50 = 1 nên (21, 50) = 1. Suy ra 21  U(Z50) và 21  1 = 31 .

### 5.5 GIẢI PHƯƠNG TRÌNH TRÊN Zn

   Cho a , b  Zn. Ta tìm x  Zn thỏa a . x = b (1).

   a) Nếu a = 0  b thì phương trình vô nghiệm.

   b) Nếu a = 0 = b thì phương trình có nghiệm là x tùy ý thuộc Zn ( n nghiệm ).

   c) Nếu a  U(Zn) thì phương trình có nghiệm duy nhất là x = a  1. b .

   d) Khi a  0 và a  U(Zn) : Đặt d = (a, n)  2, a = a’d và n = n’d.

     * Nếu b d , ta có phương trình (1) vô nghiệm từ một trong hai cách giải thích sau:

        Cách 1 ( chỉ ra sự mâu thuẫn từ phương trình a . x = b ) :

        a . x = b  (ax – b)  n  (ax – b)  d : mâu thuẫn vì ax  d ( từ a  d ) và b  d .

        Cách 2 : Ta có a . x = b  n ' . a . x = n ' . b với n ' . a = 0  n ' . b : mâu thuẫn.

        ( giải thích n ' . a = n '.a = n '.d .a ' = n.a ' = 0 . Do b d nên n ' b n ' d , nghĩa là

          n ' b  n và n ' . b = n ' b  0 ).
                                                                                                      26
  * Nếu b d : viết b = b’d. Phương trình (1) trong Zn (n = d.n’) là d . a ' . x = d . b '

    Phương trình này tương ứng với phương trình a ' . X = b ' (2) trong tập mới Zn’ .

    Để ý (a’, n’) = 1 nên a '  U(Zn’) và phương trình (2) có nghiệm duy nhất
                1
       X = a'        . b ' trong Zn’ . Đặt a '  1. b ' = c  Zn’ thì phương trình (1) có đúng

    d nghiệm trong Zn là x = c  jn ' ( 0  j  d  1 ).

Ví dụ:

a) Trong Z6 : Phương trình 18 . x = 47  0 . x = 5  0 vô nghiệm.

b) Trong Z7 : Phương trình 35 . x = 56  0 . x = 0 có x tùy ý  Z7 (7 nghiệm).

c) Trong Z9 : Phương trình 22 . x = 13  4 . x = 5  x = 4 1. 5 = 7 . 5 = 35 = 8 .

d) Trong Z18 : Phương trình 12 . x = 14 có a = 12, n = 18 và b = 14. Ta có

  12  U(Z18) vì d = (a, n) = 6, b không chia hết cho d và n = n’d [ n’ = 3 ].

  Phương trình 12 . x = 14 vô nghiệm vì một trong hai cách giải thích:

  Cách 1: 12 . x = 14  (12x – 14) 18  (12x – 14) 6 : mâu thuẫn vì 12  6 và 14 6 .

  Cách 2 : 12 . x = 14  3 . 12 . x = 3 . 14  0 . x = 42 = 6  0 : mâu thuẫn.

e) Phương trình 33 . x = 45 ( trong Z57 ) (1) có a = 33, n = 57 và b = 45. Ta có

  33  U(Z57) do d = (a, n) = 3 và b chia hết cho d.

  Do 33 = 11  3, 45 = 15  3, 57 = 19  3 nên (1) tương ứng với phương trình

  11 . X = 15 ( trong Z19 ) (2). Ta có 11  U(Z19) vì (11, 19) = 1. Hơn nữa

       1
  11        = 7 từ đẳng thức 7(11)  4(19) = 1.

  Phương trình (2) cho X = 11 1. 15 = 7 . 15 = 105 = 10 ( trong Z19 ). Suy ra (1)

  có đúng 3 nghiệm trong Z57 là x = 10 , x = 10  19 = 29 và x = 10  2(19) = 48 .


                                                                                                 27
### 5.6 KẾT LUẬN

        a) Quan hệ “ = ” là quan hệ hai ngôi duy nhất có đủ 4 tính chất phản xạ, đối xứng,

           phản xứng và truyền. Các quan hệ hai ngôi khác chỉ có tối đa 3 tính chất mà thôi.

        b) Quan hệ “ = ” là quan hệ hai ngôi duy nhất vừa là quan hệ thứ tự vừa là quan hệ

           tương đương.

---------------------------------------------------------------------------------------------------------------




                                                                                                            28

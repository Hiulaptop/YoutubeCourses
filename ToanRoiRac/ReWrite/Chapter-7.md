# Chương VII: Hàm Boole

Ký hiệu n là số nguyên  1.

## I. HÀM BOOLE

### 1.1 ĐẠI SỐ BOOLE NHỊ PHÂN: Cho B = { 1, 0 }. Ta xác định các phép toán

    trên B như sau: x, y  B ( x, y gọi là các biến Boole ),

    ¬x = 1  x (bù Boole), x  y = x.y (tích Boole), x  y = x + y  x.y (tổng Boole).

                                 x  1 1 0 0                        x  1 1 0 0
          ¬x  0 1                                 y  1 0 1 0                        y  1 0 1 0
                                 xy 1 0 0 0                       xy 1 1 1 0

    Kết quả tính toán của các phép toán “ bù Boole, tích Boole và tổng Boole ” thì

    giống như kết quả chân trị của các phép toán “ phủ định, hội và tuyển mệnh đề ”.

    Cấu trúc đại số ( B,  ,  ,  )  ( B,  , . ,  ) gọi là Đại số Boole nhị phân.

    Cấu trúc này cũng thỏa 10 luật tương tự như trong Đại số mệnh đề:

    x, y, z  B, ta có ( ta luôn dùng ký hiệu . thay cho  ).

    * Luật bù kép : ¬(¬x) = x.               * Luật lũy đẳng : x.x = x và x  x = x.

    * Luật giao hoán : x.y = y.x và x  y = y  x.

    * Luật bù De Morgan : ¬(x.y) = ¬x  ¬y và ¬(x  y) = ¬x . ¬y.

    * Luật hấp thu : x.(x  y) = x = x  (x.y).

    * Luật kết hợp : (x.y).z = x.(y.z) = x.y.z và (x  y)  z = x  (y  z) = x  y  z.

    * Luật phân phối : x.(y  z) = (x.y)  (x.z) và x  (y.z) = (x  y).(x  z).

    * Luật trung hòa : x.1 = x = x  0.              * Luật bù : x.¬x = 0 và x  ¬x = 1.

    * Luật thống trị : x.0 = 0 và x  1 = 1.

                                                                                           1
### 1.2 HÀM BOOLE

  a) X = (x1, x2, ... , xn)  Bn , ta nói X = (x1, x2, ... , xn) là một vector Boole.

    Mỗi ánh xạ                 f : Bn  B = { 0, 1 }

                  X = (x1, x2, ... , xn)  f (X) = f (x1, x2, ... , xn)

    gọi là một hàm Boole n biến.

   b) Mỗi hàm Boole n biến được mô tả bằng một bảng giá trị có 2n cột ghi các giá

     trị của hàm Boole theo 2n vector Boole trong Bn .

   Ví dụ:

   a) Các cử tri P, Q, R bỏ phiếu tín nhiệm ứng cử viên S. Ta có các biến Boole

     tương ứng p, q, r ( p = 1 nếu P tín nhiệm S hoặc p = 0 nếu trái lại. Tương

     tự cho các biến Boole q và r). Ta có hàm Boole f thể hiện kết quả bỏ phiếu

     tín nhiệm f : B3  B, (p, q, r)  B3 , trong đó f (p, q, r) = 1 ( nếu S được

     tín nhiệm  2 phiếu ) hoặc f (p, q, r) = 0 ( nếu trái lại ).

                            p        1   1   1   0   1   0    0   0
                            q        1   1   0   1   0   1    0   0
                            r        1   0   1   1   0   0    1   0
                       f (p, q, r)   1   1   1   1   0   0    0   0

                         Bảng giá trị của hàm Boole f (p, q, r).

   b) Cho các công tắc điện X, Y, Z trong một mạch điện như sau ( công tắc điện

     X có trạng thái đóng và mở luôn luôn trái ngược với công tắc X ) :




     Ta có các biến Boole tương ứng x, y, z (x = 1 nếu X đóng, x = 0 nếu X mở).

     Tương tự cho các biến Boole y và z ). Ta có hàm Boole g thể hiện trạng thái
                                                                                         2
     của mạch điện : g : B3  B, (x, y, z)  B3 , g(x, y, z) = 1 ( nếu có điện qua

     mạch: X, Y đều đóng hoặc X mở, Z đóng ) hoặc g(x, y, z) = 0 ( nếu trái lại ).

                           x      1 1 1 0 1 0 0 0
                           y      1 1 0 1 0 1 0 0
                           z      1 0 1 1 0 0 1 0
                       g(x, y, z) 1 1 0 1 0 0 1 0
                        Bảng giá trị của hàm Boole g(x, y, z).

### 1.3 ĐẠI SỐ BOOLE CỦA CÁC HÀM BOOLE

   Đặt Fn = ( Tập hợp các hàm Boole n biến ) = { f | f : Bn  B }.

   Ta có | Fn | = 22 ( bảng giá trị có 2n cột, mỗi cột có 2 khả năng chọn giá trị ).
                   n




   Trong Fn, có các hàm Boole đặc biệt là hàm Boole hằng O (luôn luôn có giá trị 0)

   và hàm Boole hằng 1 (luôn luôn có giá trị 1).

   Ta xác định các phép toán trên Fn như sau: f, g  Fn , X = (x1, x2, ... , xn)  Bn,

   f (X) = 1(X)  f (X) [ bù Boole ],    (f  g)(X) = (f.g)(X) = f (X).g(X) [ tích Boole ]

   và (f  g)(X) = f (X) + g(X)  f (X).g(X) [ tổng Boole ].

   Cấu trúc đại số ( Fn ,  ,  ,  ) gọi là Đại số Boole của các hàm Boole n biến.

   Cấu trúc này cũng thỏa 10 luật như trong Đại số mệnh đề: f, g, h  Fn , ta có

   * Luật bù kép : f = f .                   * Luật lũy đẳng : f .f = f và f  f = f.

   * Luật giao hoán : f .g = g .f và f  g = g  f .

   * Luật bù De Morgan : f .g = f  g      và      f  g = f .g .

   * Luật hấp thu : f .(f  g) = f = f  (f .g).

   * Luật kết hợp : (f.g).h = f.(g.h) = f.g.h và (f  g)  h = f  (g  h) = f  g  h.

   * Luật phân phối : f .(g  h) = (f .g)  (f .h) và f  (g .h) = (f  g).(f  h).

   * Luật trung hòa : f .1 = f = f  O.                * Luật bù : f . f = O và f  f = 1.

   * Luật thống trị : f .O = O và f  1 = 1 ( ta luôn dùng ký hiệu . thay cho  ).
                                                                                          3
   Ví dụ: Cho f, g  F2 và các hàm O, 1, f , g , f  g = f.g, f  g được thể hiện

   trong bảng giá trị dưới đây:

                                      x         1   1   0    0
                                      y         1   0   1    0
                                  1(x, y)       1   1   1    1
                                  O(x, y)       0   0   0    0
                                  f (x, y)      1   0   0    1
                                  g(x, y)       1   0   1    0
                                   f (x, y)     0   1   1    0
                                  g (x, y)      0   1   0    1
                                (f .g)(x, y)    1   0   0    0
                               (f  g)(x, y)    1   0   1    1

## II. CÁC DẠNG BIỂU DIỄN CỦA HÀM BOOLE

### 2.1 TỪ ĐƠN ( CÁC HÀM BOOLE CƠ BẢN )

     Trong Fn , xét 2n hàm Boole cơ bản ( ta cũng gọi chúng là 2n từ đơn ):

     i (x1, x2, ... , xn) = xi và i (x1, x2, ... , xn) = xi ( 1  i  n ).

     Từ nay về sau, ta ký hiệu đơn giản i  xi và i  xi ( 1  i  n ).

     Ví dụ: F5 = { f | f : B5  B } có 10 từ đơn là i  xi , i  xi ( 1  i  5 ).

   2(1, 0, 1, 1, 0) = x2(1, 0, 1, 1, 0) = 0 và 5(0, 1, 1, 0, 0) = x5 (0, 1, 1, 0, 0) = 0 = 1.

     x2 x3 x5 x1 x3 = x2 x5 x1(x3 x3 ) = x2 x5 x1.O = O ( giao hoán, kết hợp, bù, thống trị ).

      x4 x2 x1 x5  x4 x2 x1x5 = (x4 x2 x1)( x5  x5) = x4 x2 x1.1 = x4 x2 x1 ( phân phối, kết

                                                                          hợp, bù, trung hòa ).

### 2.2 ĐƠN THỨC

    Một đơn thức trong Fn là tích Boole của một số từ đơn sao cho tích này  O.

    Trong mỗi đơn thức, không thể có mặt đồng thời xi và xi [ vì xi xi = O ] và ta

    không viết lặp lại các từ đơn [ vì xixi = xi và xi xi = xi ] ( 1  i  n ).

    Bậc của một đơn thức là số từ đơn khác nhau có mặt trong đơn thức đó.
                                                                                                 4
   Mỗi đơn thức trong Fn có bậc ( deg = degree ) từ 1 đến n.

   Mỗi đơn thức có bậc n trong Fn ( cao nhất ) được gọi là một đơn thức tối tiểu.

   Mỗi đơn thức tối tiểu trong Fn có dạng tổng quát

               m = y1 y2 … yn trong đó yi = xi hoặc xi ( 1  i  n ).

   Ví dụ: Xét các đơn thức trong F5 ( theo 5 biến Boole x1, x2, x3, x4 và x5 ):

   m1 = x3 , m2 = x2 x5 , m3 = x1 x2 x4 , m4 = x2x3x4x5 và m5 = x1 x2 x3 x4x5.

   Ta có deg(mi) = i ( 1  i  5 ) và m5 = x1 x2 x3 x4x5 là một đơn thức tối tiểu bậc 5.

### 2.3 ĐA THỨC: Một đa thức f trong Fn là tổng Boole của một số đơn thức trong

   Fn. Ta viết f = m1  m2  ...  mk ( m1, m2 , ... , mk là các đơn thức trong Fn ).

   Ví dụ: Xét đa thức f trong F5 ( theo 5 biến Boole x, y, z, t và u ) :

                      f (x, y, z, t, u) = x y z t  z  y t u  y u .

   Ta có f (1, 1, 0, 0, 1) = 1 . 1 .0.0  0  1. 0 .1  1. 1 = 0  1  1  0 = 1.

### 2.4 DẠNG NỐI RỜI CHÍNH TẮC CHO HÀM BOOLE

   Dạng nối rời chính tắc của một hàm Boole f là một dạng đa thức đặc biệt của

   f sao cho các thành phần đơn thức trong đó đều là các đơn thức tối tiểu. Ta viết

   f = m1  m2  ...  mk ( m1, m2 , ... , mk là các đơn thức tối tiểu trong Fn ).

   Dạng nối rời chính tắc của f là duy nhất sai khác một sự hoán vị của các thành

   phần đơn thức m1, m2 , ... và mk.

   Ví dụ: f  F4 có biểu thức f (x, y, z, t) = x y z t  xy z t  x y z t.

   Vế phải là tổng Boole của các đơn thức tối tiểu trong F4 nên vế phải là dạng nối

   rời chính tắc của hàm Boole f.

### 2.5 TÌM DẠNG NỐI RỜI CHÍNH TẮC CHO HÀM BOOLE: Cho f  Fn .

   a) Tìm từ bảng giá trị của f : Ta quan tâm các vector Boole (u1, u2, ... , un) trong

                                                                                           5
      bảng giá trị mà f (u1, u2, ... , un) = 1. Ta tạo ra các đơn thức tối tiểu tương ứng

      với các vector Boole đó : (u1, u2, ... , un)  m = y1 y2 … yn với

      yi = xi ( nếu ui = 1 ) hoặc yi = xi ( nếu ui = 0 ) [ 1  i  n ].

      Tổng Boole các đơn thức tối tiểu như vậy chính là dạng nối chính tắc của hàm

      Boole f.

   Ví dụ: Cho f  F3 ( theo 3 biến Boole x1, x2, x3 ) có bảng giá trị như sau:

                             x1         1   1    1    0   1    0   0    0
                             x2         1   1    0    1   0    1   0    0
                             x3         1   0    1    1   0    0   1    0
                       f (x1, x2, x3)   1   0    1    1   0    1   0    1

   Ta thấy f (1, 1, 1) = f (1, 0, 1) = f (0, 1, 1) = f (0, 1, 0) = f (0, 0, 0) = 1.

   (1, 1, 1)  m1 = x1x2x3 , (1, 0, 1)  m2 = x1 x2 x3 , (0, 1, 1)  m3 = x1 x2x3 ,

   (0, 1, 0)  m4 = x1 x2 x3 và (0, 0, 0)  m5 = x1 x2 x3 .

   Do đó dạng nối rời chính tắc của f là f = m1  m2  m3  m4  m5 hay viết cụ

   thể f (x1, x2, x3) = x1x2x3  x1 x2 x3  x1 x2x3  x1 x2 x3  x1 x2 x3 .

   b) Tìm từ một dạng đa thức của f : dùng u  u = 1 ( luật bù ) và luật trung hòa để

   nâng bậc các đơn thức trong đa thức. Phối hợp thêm các luật phân phối, kết hợp,

   giao hoán và lũy đẳng để khai triển và rút gọn về dạng nối rời chính tắc cho f.

   Ví dụ: Cho f  F3 có dạng đa thức như sau: f (x, y, z) = x y z  y z  x. Ta có

f (x, y, z) = x y z  1. y z  x.1.1 [trung hòa] = x y z  (x  x ) y z  x(y  y )(z  z ) [bù]

           = x y z  (x y z  x y z)  x(y z  y z  y z  y z ) [ phân phối một và hai lần ]

           = x y z  x y z  x y z  x y z  x y z  x y z  x y z [ phân phối và kết hợp ]

           = x y z  x y z  x y z  x y z  x y z  x y z  x y z [ giao hoán ].

           = x y z  x y z  x y z  x y z  x y z  x y z [ lũy đẳng ].

                                                                                                6
### 2.6 ĐỊNH LÝ: Cho f  Fn và f  O.

   Khi đó f có thể viết thành một hay nhiều dạng đa thức khác nhau ( trong đó có

   dạng nối rời chính tắc của f là một dạng đa thức đặc biệt của f ).

   Như vậy ta có thể biểu diễn các hàm Boole dưới dạng đa thức ( đơn giản ) mà

   không cần dùng đến bảng giá trị ( việc này khá cồng kềnh phức tạp khi n  4 ).

### 2.7 SO SÁNH CÁC DẠNG ĐA THỨC: Cho f  Fn và f  O.

   Giả sử f có 2 dạng đa thức ( với các đơn thức u1, u2 , ... , up , v1, v2 , ... , vq ) :

                f = u1  u2  ...  up (1) và f = v1  v2  ...  vq (2)

   a) Trường hợp 1: Ta nói (1) và (2) đơn giản như nhau nếu

     * p = q.

     * deg(ui) = deg(vi) ( 1  i  p ) [ có thể hoán vị các đơn thức v1, v2 , ... , vq và

       ký hiệu lại theo thứ tự trước khi so sánh bậc của các đơn thức tương ứng ].

   b) Trường hợp 2 : Ta nói (1) đơn giản hơn (2) [ hay (2) phức tạp hơn (1) ] nếu

     * p  q.

     * deg(ui)  deg(vi) ( 1  i  p ) [ có thể hoán vị các đơn thức v1, v2 , ... , vq và

       ký hiệu lại theo thứ tự trước khi so sánh bậc của các đơn thức tương ứng ].

     * Có ít nhất một dấu < xảy ra trong các dấu  nói trên.

   c) Trường hợp 3 : Ta nói (1) và (2) không so sánh được với nhau nếu trường

     hợp 1 và trường hợp 2 không xảy ra.
   Ví dụ:

   a) Cho f  F4 và f có 3 dạng đa thức như sau:

     f (x, y, z, t) = x y  x z t  x z  x y t = u1  u2  u3  u4 (1) [ p = 4 ]

                   = x z  y z t  x y  x z t = v1  v2  v3  v4 (2) [ q = 4 ]

             = x z  x y z t  x y t  x y z t  x y = w1  w2  w3  w4  w5 (3) [ r = 5 ]
                                                                                             7
     (1) và (2) đơn giản như nhau [ p = q = 4 và deg(ui) = deg(vi) khi 1  i  4 ].

     (2) đơn giản hơn (3) [ q = 4 < r = 5 và deg(vi)  deg(wi) khi 1  i  4 ].

  b) Cho g  F4 và g có 2 dạng đa thức như sau:

    g(x, y, z, t) = z t  x y z  x y z t  x y z = u1  u2  u3  u4 (4) [ p = 4 ]

                 = x y z t  x y z t  z t  x y z t = v1  v2  v3  v4 (5) [ q = 4 ].

    Để ý deg(u1) = 2 < deg(v1) = 4 nhưng deg(u3) = 4 > deg(v3) = 2 nên ta cần

    phải hoán vị v3 với v1 rồi ký hiệu lại các đơn thức v3, v2, v1 , v4 lần lượt thành

    w1, w2, w3 và w4 trước khi so sánh bậc của các đơn thức tương ứng:

    g(x, y, z, t) = z t  x y z t  x y z t  x y z t = w1  w2  w3  w4 (6) [ r = 4 ].

    Ta có (4) đơn giản hơn (6) [ p = r = 4 , deg(ui)  deg(wi) khi 1  i  4 và

    deg(u2) = 3 < deg(w2) = 4 ]. Như vậy (4) cũng đơn giản hơn (5).

  c) Cho h  F4 và h có 2 dạng đa thức như sau:

    h(x, y, z, t) = x  x y z t = u1  u2 (7) [ p = 2 ] [ deg(u1) = 1, deg(u2) = 4 ]

    = x z  y z t  x z = v1  v2  v3 (8) [ q = 3 ] [deg(v1) = deg(v3) = 2, deg(v2) = 3]

    (7) và (8) không so sánh được với nhau vì trường hợp 1 và 2 không thể xảy ra.

2.8 / DẠNG CÔNG THỨC ĐA THỨC TỐI TIỂU CỦA HÀM BOOLE:

   Cho f  Fn và f  O. Ta đã biết f có một hay nhiều dạng đa thức khác nhau

   ( trong đó dạng nối rời chính tắc của f là dạng đa thức phức tạp nhất của f ).

   Bằng cách so sánh các dạng đa thức của f, ta chọn ra các dạng đa thức đơn giản

   nhất có thể được cho f ( nghĩa là không có dạng nào khác đơn giản hơn chúng ).

   Chúng chính là các công thức đa thức tối tiểu của f.

   Phạm vi chương trình là tìm các công thức đa thức tối tiểu của các hàm Boole

   không quá 4 biến bằng phương pháp biểu đồ KARNAUGH.

                                                                                           8
## III. PHƯƠNG PHÁP BIỂU ĐỒ KARNAUGH

### 3.1 BẢNG MÃ: Cho Đại số Boole nhị phân B = { 1, 0 }.

     a) Bảng mã cho B1 ( biến Boole x ) :

                                             x        x
                                             1        0

     b) Bảng mã cho B2 ( các biến Boole x và y ) :

                                                  x           x
                                         y       11       01
                                         y       10       00

     c) Bảng mã cho B3 ( các biến Boole x, y và z ) :

                                      x       x                   x        x
                            z       101      111              011      001
                            z       100      110              010      000
                                     y        y                y           y

     d) Bảng mã cho B4 ( các biến Boole x, y, z và t ) : x ở bên trên ( 2 cột đầu ),

       y ở bên dưới (2 cột giữa), z ở bên trái (2 dòng đầu), t ở bên phải (2 dòng giữa).

                             x        x                   x            x
                     z     1010      1110             0110            0010     t
                     z     1011      1111             0111            0011     t
                     z     1001      1101             0101            0001     t
                     z     1000      1100             0100            0000     t
                                y     y                y               y

### 3.2 GHI CHÚ

     a) Khái niệm “ kề nhau ” trong bảng mã được hiểu như sau:

        * Dòng ( cột ) 1 kề với dòng ( cột ) 2. Dòng ( cột ) 2 kề với dòng ( cột ) 3.

        * Dòng ( cột ) 3 kề với dòng ( cột ) 4. Dòng ( cột ) 4 kề với dòng ( cột ) 1.

        Bảng mã cũng có thể được xem như một mặt trụ nên có thể uốn cong theo

        chiều dọc hoặc chiều ngang để dòng ( cột ) 4 kề với dòng ( cột ) 1.

     b) Hai ô “ kề nhau ” trong bảng mã có mã số chỉ sai khác nhau một vị trí.
                                                                                        9
### 3.3 BIỂU ĐỒ KARNAUGH CỦA HÀM BOOLE

   Cho f  Fn ( n  4 ) và xét bảng giá trị của f .

   Ta để ý các vector Boole (u1,u2, ... ,un) trong bảng giá trị có f (u1,u2, ... ,un) = 1.

   Mỗi vector Boole (u1, u2, ... , un) như vậy tương ứng với ô có cùng mã số

   u1u2 ... un trong bảng mã của Bn. Đánh dấu các ô tương ứng đó trong bảng mã.

   Tập hợp S gồm các ô được đánh dấu gọi là biểu đồ Karnaugh của hàm Boole

   f và ta ký hiệu biểu đồ đó là S = Kar(f ) hay gọn hơn nữa là S = K(f ).

   Ví dụ: Cho f  F3 ( theo 3 biến Boole x, y, z ) có bảng giá trị như sau:

                        x        1   1    1   0    1   0   0    0
                        y        1   1    0   1    0   1   0    0
                        z        1   0    1   1    0   0   1    0
                    f(x, y, z)   1   0    1   1    0   1   0    1

   Ta thấy f (1, 1, 1) = f (1, 0, 1) = f (0, 1, 1) = f (0, 1, 0) = f (0, 0, 0) = 1.

   Đánh dấu các ô có mã số tương ứng 111, 101, 011, 010 và 000 trong bảng

   của B3, ta được biểu đồ S = Kar(f ) gồm 5 ô như sau:
                              x     x     x    x
                         z   101 111 011
                         z               010 000
                              y     y     y    y

   Ta có thể vẽ biểu đồ S = Kar(f ) một cách đơn giản hơn nữa là
                             *     *   *
                                       *    *

### 3.4 NHẬN XÉT: Một hàm Boole f  Fn được xác định nếu biết một trong các

   yếu tố sau:

   a) Bảng giá trị của f.

   b) Một dạng đa thức của f.

   c) Dạng nối rời chính tắc của f ( dạng đa thức đặc biệt và phức tạp nhất của f ).

   d) Biểu đồ Karnaugh của f ( nếu n  4 ).

                                                                                        10
### 3.5 MỆNH ĐỀ: Cho f, g  Fn ( n  4 ). Khi đó

      a) K( f ) là phần bù của K(f ) trong bảng mã của Bn.

      b) K(f .g) = K(f  g) = K(f )  K(g) và K(f  g) = K(f )  K(g).

      c) f  g  K(f )  K(g). Suy ra f = g  K(f ) = K(g).

      Ví dụ: Cho f, g  F3 có các biểu đồ Karnaugh như sau:

                    *      * *                            *    *        *
                      * *                                       * * *
                    Kar(f ) (5 ô)                             Kar(g) (6 ô)

Ta suy ra biểu đồ Karnaugh của các hàm Boole f , g , f .g và f  g lần lượt như sau:

     *                                   *        *                   *              ** * *
 *          *                   *                     *       *                       * * *
 Kar( ) (3 ô)                   Kar(    ) (2 ô)   Kar(f .g) (4 ô)                Kar(f  g) (7 ô)

### 3.6 BIỂU ĐỒ CỦA MỘT ĐƠN THỨC

      Cho đơn thức m  Fn ( n  4 ). Ta đã biết 1  deg(m)  n.

      a) Nếu deg(m) = p [ 1  p  n ] thì K(m) là một hình chữ nhật ( mở rộng ) có

         2n  p ô. Như vậy khi deg(m) càng lớn thì K(m) càng có ít ô.

      b) Nếu deg(m) = n ( m là đơn thức tối tiểu ) thì K(m) có đúng 2n  n = 1 ô.

      Ví dụ: Cho n = 4.

      a) m = z và u = y [ deg(m) = deg(u) = p = 1 ].

           x    x                                                 x       x
         z *    *       *   *                             z       *              *
         z *    *       *   *       t                     z       *              *       t
                                    t                             *              *       t
                                                                  *              *
               y y                                                        yy
               Kar(z)                                                 Kar ( ).

         Kar(z) là hình chữ nhật và Kar( y ) là hình chữ nhật mở rộng có 24  1 = 8 ô.



                                                                                                11
   b) m = x t và u = x y [ deg(m) = deg(u) = p = 2 ].

             x     x                                               x     x
       z     *     *                                           z             *
       z                          t                            z             *        t
                                  t                                          *        t
             *     *                                                         *
                   y   y                                                 y   y
                                                                       Kar( y).
                 Kar(x t )

  Kar(x t ) là hình chữ nhật mở rộng và Kar( x y) là hình chữ nhật có 24  2 = 4 ô.

   c) m = x zt và u = y z t [ deg(m) = deg(u) = p = 3 ].

             x     x                                               x     x
       z                                                       z   *              *
       z               *      *   t                            z                      t
                                  t                                                   t

                  y y                                                    y  y
   .             Kar( x zt)                                            Kar( z ).

 Kar( x zt) là hình chữ nhật và Kar( y z t ) là hình chữ nhật mở rộng có 24  3 = 2 ô.

   d) m = x yz t [ deg(m) = p = 4 và m là đơn thức tối tiểu ].

                                          x   x   x    x
                                      z           *        t
                                      z                    t
                                                           t
                                                           t
                                             y y
                                          Kar( x yz t ).

           Kar( x zt) là hình chữ nhật có 24  4 = 1 ô.

### 3.7 BIỂU ĐỒ CỦA MỘT ĐA THỨC

   Cho đa thức f = m1  m2  ...  mk ( m1, m2 , ... , mk là các đơn thức của Fn ).

   Nếu n  4 thì Kar(f ) = Kar(m1)  Kar(m2)  ...  Kar(mk).

   Ví dụ: Cho f  F4 và f (x, y, z, t) = y z t  x z  x y z t  x. Ta có

 S = Kar(f ) = K( y z t )  K( x z)  K( x y z t)  K(x) trong đó K(x) gồm 8 ô (.),
                                                                                          12
   K( x z) gồm 4 ô (), K( y z t ) gồm 2 ô (~) và K( x y z t) gồm 1 ô (+).

   Do đó S = Kar(f ) gồm 14 ô được đánh dấu trong bảng mã của B4 như sau:

                               x x        x   x
                            z . .               t
                            z . .               t
                               . .        +       t
                              .~ .          ~     t
                                 y        y

### 3.8 TẾ BÀO VÀ TẾ BÀO LỚN TRONG BIỂU ĐỒ

   Cho f  Fn ( n  4 ) và S = Kar(f ).

   a) Một tế bào trong S là một hình chữ nhật (mở rộng) có số ô là 2r ( 0  r  4 ).

     Như vậy số ô của mỗi tế bào chỉ có thể là 1, 2, 4, 8 và 16.

     Một tế bào trong S chính là biểu đồ của một đơn thức nào đó trong Fn .

   b) Một tế bào lớn T trong S là một tế bào tối đại ( theo quan hệ thứ tự  trên

      tập hợp các tế bào trong S ), nghĩa là không có tế bào T’ nào trong S thỏa

      T  T’ và T  T’.

   Ví dụ

   a) Một số tế bào 1 ô và 2 ô.




                                                                                 13
   T1 = x yz t ( 1 ô ), T2 = x y z t ( 1 ô ), T3 = (x  x )y z t = y z t ( 2 ô ),

   T4 = x y z (t  t ) = x y z ( 2 ô ), T5 = y z t ( 2 ô ), T6 = x y t ( 2 ô ).

b) Một số tế bào 4 ô.




            T1 = z t ( 4 ô ), T2 = x y ( 4 ô ), T3 = x t ( 4 ô ),

            T4 = x t ( 4 ô ), T5 = y t ( 4 ô ), T6 = y t ( 4 ô ).

c) Một số tế bào 8 ô và 16 ô.




       T1 = t ( 8 ô ), T2 = t ( 8 ô ), T3 = x ( 8 ô ), T4 = y ( 8 ô ),

  T5 (cả 16 ô của bảng) = (x  x )(y  y )(z  z )(t  t ) = 1 (hàm Boole hằng 1).
                                                                                    14
d) Cho S = Kar(f ) và các tế bào T1, T2, T3, T4, T5 và T6 như hình dưới đây :




                         S = Kar(f ) [ 11 ô ]

  Ta có T1, T3, T5 là các tế bào lớn và T2, T4, T6 là các tế bào không lớn

  ( Không có tế bào Ti’ thỏa Ti  Ti’  S và Ti  Ti’ với i = 1, 3, 5. Mặt

   khác, T2  T1 và T2  T1, T4  T3 và T4  T3, T6  T5 và T6  T5 ).

e) Cho S = Kar(g) và các tế bào T1, T2, T3, T4, T5 và T6 như hình dưới đây :




                         S = Kar(g) [ 7 ô ]

  Ta có T1, T2, T3, T4 là các tế bào lớn và T5, T6 là các tế bào không lớn

  ( Không có tế bào Ti’ thỏa Ti  Ti’  S và Ti  Ti’ với i = 1, 2, 3, 4.

   Mặt khác, T5  T3 và T5  T3, T6  T4 và T6  T4 ).


                                                                             15
## IV. CÔNG THỨC ĐA THỨC TỐI TIỂU CHO HÀM BOOLE

### 4.1 PHÉP PHỦ TỐI TIỂU CHO TẬP HỢP: Cho các tập hợp S, T1, T2, ... và Tk.

     a) Nếu S = T1  T2  ...  Tk thì { T1, T2, ... , Tk } gọi là một phép phủ của S.
                                                                      k
     b) Nếu S = T1  T2  ...  Tk và j  { 1, 2, ... , k },  Ti  S ( bỏ bớt bất kỳ
                                                                  i 1
                                                                  i j

        Tj nào ra đều dẫn đến phần hội của các tập hợp còn lại không phủ được S )

        thì ta nói { T1, T2, ... , Tk } gọi là một phép phủ tối tiểu của S.
                                                                  k
     c) Nếu S = T1  T2  ...  Tk và j  { 1, 2, ... , k },  Ti = S thì ta nói
                                                                 i 1
                                                                 i j

        { T1, T2, ... , Tk } gọi là một phép phủ chưa tối tiểu của S ( khi bỏ bớt Tj ,

        phần hội của các tập hợp còn lại vẫn phủ được S ).

     Ví dụ: Cho S = { 1, 2, 3, 4, 5, 6 }.

     a) Xét T1 = { 2, 3, 6 }, T2 = { 1, 4, 6 } và T3 = { 1, 3, 5 }.

        Ta có T1  T2  T3 = S, T1  T2  S, T1  T3  S và T2  T3  S nên

        { T1, T2, T3 } là một phép phủ tối tiểu của S.

     b) Xét Z1 = { 1, 2, 5 }, Z2 = { 4, 5 }, Z3 = { 2, 3, 5 } và Z4 = { 3, 6 }.

        Ta có Z1  Z2  Z3  Z4 = S và Z1  Z2  Z4 = S nên { Z1, Z2, Z3, Z4 }

        là một phép phủ chưa tối tiểu của S ( vì dư Z3 ).

### 4.2 THUẬT TOÁN TÌM CÁC CÔNG THỨC ĐA THỨC TỐI TIỂU CHO

     HÀM BOOLE:

     Cho f  Fn ( n  4 ) và S = Kar(f ).

     a) Ý tưởng chính:

       * Tìm tất cả các tế bào lớn của S.

       * Chỉ ra một số phép phủ của S ( phủ bằng các tế bào lớn của nó ).

       * Giữ lại các phép phủ tối tiểu của S từ các phép phủ nói trên ( sơ loại ).
                                                                                         16
      * Viết các công thức đa thức cho f tương ứng với các phép phủ tối tiểu trên.

      * So sánh các công thức đa thức vừa viết để chọn ra các công thức tối ưu cho

        f ( loại chính thức ).

    b) Thuật toán cụ thể:

      * Xác định tất cả các tế bào lớn của S ( chỉ rõ vị trí của chúng trên biểu đồ

        và gọi tên chúng ).

      * Chọn ô P1 ( tùy ý )  S và tế bào lớn T1 ( tùy ý ) thỏa P1  T1.

        Chọn ô P2 ( tùy ý )  S \ T1 và tế bào lớn T2 ( tùy ý ) thỏa P2  T2.

        Chọn ô P3 ( tùy ý )  S \ (T1  T2) và tế bào lớn T3 ( tùy ý ) thỏa P3  T3.

        Chọn ô P4 ( tùy ý )  S \ (T1  T2  T3) và tế bào lớn T4 ( tùy ý ) thỏa

        P4  T4 , …

        Tiếp tục quá trình trên cho đến khi S \ (T1  T2  ...  Tk) = , nghĩa là

        ta có được một phép phủ S = T1  T2  ...  Tk .

      * Kết thúc quá trình chọn các ô và các tế bào lớn, ta thu được một hay nhiều

         phép phủ của S ( phủ bằng các tế bào lớn của nó ).

      * Giữ lại các phép phủ tối tiểu của S từ các phép phủ nói trên.

      * Viết các công thức đa thức cho f tương ứng với mỗi phép phủ tối tiểu trên

      * So sánh các công thức đa thức vừa viết để chọn ra các công thức đơn giản

        nhất có thể được. Đây chính là các công thức đa thức tối tiểu của f.

### 4.3 GHI CHÚ: Việc chọn các ô P1, P2, P3, ... là tùy ý trong các phạm vi cho phép.

    Tuy nhiên ta có thể chọn theo các thứ tự ưu tiên sau để thuật toán tiến hành

    được nhanh gọn hơn:

    * Ưu tiên 1: chọn trước các ô chỉ thuộc 1 tế bào lớn và lấy tất cả các tế bào lớn

      tương ứng với các ô đó.
                                                                                      17
* Ưu tiên 2 : xét tiếp các ô chỉ thuộc 2 tế bào lớn. Nếu có nhiều ô cùng ưu tiên

  2 thì chọn trước các ô có đặc điểm ‘‘ không ở chung tế bào lớn với các ô đã

  bị xóa ’’.

* Ưu tiên thông thường : chọn trước ô ở hàng trên ( so với các ô ở hàng dưới ),

  nếu nhiều ô cùng ở hàng trên thì chọn trước ô ở phía trái. Ưu tiên thông thường

  tạo ra sự thống nhất trong việc chọn ô chứ không chắc giúp thuật toán gọn hơn.

Ví dụ:

a) f  F4 có S = K(f ) với

K(f ) = {(1,1), (1,3), (1,4), (2,2), (3,1), (3,2), (3,3), (3,4), (4,1), (4,2), (4,3), (4,4)}.




  Các tế bào lớn trong S là T1 = z , T2 = y t , T3 = x t và T4 = xyt.

  Ưu tiên 1: (1, 1)  T2 , (1, 3)  T3 , (2, 2)  T4 và (3, 1)  T1 . Ta có

  S \ (T2  T3  T4  T1) =  nên S = T2  T3  T4  T1 là phép phủ duy

  nhất của S. Sơ đồ phủ của S là T2  T3  T4  T1. Do đó

  f (x, y, z, t) = y t  x t  xyt  z là công thức đa thức tối tiểu (duy nhất) của f.

b) g  F4 có S = K(g) = { (1,1), (1,2), (1,3), (2,3), (3,2), (3,3), (4,4) }.

  Các tế bào lớn trong S là

  T1 = xz t , T2 = yz t , T3 = x yz, T4 = x yt , T5 = y z t và T6 = x y z t .
                                                                                          18
Ưu tiên 1: (1, 1)  T1 , (3, 2)  T5 và (4, 4)  T6 .

Ta có S \ (T1  T5  T6)  .

Ưu tiên 2: chọn (1, 3)  S \ (T1  T5  T6) và để ý (1, 3)  (T2  T3). Ta

lại có S \ (T1  T5  T6  T2)   nên chọn (2, 3)  S \ (T1  T5  T6  T2)

và để ý (2, 3)  (T3  T4).

Do S \ (T1  T5  T6  T2  T3) =  nên S = T1  T5  T6  T2  T3 (1).

Do S \ (T1  T5  T6  T2  T4) =  nên S = T1  T5  T6  T2  T4 (2).

Do S \ (T1  T5  T6  T3) =  nên S = T1  T5  T6  T3 (3).

Sơ đồ các phép phủ của S là T1  T5  T6  T2  T3
                                           
                                       T3 T4

Phép phủ (1) chưa tối tiểu [ dư T2 khi so với phép phủ (3) ] nên bị loại.

Các phép phủ (2) và (3) đều tối tiểu.

Từ (2) và (3), ta viết các công thức đa thức tương ứng cho g:

g(x, y, z, t) = xz t  y z t  x y z t  yz t  x yt (*).

g(x, y, z, t) = xz t  y z t  x y z t  x yz (**).

(**) là công thức đa thức tối tiểu cho g [ loại (*) vì nó phức tạp hơn (**) ].

                                                                             19
c) h  F4 có S = K(h) = {(1,2), (2,2), (2,3), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2)}.




  Các tế bào lớn trong S là

  T1 = xy, T2 = x z , T3 = yzt, T4 = x zt , T5 = x y t và T6 = y z t.

  Ưu tiên 1: (1, 2)  T1 và (4,1)  T2 . Ta có S \ (T1  T2)  .

  Ưu tiên 2: chọn (2, 4)  S \ (T1  T2) và để ý (2, 4)  (T4  T5). Ta lại có

  S \ (T1  T2  T4)   nên chọn (3, 4)  S \ (T1  T2  T4) và để ý

  (3, 4)  (T5  T6).

  Do S \ (T1  T2  T4  T5) =  nên S = T1  T2  T4  T5 (1).

  Do S \ (T1  T2  T4  T6) =  nên S = T1  T2  T4  T6 (2).

  Ta lại có S \ (T1  T2  T5)   nên chọn (2, 3)  S \ (T1  T2  T5) và để

  ý (2, 3)  (T3  T4).

  Do S \ (T1  T2  T5  T3) =  nên S = T1  T2  T5  T3 (3).

  Do S \ (T1  T2  T5  T4) =  nên S = T1  T2  T5  T4 (4).

  Sơ đồ các phép phủ của S là T1  T2  T4  T5
                                       
                              T3  T5 T6
                                    
                                    T4

                                                                                      20
     Phép phủ (4) trùng với phép phủ (1). Các phép phủ (1), (2) và (3) đều tối tiểu.

        Từ (1), (2) và (3), ta viết các công thức đa thức tương ứng cho h :

     h(x, y, z, t) = xy  x z  x z t  x y t = xy  x z  x z t  y z t = xy  x z  x y t  yzt.

       Các công thức trên (đơn giản như nhau) là các công thức đa thức tối tiểu của h.

  d) Muốn viết dạng nối rời chính tắc của f (hay f ), ta gọi tên đơn thức tương ứng với

    mỗi ô của K(f ) [ hay K( f ) ] rồi lấy tổng Boole của chúng. Trong phần c), ta có

     h(x,y,z,t) = xyz t  xyzt  x yzt  x y zt  x y z t  x y z t  x y z t  x y z t  xy z t

        và h (x, y, z, t) = x y z t  x yz t  x y z t  x y zt  x y z t  x y z t  x y z t .

## V. ĐẠI SỐ CÁC MẠCH ĐIỆN

### 5.1 HÀM BOOLE CỦA MẠCH ĐIỆN

     a) Mạch điện là một hệ thống bao gồm các công tắc điện và các dây dẫn.

        Mỗi công tắc điện tương ứng với một biến Boole ( biến Boole này = 1 hoặc 0

        tùy thuộc vào trạng thái đóng hoặc mở của công tắc ). Hai công tắc A và B

        ( tương ứng với các biến Boole a và b ) trên một dây dẫn sẽ được mắc nối

        tiếp hoặc mắc song song. Ta có hàm Boole theo hai biến

        t (a, b) = 1 ( nếu có điện qua dây ) hoặc t (a, b) = 0 ( nếu trái lại ).




                           Cấu trúc mắc nối tiếp t(a, b) = ab.




                        Cấu trúc mắc song song t(a, b) = a  b.
                                                                                                  21
   b) Xét mạch điện có n công tắc điện A1, A2, ... , An ( ứng với các biến Boole

     a1, a2, ... , an ). Ta có hàm Boole f theo n biến ( hàm Boole của mạch điện ) :

     f (a1, a2, ... , an) = 1 ( nếu có điện qua mạch ) hoặc = 0 ( nếu trái lại ).

     Từ các cấu trúc mắc nối tiếp hoặc mắc song song trong mạch điện, ta có thể

     viết f (a1, a2, ... , an) dưới dạng một đa thức theo a1, a2, ... và an trong Fn .

   Ví dụ: Cho một mạch điện với các công tắc điện X, Y, Z và T như sau:




   Ta viết hàm Boole f của mạch điện trên dưới dạng đa thức.

   Ta có f (x, y, z, t) = [ x(y  z)  z x ]t = (xy  xz  x z )t [ để ý xz  x z  1 ]

                       = xyt  xzt  x z t ( dạng đa thức của f ).

### 5.2 CỔNG: Cổng là một thiết bị điện có một hay nhiều dòng điện đi vào và chỉ có

    một dòng điện đi ra.

    Có 3 loại cổng: cổng AND, cổng OR và cổng NOT ( ứng với các phép toán

    tích Boole, tổng Boole và bù Boole ).




                                   Cổng AND.
                                                                                          22
                                   Cổng OR.




                                  Cổng NOT.

### 5.3 THIẾT KẾ MẠNG CÁC CỔNG TỔNG HỢP HÀM BOOLE

  Cho f  Fn . Ta biết f có một hay nhiều dạng đa thức khác nhau.

  a) Ta có thể dựa vào một dạng đa thức tùy ý của f để thiết kế một mạng ( gồm

    các cổng AND, OR, NOT và các dây dẫn ) tổng hợp f.

  b) Để tối ưu hóa, ta nên dùng một công thức đa thức tối tiểu của f thiết kế mạng

    các cổng tổng hợp nó. Ta sẽ tiết giảm được chi phí mua sắm các cổng và các

    dây dẫn.

   Ví dụ: f  F3 và f (x, y, z) = xyz  xy z  x y z  x y z ( đây là một dạng đa thức

     của f và cũng là dạng nối rời chính tắc của f ).

   a) Dựa vào dạng đa thức trên, ta thiết kế mạng các cổng tổng hợp f như sau:




                                                                                     23
       Mạng các cổng ( chưa tối ưu hóa ) tổng hợp hàm Boole f.

b) Ta tìm một công thức đa thức tối tiểu cho f trước khi thiết kế mạng các cổng

  cho nó.

  Vẽ S = Kar(f ) = K(xyz)  K(xy z )  K( x y z )  K(x y z ) trong bảng mã B3.

  K(xyz) (*), K(xy z ) [  ], K( x y z ) [  ] và K(x y z ) [  ] (mỗi biểu đồ có 1 ô).




  Các tế bào lớn trong S là T1 = xy, T2 = x z và T3 = y z .

  Ưu tiên 1: (1, 2)  T1, (2, 1)  T2 và (2, 3)  T3.

   Ta có S \ (T1  T2  T3) =  nên S = T1  T2  T3 là phép phủ duy nhất

  của S : T1  T2  T3 . Do đó

  f (x, y, z) = xy  x z  y z là công thức đa thức tối tiểu ( duy nhất ) của f .

  Ta thiết kế mạng các cổng tổng hợp f dựa theo công thức đa thức tối tiểu trên:

                                                                                    24
                    Mạng các cổng ( đã tối ưu hóa ) tổng hợp hàm Boole f.

------------------------------------------------------------------------------------------------------------




                                                                                                         25

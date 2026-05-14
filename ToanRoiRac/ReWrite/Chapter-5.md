# Chương V: Tập hợp số nguyên Z

## I. SỰ CHIA HẾT CỦA SỐ NGUYÊN

### 1.1 ĐỊNH NGHĨA: Cho a, b  Z.

     a) Ta nói a | b (a là một ước số của b hay a chia hết b) nếu k  Z, b = ka.

       Lúc đó ta cũng nói là b  a ( b là một bội số của a hay b chia hết cho a).

     b) Suy ra: a không chia hết b (hay b không chia hết cho a hay a không là một

       ước số của b hay b không là một bội số của a) nếu k  Z, b  ka. Lúc này

       ta dùng ký hiệu a ∤ b hay b ∤ a .

     Ví dụ:

     a) 12 | ( 48) [ hay ( 48)  12 ] vì ( 4)  Z, ( 48) = ( 4)12.

     b) 17 không chia hết 65 ( vì k  Z, 65 > 17| k | nếu | k |  3 và 65 < 17| k |

       nếu | k |  4, nghĩa là k  Z, 65  17k ).

### 1.2 TÍNH CHẤT: Cho a, b, c, d  Z. Đặt Z* = Z \ { 0 }. Khi đó

     a) a =  1  k  Z, a | k.                         b) a  0  a chỉ có hữu hạn ước số.

     c) a = 0  k  Z, k | a  a có vô hạn ước số.

       a  0  k  Z, k | a  a có chỉ có hữu hạn ước số.

     d) a | b  ( a ) | b  a | ( b )  ( a) | ( b ).

     e) Nếu a | b thì ( b = 0 hay 0 < | a |  | b | ).

     f ) (a | b và b | a)  a =  b  | a | = | b |.

     g) (a | b , b | a và ab  0)  a = b.

     h) Nếu (a | b và b | c) thì a | c.

                                                                                           1
    i) Nếu (a | b và a | c) thì [ a | (b  c) và a | bc ].

    j) Nếu (a | b và c | d) thì ac | bd.

    k) a | b  k  Z, a | kb  k  Z, ka | kb 

              k  Z*, a | kb  k  Z*, ka | kb  k  Z*, ka | kb.

      Việc chứng minh các tính chất trên là các bài tập đơn giản về số nguyên.

### 1.3 THUẬT CHIA EUCLIDE: Cho a, b  Z và b  0.

    Khi đó có duy nhất q, r  Z thỏa a = qb + r và 0  r < | b |.

    Ta nói a là số bị chia, b là số chia, q là số thương và r là số dư.

    Ta ký hiệu q = a div b, r = a mod b và a  r (mod b).

    Ví dụ: 140 = 9(15) + 5 với 0  5 < | 15 | = 15 (phép chia Euclide).

            140 =  10(15) + 10 với 0  10 < | 15 | = 15 (phép chia Euclide).

             140 =  9(15) + 5 với 0  5 < |  15 | = 15 (phép chia Euclide).

            140 = 10( 15) + 10 với 0  10 < |  15 | = 15 (phép chia Euclide).

           140 = 8(15) + 20 và  140 = 9( 15) – 5 (không phải phép chia Euclide).

## II. ƯỚC SỐ CHUNG DƯƠNG LỚN NHẤT

### 2.1 ĐỊNH NGHĨA: Cho a, b  Z*.

     Xét S = { c  Z / c | a và c | b } = Tập hợp các ước số chung của a và b.

     Ta có S   (vì  1  S) và c  S, 1  | c |  min { | a |, | b | } nên S hữu hạn.

     Đặt d = max(S) và gọi d là ước số chung dương lớn nhất của a và b.

     Ký hiệu d = (a, b) = (b, a). Ta có 1  d  min { | a |, | b | }.

     Ví dụ: Cho a =  36 và b = 48.

     Xét S = { c  Z / c | ( 36) và c | 48 } = {  1,  2,  3,  4,  6,  12 }.

     Đặt d = max(S) = 12 thì d = ( 36, 48) = (48,  36) = 12.

                                                                                       2
### 2.2 MỆNH ĐỀ: Cho a, b  Z* và d  N* = N \ {0}. Khi đó

    d = (a, b)  [ (d | a), (d | b) và k  Z, ( k | a và k | b )  k | d ].

    (d là một ước số chung của a và b) và (d là bội của mọi ước chung của a và b).

    Ví dụ: Cho a = 75, b = 100 và S = {c  Z / c | 75 và c | 100} = { 1,  5,  25}.

    Ta có d = (75, 100) = 25 vì 25  S  N* và k  S, k | 25.

### 2.3 MỆNH ĐỀ: Cho a, b  Z* và d  N*. Khi đó

    d = (a, b)  [ (d | a), (d | b) và r, s  Z, d = ra + sb (r và s không duy nhất) ]

    (d là một ước số chung của a và b) và (d là một tổ hợp nguyên của a và b).

    Ví dụ:

    a) (12,  32) = 4 vì 4 | 12, 4 | ( 32) và (5), (2)  Z, 4 = (5)12 + (2)(32).

      Ta cũng thấy  3, 1 Z, 4 = 3(12) + 1( 32).

    b) (9, 20) = 1 vì 1 | 9, 1 | 20 và 9, ( 4)  Z, 1 = (9)9 + ( 4)20.

      Ta cũng thấy  ( 11) , 5 Z, 1 = ( 11)9 + 5(20).

### 2.4 TÍNH CHẤT: Cho a, b,   Z*. Khi đó

    a) (a, b) = ( a, b) = (a,  b) = ( a,  b) và (a, b) = |  | (a, b).

    b) Nếu a | b thì (a, b) = | a |. Đặc biệt ( a,  a) = | a |.

    Ví dụ:

    a) (36, 48) = ( 36, 48) = (36,  48) = ( 36,  48) = 12.

    b) ( 7  36,  7  48) = |  7 | (36, 48) = 7  12 = 84.

    c) ( 15, 90) = |  15 | = 15 vì ( 15) | 90. Đặc biệt ( 57,  57) = |  57 | = 57.

### 2.5 BỔ ĐỀ: Cho a, b  Z* thỏa | a | > | b | và b không chia hết a.

    Chia Eucide a = qb + r với 0 < r < | b |. Khi đó (a, b) = (b, r).




  a =  b + 22.380 [ 1 ], b =  3(22.380) + 9.698 [ 2 ],

  22.380 = 2(9.698) + 2.984 [ 3 ], 9.698 = 3(2.984) + 746 [ 4 ] và

  2.984 = 4(746) + 0 [ 5 ]. Từ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], ta có

   d = (a, b) = (b, 22.380) = (22.380, 9.698) = (9.698, 2.984) = (2.984, 746) = 746.

### 2.6 THUẬT TOÁN TÌM ƯỚC SỐ CHUNG DƯƠNG LỚN NHẤT VÀ BIỂU

  DIỄN TỔ HỢP NGUYÊN:

  a) Vấn đề : Cho a, b  Z* thỏa | a | > | b |.

    Tìm d = (a, b) và tìm r, s  Z thỏa d = ra + sb.

  b) Chia Euclide liên tiếp

    a = qo.b + ro ( 0 < ro < | b | ) [ 1 ].

    b = q1.ro + r1 ( 0 < r1 < | ro | = ro ) [ 2 ].

    ro = q2.r1 + r2 ( 0 < r2 < | r1 | = r1 ) [ 3 ].

    r1 = q3.r2 + r3 ( 0 < r3 < | r2 | = r2 ) [ 4 ].

                                                

    rn  4 = qn  2.rn  3 + rn  2 ( 0 < r n  2 < | r n  3 | = r n  3 ) [ n  1 ].

    rn  3 = qn  1.rn  2 + rn  1 ( 0 < r n  1 < | r n  2 | = r n  2 ) [ n ].

    rn  2 = qn.rn  1 + 0 ( phép chia dừng khi số dư rn = 0 ) [ n + 1].

                                                                                         4
       Từ các đẳng thức [ 1 ], [ 2 ], [ 3 ], … , [ n ], [ n + 1 ] và theo (2.5), ta có

       d = (a, b) = (b, ro) = (ro , r1) = (r1 , r2) = … = (rn  3 , rn  2) = (rn  2 , rn  1) = rn  1.

       Từ các đẳng thức [ n ], [ n  1 ], … , [ 3 ], [ 2 ] và [ 1 ], ta biểu diễn các số dư

       d = rn  1 = 1.rn  3  qn  1.rn  2 = 1.rn  3  qn  1(rn  4  qn  2.rn  3 ) =

         =  qn  1.rn  4 + (1 + qn  1.qn  2)rn  3 = … ,

       d lần lượt được biểu diễn là một tổ hợp nguyên của { rn  2 , rn  3 }, của

       { rn  3 , rn  4 }, … , của { r1 , ro }, của { r0 , b } và sau hết là của { b, a }.

     Ví dụ: Cho a =  718.729 và b = 397.386 với | a | > | b |.

     Tính d = (a, b) và tìm r, s  Z thỏa d = ra + sb.

     Chia Euclide liên tiếp : a =  2b + 76.043 [ 1 ], b = 5(76.043) + 17.171 [ 2 ],

     76.043 = 4(17.171) + 7.359 [ 3 ], 17.171 = 2(7.359) + 2.453 [ 4 ] và

     7.359 = 3(2.453) + 0 [ 5 ]. Từ [ 1 ], [ 2 ], [ 3 ], [ 4 ] và [ 5 ], ta có d = (a, b) =

     = (b, 76.043) = (76.043, 17.171) = (17.171, 7.359) = (7.359, 2.453) = 2.453.

     Từ [ 4 ], [ 3 ], [ 2 ] và [ 1 ], ta biểu diễn liên tiếp các số dư d = 2453 =

     = 17.171  2(7.359) = 17.171  2[ 76.043  4(17.171) ] =  2(76.043) + 9(17.171)

     =  2(76.043) + 9[ b  5(76.043) ] = 9b  47(76.043) = 9b  47(a + 2b)] =

     =  47a  85b. Vậy d = 2.453 = ra + sb với r =  47 và s =  85.

## III. BỘI SỐ CHUNG DƯƠNG NHỎ NHẤT

### 3.1 ĐỊNH NGHĨA: Cho a, b  Z* và

      T = { c  N* / c a và c b } = Tập hợp các bội số chung dương của a và b.

      Ta có T   (vì | ab |  T) và c  T, c  max { | a |, | b | }.

      Đặt e = min(T) và gọi e là bội số chung dương nhỏ nhất của a và b.

      Ký hiệu e = [ a, b ] = [ b, a ]. Ta có max { | a |, | b | }  e  | ab |.

                                                                                                            5
    Ví dụ: Cho a =  36 =  22.32 và b = 48 = 24.31.

    Xét T = { c  N* / c  ( 36) và c  48 } = { 24.32.t / t  N* }.

    Đặt e = min(T) = 24.32 = 144 (với t = 1) thì e = [  36, 48 ] = [ 48,  36 ] = 144.

### 3.2 MỆNH ĐỀ: Cho a, b  Z* và e  N*. Khi đó

    e = [ a, b ]  [ (e  a), (e  b) và k  Z, (k  a và k  b)  k e ].

    (e là một bội số chung của a và b) và (e là ước của mọi bội chung của a và b).

    Ví dụ: Cho a = 75 = 3.52, b = 100 = 2252 và

    L = { c  Z / c 75 và c 100 } = { 22.3.52 .t / t  Z* } = { 300t / t  Z* }.

    Ta có e = [ 75, 100 ] = 300 vì 300  L  N* và k  L, 300 | k.

### 3.3 MỆNH ĐỀ: Cho a, b  Z* và e  N*. Khi đó

                                            1  u    v
   e = [ a, b ]  [ (e a), (e  b) và u, v  Z,
                                              = + (u và v không duy nhất) ].
                                            e  a    b
                                          1                         1    1
   (e là một bội số chung của a và b) và ( là một tổ hợp nguyên của   và ).
                                          e                         a    b

   Ví dụ:

                                                                         1    (1) (3)
   [ 12,  32 ] = 96 vì 96  12, 96  ( 32) và ( 1), ( 3)  Z,          =          .
                                                                         96    12 (32)
                                 1     2   5
   Ta cũng thấy  2, 5  Z,         =         .
                                 96   12 (32)

### 3.4 TÍNH CHẤT: Cho a, b,   Z*. Khi đó

   a) [ a, b ] = [  a, b ] = [ a,  b ] = [  a,  b ] và [ a, b ] = |  | [ a, b ].

   b) Nếu a | b thì [ a, b ] = | b |. Đặc biệt [  a,  a ] = | a |.

   Ví dụ:

   a) [ 36, 48 ] = [  36, 48 ] = [ 36,  48 ] = [  36,  48 ] = 144.

   b) [  7  36,  7  48 ] = |  7 | [ 36, 48 ] = 7  144 = 1.008.

   c) [ 15,  90 ] = |  90 | = 90 vì 15 | ( 90). Đặc biệt [  57,  57 ] = |  57 | = 57.

                                                                                            6
### 3.5 ĐỊNH LÝ: Cho a, b  Z* với d = (a, b) và e = [ a, b ]. Khi đó

                               | ab |                   |a|
      a) de = | ab | . Suy ra e =     . ( nên tính e =      .| b | thì thuận tiện hơn ).
                                 d                       d
                                                 1     d        ra  sb    u    v
      b) Chọn r, s  Z thỏa d = ra + sb thì =               =            = + trong đó
                                                 e   | ab |       | ab |   a    b
                          1   ra  sb       s    r
         * Nếu ab > 0 thì =              = + ( u = s và v = r ).
                          e      ab         a    b

                               1   ra  sb   ( s )   ( r )
        * Nếu ab < 0 thì         =         =        +        ( u =  s và v =  r ).
                               e    ab       a        b

      Ví dụ: a =  718.729 và b = 397.386 có d = (a, b) = 2453 nên

                       | ab |   |a|
      e = [ a, b ] =          =     .| b | = 293  397.386 = 116.434.098.
                         d       d
      Hơn nữa do ab < 0 và d = ra + sb với r =  47 và s =  85 nên

      1     d      47 a  85b 85  47    1 u v
        =        =            =   + . Vậy = + với u = 85 và v = 47.
      e   | ab |       ab      a  b     e a b

## IV. SỰ NGUYÊN TỐ CÙNG NHAU

### 4.1 ĐỊNH NGHĨA: Cho a, b  Z*.

      a) Ta nói a và b là hai số nguyên tố cùng nhau nếu a và b chỉ có hai ước số

        chung là  1, nghĩa là (a, b) = 1.

      b) Suy ra a và b là hai số không nguyên tố cùng nhau nếu (a, b)  2.

      Ví dụ: Do ( 25, 42) = 1 nên  25 và 42 là hai số nguyên tố cùng nhau.

      Do (84, 56) = 28  2 nên 84 và 56 là hai số không nguyên tố cùng nhau.

### 4.2 MỆNH ĐỀ: Cho a, b  Z*. Khi đó

                         (a, b) = 1  r, s  Z thỏa 1 = ra + sb.

     Ví dụ: Ta có 5(17) + ( 12)7 = 1 nên ta thấy có 16 cặp số nguyên tố cùng nhau

     là ( 5,  12) = ( 5,  7) = ( 17,  12) = ( 17,  7) = 1.

### 4.3 MỆNH ĐỀ: Cho a, b, c  Z*.

     a) Nếu (a, b) = 1 = (a, c) thì (a, bc) = 1.
                                                                                           7
      b) Nếu [ a | bc và (a, b) = 1 ] thì a | c.

      c) Nếu [ a | c , b | c và (a, b) = 1 ] thì ab | c.

      Ví dụ:

      a) (12, 25) = 1 = (12,  47) nên (12, 25  [  47 ] ) = 1.

      b) 19 | (76  31) và (19, 31) = 1 nên 19 | 76.

      c) 9 | 1188,  22 | 1188 và (9,  22) = 1 nên 9( 22) | 1188.

### 4.4 DẠNG TỐI GIẢN CỦA MỘT SỐ HỮU TỈ

                            a
     Cho a, b  Z* và          Q* = Q \ { 0 }. Đặt d = (a, b) và viết a = da’, b = db’.
                            b

               a   a'   a '
      Ta có      =    =      với (a’, b’) = ( a’,  b’) = 1.
               b   b'   b '

               a                                                 a'    a '
      Ta nói     có hai dạng tối giản ( không giản ước được ) là    và      .
               b                                                 b'    b '

      Ví dụ:

      a = 79.822 và b =  57.442. Ta có d = (a, b) = 746, a = 107d và b =  77d.

               a   107d   107 107       a                         107    107
      Suy ra     =      =     =    . Vậy   có hai dạng tối giản là      và
               b   77d   77   77       b                          77     77

      vì ( 107, 77) = (107,  77) = 1.

## V. SỰ PHÂN TÍCH NGUYÊN TỐ

### 5.1 SỐ NGUYÊN TỐ: Cho p  Z và | p |  2 ( nghĩa là 0  p   1 ).

      a) Ta nói p là một số nguyên tố nếu p chỉ có hai ước số dương là 1 và | p |

        (nghĩa là p chỉ có 4 ước số là  1 và  p).

      b) Suy ra q là một số không nguyên tố ( còn gọi là hợp số ) nếu q có hơn hai

        ước số dương.

      Ví dụ:

      Các số nguyên tố đầu tiên  2,  3,  5,  7,  11,  13,  17,  19,  23,  29, ...
                                                                                              8
    Tập hợp các số nguyên tố là một tập hợp vô hạn (một bài tập hay).

    Ta có  28 là một hợp số vì  28 có hơn hai ước số dương là 1, 2, 4, ...

### 5.2 MỆNH ĐỀ: Cho p  Z và | p |  2. Các phát biểu sau là tương đương

    a) p nguyên tố.                                             b) k  Z*, p | k  (p, k) = 1.

    c) k  Z*, (p, k)  1  p | k.              d) a, b  Z*, p | ab  ( p | a hay p | b).

    e) a, b  Z*, ( p | a và p | b )  p | ab .

    Ví dụ: 83 là số nguyên tố, 83 | 724 và 83 | 615 nên (83, 724) = 1 và 83 | (724).(615) .

### 5.3 ĐỊNH LÝ PHÂN TÍCH NGUYÊN TỐ: Cho k  Z và | k |  2.

    Khi đó k được phân tích một cách duy nhất dưới dạng k =  p1r p2r ... pmr (*)1   2   m




    trong đó p1 < p2 <  < pm là các số nguyên tố > 0 và r1, r2, ... , rm  N*.

    (*) được gọi là sự phân tích nguyên tố của k.

    Ví dụ: 178.200 = 23.34.52.111 và  102.375 =  32.53.71.131.

### 5.4 MỆNH ĐỀ: Cho a, b  Z \ { 0,  1}.

    Phân tích nguyên tố a =  p1r p2r ... pmr và b =  q1s q2s ...qns . Khi đó
                                    1   2   m               1    2   n




    a) (a, b) = 1  { p1, p2, ... , pm }  { q1, q2, ... , qn } = .

    b) (a, b)  2  { p1, p2, ... , pm }  { q1, q2, ... , qn }  .

    Ví dụ: Ta có ( 23.54.112.198.295 ,  36.710.132.177.231.314) = 1 vì

                  { 2, 5, 11, 19, 29 }  { 3, 7, 13, 17, 23, 31 } = .

    Ta có ( 22.34.111.135.294 ,  33.52.78.174.296 )  2 vì

              { 2, 3, 11, 13, 29 }. { 3, 5, 7, 17, 29 } = { 3, 29 }  .

### 5.5 ÁP DỤNG: Cho a, b  Z \ { 0,  1}. Ta có thể tìm d = (a, b), e = [ a, b ] và các

                                   a
    dạng tối giản của phân số        dựa theo sự phân tích nguyên tố của a và b.
                                   b

                                                                                              9
   Phân tích nguyên tố một cách “ thỏa hiệp ” giữa a và b như sau:

   a =  p1r p2r ... pmr và b =  p1s p2s ... pms trong đó p1 < p2 <  < pm là các số nguyên
             1   2            m                   1           2    m




   tố > 0 và r1, s1, r2, s2, ... , rm, sm  N sao cho ri + si  1 (1  i  m).

   Đặt ui = min{ ri, si } và vi = max{ ri, si } (1  i  m).

   Khi đó d = (a, b) = p1u p2u ... pmu , e = [ a, b ] = p1v p2v ... pmv và các dạng tối giản của
                                          1   2           m                           1   2     m




   a
     lần lượt là
   b

   a   sgn(a ) p1r1 u1 p2r2 u2 ... pmrm um                     a    sgn(a) p1r1 u1 p2r2 u2 ... pmrm um
     =                                                hay           =                                         trong đó
   b   sgn(b) p1s1 u1 p2s2 u2 ... pmsm um                      b    sgn(b) p1s1 u1 p2s2 u2 ... pmsm um

   sgn(a) và sgn(b) là dấu của a và b.

   Ví dụ: a = 23.35.74.132.173 và b =  28.52.72.113.179.191 có các dạng phân tích

   nguyên tố một cách “ thỏa hiệp ” lần lượt là

   a = 23.35.50.74.110.132.173.190 và b =  28.30.52.72.113.130.179.191 . Ta suy ra

   d = (a, b) = 23305072110130173190 = 2372173 và e = [ a, b ] = 28355274113132179191

                                   a                 35.72.132            35.7 2.132
   Các dạng tối giản của số hữu tỉ   lần lượt là                    và 5 2 3 6 1 .
                                   b             25.52.113.176.191    2 .5 .11 .17 .19

### 5.6 MÔ TẢ CÁC ƯỚC SỐ CỦA SỐ NGUYÊN: Cho k  Z với | k |  2.

   Phân tích nguyên tố k =  p1r p2r ... pmr . Khi đó 1       2    m




   a) Tập hợp các ước số nguyên dương và tập hợp các ước số nguyên của k lần

      lượt là

      A = { p1t p2t ... pmt / t1,t2, … , tm  N và 0  tj  rj (1  j  m) } và
                  1       2       m




      B = {  p1t p2t ... pmt / t1,t2, … , tm  N và 0  tj  rj (1  j  m) }.
                      1       2       m




   b) Dùng nguyên lý nhân cho đồng thời các số nguyên t1,t2, … , tm  N, ta có

      | A | = (r1 + 1)(r2 + 1)…(rm + 1) và | B | = 2.| A | = 2(r1 + 1)(r2 + 1)…(rm + 1).

                                                                                                                         10
         Ví dụ: k =  25.32.54.113.194 có tập hợp các ước số nguyên dương và tập hợp các

         ước số nguyên lần lượt là

         A = { 2a.3b.5c.11d.19e / a, b, c, d, e  N và a  5, b  2, c  4, d  3 và e  4 }

         và B = { 2a.3b.5c.11d.19e / a, b, c, d, e  N và a  5, b  2, c  4, d  3 và e  4}

         Suy ra | A | = (5 + 1)(2 + 1)(4 + 1)(3 + 1)(4 + 1) = 1.800 và | B | = 2.| A | = 3.600.

-------------------------------------------------------------------------------------------------------------




                                                                                                          11

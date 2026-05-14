# Chương IV: Hệ thức đệ qui (phương pháp đếm cao cấp)

## I. HỆ THỨC ĐỆ QUI

### 1.1 ĐỊNH NGHĨA: Cho số nguyên r  0.

    Một quá trình diễn ra gắn liền với tham số nguyên n  r. Ta muốn tính trực tiếp

    một đại lượng an có liên quan đến quá trình trên theo n  r. Giả sử ta biết được k

    giá trị ban đầu là ar = 1, ar + 1 = 2 , ... , ar + (k 1) = k (*) và thiết lập được một hệ

    thức an = f (an  1, an  2, ... , an  k, n), n  r + k (**) tính gián tiếp an theo k số

    hạng đi trước nó [ trong (**) ít nhất phải có mặt an  k ].

    (*) và (**) có thể được cho sẵn hoặc ta tự tính toán trực tiếp từ quá trình trên.

    Từ (*) và (**), nếu vế phải của (**) luôn luôn xác định thì ta có duy nhất dãy số

    thực { an | n  r } thỏa (*) và (**).

    Ta nói (**) là một hệ thức đệ qui cấp k với điều kiện ban đầu (*).

    Ví dụ:
                   e
    a) Tính an =  (ln x) n dx , n  r = 1.
                   1
                       e                    e
      Ta có a1 =  ln xdx = xlnx ]1e   dx = e  x ]1e = e  (e  1) = 1 và n  2,
                       1                    1
             e                          e                    e
                                 n e
      an =  (ln x) dx = x(lnx) ]1   n(ln x) dx = e  n  (ln x)n 1 dx = e  nan  1. Như vậy
                   n                            n 1

             1                          1                   1



      a1 = 1 (*) và an = e  nan  1 = f (an  1, n), n  2 (**) : hệ thức đệ qui cấp 1.

    b) Dãy số nguyên không âm Fibonacci { an | n  r = 0 } có a0 = 0, a1 = 1 (*) và

       an = an  1 + an  2 = f (an  1, an  2, n), n  2 (**) : hệ thức đệ qui cấp 2.
                        /4
     c) Tính an =  tg n xdx , n  r = 2. Đặt t = tgx thì dt = (1 + t2)dx và ta có
                        0


                                                                                                    1
              /4          1           1
                              t 2 dt            1                                             
      a2 =  tg 2 xdx =            2
                                      =  (1       2
                                                      ) dt = t  arctgt ]1q = 1  arctg1 = 1  .
                           0 1 t              1 t
              0                         0
                                                                                              4

              /4           /4                      /4            1             /4
                                                                                     d (cos x)
      a3 =  tg 3 xdx =  tgx(1  tg 2 x)dx   tgxdx =  tdt                                 =
              0             0                           0           0             0
                                                                                       cos x
              2
             t 1                        1  ln 2
         =      ]0 + ln(cosx) ]0 / 4 =          .
              2                            2
                             /4            /4                            /4                    1
                                   n              n2          2                    n2
      và n  4, an =  tg xdx =  tg                   x (1  tg x ) dx   tg           xdx =  t n  2 dt  an  2 =
                               0            0                              0                      0
                          n 1
                         t                     1                                   1  ln 2
                     =        ]10  an  2 =       an  2. Như vậy a2 = 1  , a3 =          (*)
                         n 1                n 1                           4          2
                      1
        và an =           an  2 = f (an  1, an  2, n), n  4 (**) : hệ thức đệ qui cấp 2.
                    n 1

### 1.2 GIẢI HỆ THỨC ĐỆ QUI

   Cho hệ thức đệ qui cấp k có an = f (an  1, an  2, ... , an  k, n), n  r + k (**) với

   điều kiện đầu ar = 1, ar + 1 = 2 , ... , ar + (k 1) = k (*).

   a) Nếu chỉ giải riêng (**), ta thường có vô số dãy số thực { an | n  r } thỏa (**).

   b) Nếu giải đồng thời (*) và (**), ta chỉ có nhiều nhất một dãy số thực

     { an | n  r } thỏa (*) và (**).

   c) Việc thực hiện a) hoặc b) gọi là giải một hệ thức đệ qui để tính trực tiếp an

     theo n ( n  r ). Nếu thực hiện a), ta nói ta tìm các nghiệm tổng quát của (**).

     Nếu thực hiện b), ta nói ta tìm một nghiệm riêng của (**) tương ứng với (*).

   Ví dụ:

   a) Cho hệ thức đệ qui cấp 3 có

     ao = 2, a1 =  5, a2 = 5 (*) và n  3, an = 2an  1 + an  2  2an  3 (**).

     Giải (**), ta có nghiệm tổng quát an = p + q( 1)n + s.2n, n  0 ( p, q, s  R ).

     Kết hợp thêm (*), ta có 2 = p + q + s,  5 = p  q + 2s, 5 = p + q + 4s. Từ đó

     p =  3, q = 4, s = 1 và an =  3 + 4( 1)n + 2n, n  0 là nghiệm riêng của (**)

     tương ứng với (*).

                                                                                                                          2
    b) Cho hệ thức đệ qui cấp 2 có a1 = 3, a2 =  4 (*) và n  1, an + 2 = an 1an (**).

      Giải (**), ta có vô số dãy số thực { an | n  1 } thỏa [ chẳng hạn chọn an = p,

      n  1 ( p  0 tùy ý ) ]. Kết hợp thêm (*), ta không có dãy số thực { an | n  1 }

      nào thỏa (*) và (**) vì a3 = a2 a1 = (4)3 = 12 vô nghĩa : bài toán vô

      nghiệm.

## II. HỆ THỨC ĐỆ QUI TUYẾN TÍNH HỆ SỐ HẰNG THUẦN NHẤT

### 2.1 HỆ THỨC CẤP 1: Cho an = an  1, n  r + 1 (**) (  R* = R \ {0}).

      Suy ra an  an  1 = 0, n  r + 1 và ta lập đa thức bậc nhất tương ứng

      f (x) = (x  ). Ta thấy (**) có nghiệm tổng quát an = pn , n  r ( p  R ).

      Ví dụ: Cho ao = 5 (*) và an =  4an  1, n  1 (**) có đa thức tương ứng

      f (x) = x + 4. (**) có nghiệm tổng quát an = p( 4)n , n  0 ( p  R ). Từ (*),

      ta có 5 = p( 4)o = p. Vậy an = 5( 4)n, n  0 là một nghiệm riêng của (**)

      tương ứng với (*).

### 2.2 HỆ THỨC CẤP 2

      Cho an = an  1 + an  2, n  r + 2 (,   R và   0) (**).

      Suy ra an  an  1  an  2 = 0, n  r + 2 và ta lập tam thức bậc hai tương ứng

      f (x) = x2  x   với biệt thức  = 2 + 4.

      a) Nếu  > 0 thì f (x) = (x  1)(x  2) với hai nghiệm thực phân biệt 1 và 2.

        (**) có nghiệm tổng quát an = p 1n + q 2n , n  r ( p, q  R ).

      b) Nếu  = 0 thì f (x) = (x  o)2 với nghiệm thực kép o .

        (**) có nghiệm tổng quát an = (p + nq) on , n  r ( p, q  R ).

      c) Nếu  < 0 thì f (x) có hai nghiệm phức dạng lượng giác d(cos  isin).

        (**) có nghiệm tổng quát an = dn (pcosn + qsinn), n  r ( p, q  R ).
                                                                                           3
Ví dụ:

a) Cho a1 =  16, a2 = 2 (*) và an + 2 = an + 1 + 6an , n  1 (**).

  Ta có đa thức tương ứng f (x) = x2  x  6 = (x  3)(x + 2) ( 1 = 3  2 =  2 ).

  (**) có nghiệm tổng quát an = p.3n + q( 2)n, n  1 ( p, q  R ).

  Từ (*),  16 = 3p  2q và 2 = 9p + 4q nên p =  2 và q = 5.

  Vậy an = ( 2)3n + 5( 2)n , n  1 là một nghiệm riêng của (**) tương ứng

  với (*).

b) Cho a2 = 0, a3 =  64 (*) và an + 1 = 8an  16an  1, n  3 (**).

  Ta có đa thức tương ứng f (x) = x2  8x + 16 = (x  4)2 ( nghiệm kép o = 4 ).

  (**) có nghiệm tổng quát an = (p + nq)4n , n  2 ( p, q  R ).

  Từ (*), 0 = 16(p + 2q) và  64 = 64(p + 3q) nên p = 2 và q =  1.

  Vậy an = (2  n)4n , n  2 là một nghiệm riêng của (**) tương ứng với (*).

c) Cho ao = 3, a1 = 6 (*) và an = 2an  1  4an  2, n  2 (**).

  Ta có đa thức tương ứng f (x) = x2  2x + 4 = (x  1)2 + ( 3 )2 và f (x) có hai

                                                                  
  nghiệm phức có dạng lượng giác 1  i 3 = 2(cos               isin ).
                                                          3         3

                                               n       n
  (**) có nghiệm tổng quát an = 2n (pcos          + qsin ), n  0 ( p, q  R ).
                                                3        3

  Từ (*), ( 3 = p và 6 = p + q 3 ) nên ( p = 3 và q = 3 ).

                       n             n
   Vậy an = 2n (3cos      +   3 sin      ), n  0 là một nghiệm riêng của (**)
                        3              3

   tương ứng với (*).

d) Cho n  1. An đi từ mặt đất ( bậc thang thứ 0 ) lên cầu thang đến bậc thang

   thứ n. Mỗi bước chân của An sẽ lên được 1 hoặc 2 bậc thang.

   Hỏi An có bao nhiêu cách bước chân từ mặt đất lên đến bậc thang thứ n ?
                                                                                   4
n  1, đặt an là số cách để An bước chân từ mặt đất lên đến bậc thang thứ n.

Dễ thấy a1 = 1, a2 = 2, a3 = 3 và a4 = 5 (**)




                                                                            5
       Khi An bước từ mặt đất lên đến bậc thang thứ n, có đúng một trong hai trường

       hợp sau xảy ra : An có đặt chân lên bậc thang thứ (n – 1) hoặc không đặt chân

       chân lên bậc thang thứ (n – 1).

       Trường hợp 1 : Số cách để An bước chân từ mặt đất lên đến bậc thang thứ n

       mà có đặt chân lên bậc thang thứ (n – 1) là an  1.1 = an  1.

       Trường hợp 2: Số cách để An bước chân từ mặt đất lên đến bậc thang thứ n

       mà không đặt chân lên bậc thang thứ (n  1) là an  2.1 = an  2 .

       Ta có hệ thức đệ qui a1 = 1, a2 = 2 (*) và an = an  1 + an  2 , n  3 (**) với
                                                                        1 5     1 5
       đa thức tương ứng f (x) = x2  x  1 = (x  )(x ) (  =            ,=      ).
                                                                          2        2
       (**) có nghiệm tổng quát an = pn + qn , n  1 ( p, q  R ).

                                                                              
       Từ (*), 1 = p + q và 2 = 2p + 2q nên p =                 và q =        .
                                                                5              5
                   n1   n 1
       Vậy an =                    , n  1 là một nghiệm riêng của (**) tương ứng với (*).
                           5
     e) Dãy số nguyên Fibonacci ao = 0, a1 = 1 (*) và an = an  1 + an  2 , n  2 (**).

                                                                                   1 5
       Ta có đa thức tương ứng f (x) = x2  x  1 = (x  )(x ) (  =                 và
                                                                                     2
          1 5
       =        ) (**) có nghiệm tổng quát an = pn + qn, n  0 ( p, q  R ).
            2
                                                  1            1
       Từ (*), 0 = p + q và 1 = p + q nên p =       và q =  .
                                                   5            5
                   n   n
                  
       Vậy an =                , n  0 là một nghiệm riêng của (**) tương ứng với (*).
                       5

## III. HỆ THỨC ĐỆ QUI TUYẾN TÍNH HỆ SỐ HẰNG KHÔNG THUẦN NHẤT

### 3.1 HỆ THỨC CẤP 1

     Cho an = an  1 + m(n)n , n  r + 1 (**) trong đó ,   R,   0  ,

     m(x) là đa thức hệ số thực theo biến x và deg(m) = m  0.

     Xét hệ thức đệ qui thuần nhất tương ứng an  an  1 = 0, n  r + 1 ( ) và
                                                                                             6
đa thức bậc nhất tương ứng f (x) = (x  ).

Ta có Nghiệm tổng quát an của (**) =

= Nghiệm tổng quát an’ của ( ) + một nghiệm cụ thể bất kỳ an” của (**).

a) Nếu    : (**) có một nghiệm cụ thể có dạng an” = m(n)n , n  r

  trong đó m(x) là đa thức hệ số thực theo biến x và deg(m) = m.

b) Nếu  =  : (**) có một nghiệm cụ thể có dạng an” = nm(n)n , n  r

  trong đó m(x) là đa thức hệ số thực theo biến x và deg(m) = m.

Ví dụ:

a) Bài toán THÁP HÀ NỘI: Cho n  1. Có 3 cọc 1, 2 và 3. Tại cọc 1 đang

  có n cái đĩa tròn có bán kính khác nhau (khi đặt đĩa vào bất cứ cọc nào, ta

  luôn luôn phải tuân thủ việc đặt đĩa nhỏ ở phía trên đĩa lớn). Hãy di chuyển

  hết n đĩa này qua cọc 2 (mỗi lần chỉ được chuyển một đĩa và có thể đặt tạm

  đĩa vào cọc trung gian trong quá trình chuyển đĩa). Hỏi ta phải cần bao nhiêu

  lần chuyển đĩa để thực hiện yêu cầu đã nêu ?




  Đặt an = số lần chuyển đĩa cần có để chuyển n đĩa từ cọc 1 qua cọc 2 (n  1).




                                                                                  7
Ta có a1 = 1 (*) và an = 2an  1 + 1, n  2 (**). Đây là một hệ thức đệ qui

tuyến tính cấp 1 không thuần nhất với  = 2   = 1 và o(n) = 1 có

deg(o) = 0. Xét hệ thức đệ qui thuần nhất tương ứng

an  2an  1 = 0, n  2 ( ) và đa thức bậc nhất tương ứng f (x) = (x  2).

( ) có nghiệm tổng quát an’ = p.2n , n  1 ( p  R ).

(**) có một nghiệm cụ thể có dạng an” = 1n o(n) = q, n  1 (q  R \ { 0 }).

Thay an” = q, n  1 vào (**), ta có q = 2q + 1 nên an” = q =  1, n  1.

Do đó (**) có nghiệm tổng quát là an = an’ + an” = p.2n  1, n  1 (p  R).

Từ (*) ta có 1 = 2p  1 nên p = 1. Vậy an = 2n  1, n  1 là một nghiệm

riêng của (**) tương ứng với (*).

                                                                               8
   b) Tính an = 12 + 22 +  + n2, n  1.

     Ta có a1 = 1 (*) và an = an  1 + n2, n  2 (**). Đây là một hệ thức đệ qui

      tuyến tính cấp 1 không thuần nhất với  = 1 =  và 2(n) = n2 có

      deg(2) = 2. Xét hệ thức đệ qui thuần nhất tương ứng

      an  an  1 = 0, n  2 ( ) và đa thức bậc nhất tương ứng f (x) = x  1.

      ( ) có nghiệm tổng quát an’ = p.1n = p, n  1 ( p  R ).

      (**) có một nghiệm cụ thể có dạng an” = 1n n2(n) = n(qn2 + sn + t),n  1

      ( q, s, t  R và q  0 ). Thay an” = (qn3 + sn2 + tn), n  1 vào (**), ta có

      qn3 + sn2 + tn = q(n  1)3 + s(n  1)2 + t(n  1) + n2 , n  2 ( n  Z ).

      Thế n = 0, n = 1 và n = 2 vào đồng nhất thức trên, ta có hệ phương trình

                                                                             1    1
      s  t  q = 0, q + s + t = 1 và 7q + 3s + t = 4. Giải ra ta được q =     ,s= ,
                                                                             3    2

           1         1
      t=     và an” = (2n3 + 3n2 + n), n  1. Do đó (**) có nghiệm tổng quát là
           6         6

                          1                      1
      an = an’ + an” = p +  (2n3 + 3n2 + n) = p + n(n + 1)(2n + 1), n  1
                          6                      6
                                                            n( n  1)(2n  1)
      (p  R). Từ (*) ta có 1 = p + 1 nên p = 0. Vậy an =                     , n  1
                                                                    6

      là một nghiệm riêng của (**) tương ứng với (*).

### 3.2 HỆ THỨC CẤP 2

   Cho an = an  1 + an  2 + m(n)n , n  r + 2 (**) trong đó , ,   R,

     0  , m(x) là đa thức hệ số thực theo biến x và deg(m) = m  0.

   Xét hệ thức đệ qui thuần nhất tương ứng an  an  1  an  2 = 0, n  r + 2 ( )

   và tam thức bậc hai tương ứng f (x) = x2  x  .

   Ta có Nghiệm tổng quát an của (**) =

   = Nghiệm tổng quát an’ của ( ) + một nghiệm cụ thể bất kỳ an” của (**).

                                                                                       9
a) Nếu  không là nghiệm của f (x) [ f ()  0 ] : (**) có một nghiệm cụ thể

  có dạng an” = m(n)n , n  r trong đó m(x) là đa thức hệ số thực theo

  biến x và deg(m) = m.

b) Nếu  là nghiệm đơn của f (x) [ f () = 0  f ’() ] : (**) có một nghiệm cụ

  thể có dạng an” = nm(n)n , n  r trong đó m(x) là đa thức hệ số thực

  theo biến x và deg(m) = m.

c) Nếu  là nghiệm kép của f (x) [ f () = 0 = f ’() ] : (**) có một nghiệm cụ

  thể có dạng an” = n2 m(n)n , n  r trong đó m(x) là đa thức hệ số thực

  theo biến x và deg(m) = m.

Ví dụ:

a) Cho a2 = 37, a3 =  97 (*) và an + 1 = 9an  1 + 5.2n , n  3 (**). Đây là một

  hệ thức đệ qui tuyến tính cấp 2 không thuần nhất với  = 0,  = 9,  = 2 và

  o(n) = 5 có deg(o) = 0.

  Xét hệ thức đệ qui thuần nhất tương ứng an + 1  9an  1 = 0, n  3 ( ) và

  tam thức bậc hai tương ứng f (x) = x2  9 = (x  3)(x + 3) có f (2) =  5  0.

  ( ) có nghiệm tổng quát an’ = p.3n + q( 3)n, n  2 ( p, q  R ).

  (**) có một nghiệm cụ thể có dạng an” = 2n o(n) = t.2n , n  2 (t  R\{0}).

  Thay an” = t.2n, n  2 vào (**), ta có t.2n + 1 = 9t.2n  1 + 5.2n , n  3,

  nghĩa là t =  2 và an” =  2n + 1, n  2. Do đó (**) có nghiệm tổng quát

  là an = an’ + an” = = p.3n + q( 3)n  2n + 1, n  2 ( p, q  R ).

  Từ (*) ta có 37 = 9p + 9q  8 và  97 = 27p  27q  16 nên p = 1 và q = 4.

  Vậy an = 3n + 4( 3)n  2n + 1, n  2 là một nghiệm riêng của (**) tương

  ứng với (*).

                                                                                  10
b) Cho ao = 73, a1 = 92 (*) và an + 2 =  4an + 1 + 5an + 24, n  0 (**). Đây là

  một hệ thức đệ qui tuyến tính cấp 2 không thuần nhất với  =  4,  = 5,

   = 1 và o(n) = 24 có deg(o) = 0.

  Xét hệ thức đệ qui thuần nhất tương ứng an + 2 + 4an + 1  5an = 0, n  0 ( )

  và đa thức tương ứng f (x) = x2 + 4x  5 = (x  1)(x + 5) có f (1) = 0  f ’(1).

  ( ) có nghiệm tổng quát an’ = p.1n + q( 5)n = p + q( 5)n , n  0 (p, q  R)

  (**) có một nghiệm cụ thể có dạng an” = 1n no(n) = tn, n  0 (t  R \ {0}).

  Thay an’’ = tn, n  0 vào (**), ta có t(n + 2) =  4t(n +1) + 5tn + 4, n  0,

  nghĩa là t = 4 và an’’ = 4n, n  0. Do đó (**) có nghiệm tổng quát là

  an = an’ + an” = p + q( 5)n + 4n, n  0 ( p, q  R ).

                                                            151         5
  Từ (*) ta có 73 = p + q và 92 = p  5q + 4 nên p =            và q =  .
                                                             2          2

             8n  (5)n 1  151
  Vậy an =                       , n  0 là một nghiệm riêng của (**) tương ứng
                     2

  với (*).

c) Cho a1 = 84, a2 = 49 (*) và an = 14an  1 49an  2 + 6(2n  1)(7)n, n  3 (**)

  Đây là một hệ thức đệ qui tuyến tính cấp 2 không thuần nhất với  =  14,

   =  49,  =  7 và 1(n) = 6(2n  1) có deg(1) = 1.

  Xét hệ thức đệ qui thuần nhất tương ứng an + 14an  1 + 49an  2 = 0,n  3 ( )

  và đa thức tương ứng f (x) = x2 + 14x + 49 = (x + 7)2 có f ( 7) = 0 = f ’( 7).

  ( ) có nghiệm tổng quát an’ = (p + nq)( 7)n , n  1 ( p, q  R ).

  (**) có một nghiệm cụ thể có dạng

  an” = ( 7)n n21(n) = ( 7)n n2(sn + t), n  1 ( s, t  R và s  0 ).

  Thay an’’ = ( 7)n n2(sn + t), n  1 vào (**), ta có

                                                                                    11
             ( 7)n n2(sn + t) = 6(2n  1)( 7)n  14( 7)n  1(n  1)2[ s(n  1) + t ] 

                                              49( 7)n  2 (n  2)2[ s(n  2) + t ], n  3, nghĩa là

           sn3 + tn2 = 2(n  1)2(sn  s + t)  (n  2)2(sn  2s + t) + 12n  6,n  3 (n  Z)

             Thế n = 1 và n = 2, ta có 2t = 6 và 3s + t = 9 nên s = 2 và t = 3, nghĩa là

             an” = n2(2n + 3)( 7)n, n  1. Do đó (**) có nghiệm tổng quát là

              an = an’ + an” = (p + qn + 3n2 + 2n3)( 7)n , n  1 (p, q  R).

             Từ (*) ta có 84 =  7(p + q + 5) và 49 = 49(p + 2q + 28) nên

             p =  7 và q =  10. Vậy an = (2n3 + 3n2  10n  7)( 7)n , n  1 là một

             nghiệm riêng của (**) tương ứng với (*).

-------------------------------------------------------------------------------------------------------------




                                                                                                          12

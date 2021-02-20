const maincss = require('../css/maincss')
module.exports = {
    sendheadercode : function (){
        var main = maincss.allcss()
        var font = maincss.fontcss()
        return(
            `    <style> <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                ${main}
                ${font}
            </style>
        </head>
        <body>
            <div class="wrap" >
           <!--본문바로가기-->
           <a href="#main" id="skip-nav">본문 바로 가기</a> <!--탭기능 -->
           <!--header-->
           <header>
               <div class="innerHeader">
                   <h1 class="logo"><a href="/home"><img src="/resources/img/logo.png" alt=""></a></h1>
                   <nav class="gnb">
                       <ul>
                           <li><a href="../category/aboutus">About us</a></li>
                           <li><a href="../category/product">Product</a></li>
                           <li><a href="../category/social">Social Impact</a></li>
                           <li><a href="../category/news">News</a></li>
                       </ul>
                   </nav>
                   <nav class="tnb">
                       <ul>
                           <li><a href="../category/sponser"><i class="fa fa-handshake-o" aria-hidden="true"></i>BeTheLight 후원하기</a></li>
                       </ul>
                   </nav>
               </div>
           </header>
             </div></style>`
        )
    }
}
const maincss = require('../css/maincss')
module.exports = {
    sendfootercode : function (){
        var main = maincss.allcss()
        var font = maincss.fontcss()
        return(`
        <style>
        ${main}
        ${font}
            <footer>
    <div class="inner">
        <h2 class="ftLogo"><img src="/resource/img/.png" alt=""></h2>
        <ul class="address">
            <li>대표: 김진수 </li>
            <li>대표 번호</li>
            <li>010 2275 0664</li><br>
            <li>Copyright 2021. BeTheLight Co., Ltd. all rights reserved.</li>
        </ul>
        <ul class="list">

           
           
        </ul>
    </div>
</footer>
  </section>

   
    </div>
</body>
</html> </style>`
      )
    }
 } 
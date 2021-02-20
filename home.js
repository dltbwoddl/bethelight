
const headercodeget = require('./include/header.js')
const footercodeget = require('./include/footer.js')
module.exports = {
    sendHome : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
        <!DOCTYPE html>
        ${header}
    <html lang="en">
      <!--section.main-->
      <section class="main">
          <div class="mainTitle">j
              <h2>친환경 에너지와 ICT Solution으로 <br>아프리카의 삶을 밝혀나가는 소셜벤처</h2>
              <p>절대적 빈곤을 해결하기 위해 나아갑니다</p>
              <a href="./category/aboutus" class="view en">view more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
      </section>
        <!--//section.main-->
       
       
      
    
          ${footer}
        `)
    }
}
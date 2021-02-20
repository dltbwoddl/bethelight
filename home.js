
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
              <a href="#" class="view en">view more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
      </section>
        <!--//section.main-->
        <!--section.about-->
       <section class="about">
           <div class="title en">
               <h2 class="en">ABOUT Be The Light <span>.</span></h2>
               
          </div>
               <ul>
                   <li><a href="/home">
                       <p class="img"><img src="/resources/img/about_1.jpg" alt="회사소개"></p>
                       <div class="text">
                           <h3>회사소개</h3>
                           <p>아프리카에 비전을 가지고 성장하는 기업, Be The Light</p>
                           <p class="more">more</p>
                       </div>
                   </a></li>
                   <li><a href="#">
                       <p class="img"><img src="/resources/img/mainAbout1.jpg" alt="회사소개"></p>
                       <div class="text">
                           <h3>BeTheLight 프로젝트</h3>
                           <p>설립 이래 한결 같은 자세로 기술 개발에 <br class="mo">전념해 오고있습니다.</p>
                           <p class="more">more</p>
                       </div>
                   </a></li>
                   <li><a href="#">
                       <p class="img"><img src="/resources/img/about_3.jpg" alt="회사소개"></p>
                       <div class="text">
                           <h3>투자정보</h3>
                           <p>BeTheLight는 주요 경영사항을 제공합니다.</p>
                           <p class="more">more</p>
                       </div>
                   </a></li> 
                   
               </ul>
       </section>
       <!--//section.about--> 
       
      
      <!-- section.sns-->
      <section class="sns">
          <div class="title">
              <h2 class="en">SNS CHANNEL <span>.</span></h2>
              <p class="en">SNS를 통해 BeTheLight의 다양한 <br class="mo"> 모습을 만나보세요.</p>
          </div>
          <ul>
              <li><a href="#"><p class="img"> <img src="/resources/img/blog_1.png" alt=""></p>
                  <div class="bottom">
                      <p class="color">Blog</p>
                      <p>몸소 느끼며, 경험한 BeTheLight의 이야기를 생생하게 들을 수 있습니다.</p>
                      <p class="time">2021.02.16 <span>08:00</span></p>
                  </div>
              </a></li>
              <li><a href="#"><p class="img"> <img src="/resources/img/blog_3.png" alt=""></p>
                  <div class="bottom">
                      <p class="color">News</p>
                      <p>BeTheLight의 수상,   전달해 드립니다.</p>
                      <p class="time">2021.02.16 <span>08:00</span></p>
                  </div>
              </a></li>
              <li><a href="#"><p class="img"> <img src="/resources/img/snsLogo1.jpg" alt=""></p>   <!-- 인스타 주소 추가하기 -->
                              <div class="bottom">
                      <p class="color">Instagram</p>
                      <p>이벤트, 최신 소식을 빠르게 전달해 드립니다.</p>
                      <p class="time">2021.02.16 <span>08:00</span></p>
                  </div>
              </a></li>
          </ul>
          ${footer}
        `)
    }
}
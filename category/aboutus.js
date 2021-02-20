const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendAboutUs : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
<!DOCTYPE html>
${header}
<section class="about" style="padding:15%;">
	<div class="title en" style="padding-bottom:15%;">
		<h1>
			Be The Light <span>.</span>
		</h1>
		<h2>WHO WE ARE?! </h2>
		<p>친환경에너지와 ICT Solution으로 아프리카의 삶을 밝혀 나가는 소셜벤처기업 입니다.</p>

	</div>
	<ul>

		<li><a href="#">
				<p class="img">
					<img src="/resources/img/mainAbout1.jpg" alt="">
				</p>
				<div class="text" style="float: left;">
					<h3>VISION</h3>
					<p>기술을 통해 아프리카의 열악한 생활을 혁신하여 절대빈곤층 아이들 100명의 빈곤을 해결하며 자립을 지원합니다.
					</p>
				</div>
			</a>
		</li>
		
			<li><a href="#">
				<p class="img">
					<img src="/resources/img/mainAbout1.jpg" alt="">
				</p>
				<div class="text" style="float: left;">
				<h3>MISSION</h3>
					<p>절대빈곤층이 실생활에서 사용할 수 있으며 더 나은 삶을 영위할 수 있는 아이디어 제품과 서비스를 제공합니다.
					</p>
				</div>
			</a>
		</li>
		
		
	</ul>
</section>
${footer}`)
}
}


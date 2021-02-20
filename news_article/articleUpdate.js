const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendUpdate : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
        ${header}

        <form role="form" id="write" method="post">
        <input type="text" id="title" name="posttitle" placeholder="게시글 제목"/>
     <textarea id="content" name="postcontent" placeholder="내용을 자세히 적어 주세요"></textarea>
     
     
     <input type="submit" value="게시글 작성" class="ListButton">
 </form>



        ${footer}
        `)
    }
    }
    
    
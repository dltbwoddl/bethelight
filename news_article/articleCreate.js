const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendCreate : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
        ${header}

        
        <div class= ""> //class설정하기
        
        <div class ="">
        <form role="form" id="write" method="post">
        <input type="text" id="title"name="posttitle" placeholder="게시글 제목"/>
     <textarea id="content" name="postcontent" placeholder="내용을 적어 주세요"></textarea>     
     <input type="submit" value="게시글 작성" class="ListButton">
        </form>

        </div>
        $("#write").submit( function(e){
            if (($.trim($("#title").val()) == "")) {
                alert("제목을 입력하여 주세요");
                return false;
            }
            if (($.trim($("#content").val()) == "")) {
                alert("내용을 입력하여 주세요");
                return false;
            }

</div>

        ${footer}
        `)
    }
    }
    
    
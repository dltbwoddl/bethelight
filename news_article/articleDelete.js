const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendDelete : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
        ${header}

        <c:if test="${login.username === "관리자" }">
        <div class="wrap">
            <td><a
                href="/freeBoard/modify?postno=${boardVO.postno}&boardname=${boardname}"><button
                        class="buttons">수정</button></a></td>
            <td><a
                href="/freeBoard/delete?postno=${boardVO.postno}&category=${boardVO.category}"><button
                        class="buttons" onclick="return confirm('정말로 삭제 하시겠습니까?')">삭제</button></a></td>
    </c:if>


        ${footer}
        `)
    }
    }
    
    
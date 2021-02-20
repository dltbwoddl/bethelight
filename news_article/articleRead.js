const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendRead : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
        ${header}

        


        ${footer}
        `)
    }
    }
    
    
const headercodeget = require('../include/header.js')
const footercodeget = require('../include/footer.js')
module.exports = {
    sendNews : function (req, res){
        var header = headercodeget.sendheadercode();
        var footer = footercodeget.sendfootercode();
        res.send(`
<!DOCTYPE html>
${header}
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container" style="padding:15%;">
  <h2>NEWS</h2>    
 

  <table class="table table-striped">
    <thead>
      <tr>
        <th style="position: left">카테고리</th>
        <th style="position: center">제목</th>
        <th style="position: right">생성일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>언론보도</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>언론보도</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>언론보도</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
</body>
</html>
</head>

<form action ="




${footer}`)
}
}


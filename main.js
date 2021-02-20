const express = require('express');
const app = express();
const cors = require('cors');   //cors허용
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
const port = 3000;
const htmlcodeget = require('./home');
const aboutuscodeget = require('./category/aboutus');
const newscodeget = require('./category/news');
const productcodeget = require('./category/product');
const socialcodeget = require('./category/social');
const sponsercodeget = require('./category/sponser');





console.log(cors);

app.get('/home',(req,res)=>{
     htmlcodeget.sendHome(req,res);
    
});
app.get('/category/aboutus',(req,res)=>{
    aboutuscodeget.sendAboutus(req,res);
   
});
app.get('/category/news',(req,res)=>{
    newscodeget.sendNews(req,res);
   
});
app.get('/category/product',(req,res)=>{
    productcodeget.sendProduct(req,res);
   
});

app.get('/category/social',(req,res)=>{
    socialcodeget.sendSocial(req,res);
   
});
app.get('/category/sponser',(req,res)=>{
    sponsercodeget.sendSponser(req,res);
   
});


app.get('url',(req,res)=> {
    htmlcodeget.sendHome(req,res);
   
});     




app.listen(port, () => {
    console.log('success')
}); 


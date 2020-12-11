var express = require('express')
var path = require('path')
var db = require('./model/db')
var ejs = require('ejs')
var bodyParser=require('body-parser')
var app = express()
var users  = require('./routes/users')
//var user = require('./routes/user')
var parkingspots =require('./routes/parkingspots')
const { time } = require('console')
//这两句能够实现客户端传过来json的数据能够识别
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use('/user',user)
app.use('/users',users)
app.use('/parkingspots',parkingspots)
app.use(express.static('static'))//设置静态目录  static下面会自动是被 css能够识别.css .js .png这些格式
//配置模板引擎 默认的文件是views
app.engine("html",ejs.__express)
app.set('view engine' ,'html')
  app.get('/index',(req,res,next)=>{
   db.dbQueryAll('parkingspots', req, res, next);
})
app.get('/admin',(req,res)=>{
    res.render('admin')
})
app.get('/dologin',(req,res)=>{
    var url_API = 'http://127.0.0.1:3000/admin';
    res.json({url:url_API})
})
app.get('/indexs',(req,res,next)=>{
  db.dbqueryToRest('parkinglot_table',req,res,next)
})
app.post('/yuding',(req,res,next)=>{
    var body = req.body
    console.log(body)
    let sqlParam = {
        PaiZhao: body.PaiZhao
    };
    console.log("dbAdd", sqlParam);
db.dbAdd("yuding",sqlParam,res,next)
})
app.post('/update',(req,res,next)=>{
    var body = req.body
    console.log(body)
    let sqlParam = {
        user:body.user,
        carnumber:body.carnumber,
        time:body.time,
        address:body.address
    };
    console.log("dbAdd", sqlParam);
db.dbAdd("reservations",sqlParam,res,next)
})
app.listen(3000)

var express = require('express')

var routes = express.Router()

//引入模板
var payments = require('./users/payments')
var reservation = require('./users/reservation')
var platenumbers = require('./users/platenumbers')
var userLogin = require('./users/userLogin')
var register = require('./users/register')
routes.use('/userLogin',userLogin)
routes.use('/register',register)
routes.use('/payments',payments)
routes.use('/reservation',reservation)
routes.use('/platenumbers',platenumbers)
routes.get('/',(req,res)=>{
    res.send('执行user模板')
})
routes.get('/serach/list',(req,res)=>{
    res.render('index1');
})
routes.get('/serach',(req,res)=>{
    var url_API = 'http://127.0.0.1:3000/users/serach/list';
    res.json({url:url_API})
})
routes.get('/moni',(req,res)=>{
   res.render('moni')
})
module.exports = routes
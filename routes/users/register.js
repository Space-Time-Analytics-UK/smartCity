var express = require('express')

var routes = express.Router()
routes.get('/',(req,res)=>{
    res.render('register')
   // res.send("执行注册功能")
})

module.exports = routes
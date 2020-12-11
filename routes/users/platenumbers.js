//车编号的模板
var express = require('express')
var routes = express.Router()
routes.get('/',(req,res)=>{
    res.send("显示车编号")
})
routes.get('/admin',(req,res)=>{
})

module.exports = routes
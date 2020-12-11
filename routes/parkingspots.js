var express = require('express')

var routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('停车场模板')
})
module.exports = routes 
var express = require('express')

var routes = express.Router() //注意一定router的r一定是大写R
routes.get('/',(req,res)=>{
  res.render('userLogin')
})

module.exports = routes
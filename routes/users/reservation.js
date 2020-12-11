//预定模板
var express = require('express')
const db = require('../../model/db')

var routes = express.Router()
routes.post('/',(req,res,next)=>{
    var body = req.body
    console.log(body)
    let sqlParam = {
        PaiZhao: body.PaiZhao
    };
    console.log("dbAdd", sqlParam);
db.dbAdd("yuding",sqlParam,res,next)
})

module.exports = routes
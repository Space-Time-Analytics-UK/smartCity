//支付模板
var express = require('express')
var routes = express.Router()
var path = require('path');
var Alipay = require('../../model/alipay');

var outTradeId = Date.now().toString();



var ali = new Alipay({
    appId: '2016110100784951',
    notifyUrl: 'http://127.0.0.1:3000/',
    rsaPrivate: path.resolve('./routes/pem/app_private_key_nonjava.pem'),
    rsaPublic: path.resolve('./routes/pem/alipay_public_key_nonjava.pem'),
    sandbox: true,
    signType: 'RSA2'
});


/* GET home page. */
routes.get('/', function(req, res, next) {

    res.render('index');

});

routes.get('/pay', function(req, res, next) {
    var url=  ali.webPay({
        body: "ttt",
        subject: "ttt1",
        outTradeId: outTradeId,
        timeout: '90m',
        amount: "2.0",
        sellerId: '',
        product_code: 'FAST_INSTANT_TRADE_PAY',
        goods_type: "1",
        return_url:"127.0.0.1:3001",
    })

    var url_API = 'https://openapi.alipaydev.com/gateway.do?'+url;
    res.json({url:url_API})
});
routes.get('/',(req,res)=>{
    res.send('支付功能')
})

module.exports = routes
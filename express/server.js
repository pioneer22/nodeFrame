const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 用于获取post请求传来的数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

// 允许跨域
app.use(require('cors')())

/* 解决跨域
app.all("*", function (req, res, next) {
  var orginList = [
    "http://hwygzsj.cn",
    "localhost:7777"
  ]

  if (orginList.includes(req.headers.host.toLowerCase())) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", req.headers.host);
  }
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
}) */

app.use('/user', require(__dirname + '/modules/user'))

let port = 9999
app.listen(port, () => {
  console.log(`running at the port ${port}`)
})

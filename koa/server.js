const Koa = require('koa');
const KoaRouter = require('koa-router');

// 生成应用及路由器实例
let app = new Koa()
let router = new KoaRouter();

let user = require(__dirname + '/modules/user.js')
let goods = require(__dirname + '/modules/data.js')

// 将所有模块的stack复制到主模块
router.stack = [...user.stack, ...goods.stack]

app.use(require('koa2-cors')())

/* 解决跨域
 app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
}); */

// 使用路由器及路由
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法

// 监听端口
let port = 1111
app.listen(port, () => {
  console.log(`running at the port ${port}`)
})


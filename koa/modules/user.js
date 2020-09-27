let router = new require('koa-router')();
let db = require('../../db/db');
// 获取body请求参数
let KoaBody = require('koa-body');

router.get('/user', async (ctx, next) => {
  // 获取请求参数 ctx.query
  let sql = 'select * from user'
  let res = await db(sql)
  ctx.body = res
})

router.post('/user/testbody', KoaBody(), async (ctx, next) => {
  // 获取body数据:ctx.request.body
  let sql = 'select * from user'
  let res = await db(sql)
  ctx.body = res
})

module.exports = router

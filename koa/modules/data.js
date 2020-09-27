let router = new require('koa-router')();
let db = require('../../db/db');

router.get('/data/getNickname', async (ctx, next) => {
  let sql = 'select nickname from user'
  let res = await db(sql)
  ctx.body = res
})

module.exports = router
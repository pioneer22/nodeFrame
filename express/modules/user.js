const router = require('express').Router();
const db = require('../../db/db');

router.get('/getuser', async (req, res) => {
  /* get请求参数req.query */
  let sql = 'select * from user'
  let data = await db(sql)
  res.send(data)
})

router.post('/getpost', async (req, res) => {
  /* post请求参数 req.body */
  let sql = 'select * from user'
  let data = await db(sql)
  res.send(data)
})

module.exports = router
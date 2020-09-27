/* 数据库信息 */
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node_frame'
});

connection.connect();

module.exports = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, res, field) => {
      err ? reject(err) : resolve(res)
    })
  }).catch(err => {
    reject(err)
  })
}

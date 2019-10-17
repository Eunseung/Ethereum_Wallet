const mysql         = require('mysql');
const con = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '1111',
    database: 'wallet'
});

con.connect();
console.log('DB Connected complete 3306 port');
    /*데이터베이스 연결*/

module.exports = con;
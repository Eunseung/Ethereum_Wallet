const db = require('../db/db_conn');

module.exports = function(app)
{


    app.get('/', (req,res) => { //http://localhost/ 루트 경로 wallet.html
        res.render('wallet.html');
    });

    app.post('/login', (req,res) => {
        let email = req.body.email;
        let password = req.body.password;
        let sql = `select * from member where user_email='${email}' and user_password='${password}'`;
        console.log(`요청받은 값 : ${email}  , ${password} `);
        console.log(sql);
        db.query(sql,function(err, rows, fiedls){
            if(err){
                console.log(err);
                res.end();
            }
            else {
                console.log(rows);
                res.send(rows[0].user_pub_key);
            }
        });
    });
}
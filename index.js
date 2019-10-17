const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;
/* html을 사용하기 위한 설정*/
app.set('views', __dirname + '/public'); //인덱스 html 찾는다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); //서버 실행때 public 폴더안에 파일 로드 가능하게
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); // POST 방식의 요청을 받기위해

let router = require('./router/main')(app); //main 모듈 (경로설정)
let api = require('./router/api')(app); // API 모듈

app.listen(port,function(){
	console.log('connected 80 port!!');
});

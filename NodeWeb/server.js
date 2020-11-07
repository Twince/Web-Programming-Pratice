const express = require('express'); //웹 서버 프레임워크
const http = require('http');
const fs = require('fs'); //fileSystem의 약자 
const path = require('path'); // 경로 합성 모듈

const app = express(); //익스프레스를 만들어준다.
const server = http.createServer(app); //웹서버에 익스프레스를 탑재한다.

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('main');
});

app.get('/login', (req, res)=>{
    res.render('login');
});
app.get('/chatroom', (req, res)=>{
    res.render('chatroom');
});


server.listen(52000, function () {
    console.log("서버가 52000 포트에서 실행중입니다.");
});
//10.114.52.99:9090
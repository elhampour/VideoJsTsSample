var express = require('express');
var bodyParser=require("body-parser");
var launcher = require( 'launch-browser' );
var app = new express();
var open = require('open')

app.use(express.static(__dirname));

app.get('/',function(req,res){
        res.render('index.html');
}).listen(7777,'127.0.0.1',function(){
    open('http://127.0.0.1:7777');
});

app.post('/auth',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ success:true }));
});

app.post('/unauth',function (req,res) {
    res.sendStatus( 401 );
    return;
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


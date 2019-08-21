const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.post('/contact',function(req,res){
  res.sendFile(path.join(__dirname, '/poster.html'));
});

app.listen(port,function(){
    console.log('listening on port'+port+'.');
});

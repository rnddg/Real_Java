var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Real_Java Running');
});

app.listen(3000, function(){
  console.log('Real_Java running on port 3000');
})

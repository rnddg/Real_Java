var express = require('express');
var app = express();

app.use(express.static('public'));

// Define Routes
app.get('/', function(req, res){
  res.send('Real_Java Running');
});

app.get('/beans/:beanId/:beanName', function(req, res) {
  res.send(req.params);
});

// Listen on port 3000
app.listen(3000, function(){
  console.log('Real_Java running on port 3000');
})

var hbs = require('hbs');
var express = require('express');
var app = express();
var routes = require('./routes');

// Set view engine to handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', routes.index);

// Handle 404s
app.get('*', function(req, res){
  res.send('404 -- Bad Route');
});

// Listen on port 3000
app.listen(3000, function(){
  console.log('Real_Java running on port 3000');
  // console.log(partialList);
})

var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
  console.log('hicieron un request de ' + req.url);
  next();
});
app.use('/moments', function(req, res, next) {
  console.log('has llegado a los mometons mas importantes ' + req.url);
  next();
});
app.listen(3000);

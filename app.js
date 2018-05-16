const routes = require('./routes');
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var path = require('path');

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use('/', routes);
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', function(req, res, next) {
  //   console.log('hicieron un request de ' + req.url);
  next();
});

app.listen(3000);

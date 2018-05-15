var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var locals = {
  title: 'An Example',
  people: [{ name: 'Gandalf' }, { name: 'Frodo' }, { name: 'Hermione' }],
};
nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function(err, output) {
  console.log(output);
});

app.use('/', function(req, res, next) {
  //   console.log('hicieron un request de ' + req.url);
  next();
});
app.use('/moments', function(req, res, next) {
  //   console.log('has llegado a los mometons mas importantes ' + req.url);
  next();
});

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.get('/', function(req, res) {
  res.render('index', { people: locals.people });
});
app.listen(3000);

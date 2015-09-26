var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pagetitle = 'Awesome Website';

app.get('/', function(req, res)  {
	res.render('default', {title: 'Home'});
});

app.get('/about', function(req, res)  {
	res.render('default', {title: 'About Us'});
});

app.get('*', function(req, res)  {
	res.send('Bad Route');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});
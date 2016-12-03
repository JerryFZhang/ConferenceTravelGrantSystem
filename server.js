var express = require('express');
var cookieParser = require('cookie-parser');
var mongojs = require("mongojs");
var fs = fs = require('fs');
var engines = require('consolidate');
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');


//db Setup
var db = mongojs('test', ['user']);

var app = express();
var path = require('path');

// Set the default port to localhost 3000.
app.set('port', process.env.PORT || 3000);


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// Parsing coming JSON object
app.use(bodyParser());


// Serving all public content only from ./public
app.use(express.static(path.join(__dirname, 'public')));

//Enable cookie based session.
//app.use(express.cookieParser('S3CRE7'));
//app.use(express.cookieSession());
//app.use(app.router);

//app.use(express.session({
//  key: 'app.sess',
//  store: new RedisStore,
//  secret: 'SEKR37'
//}));


// Default landing page
app.get('/', function (req, res) {
    res.render('index.html');
    res.status(200);
    console.log('localhost:3000/');
});

app.get('/apply', function (req, res) {
    res.render('apply.html');
    res.status(200);
    console.log('localhost:3000/apply')
});


// Sample request.
app.post('/request', function (req, res) {
console.log(JSON.stringify(req.body));
});


app.get('/apply', function (req, res) {
    res.render('apply.html');
    res.status(200);
    console.log('localhost:3000/apply')
});

// Custom 404 page.
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// Custom 500 page.
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Start the server
app.listen(app.get('port'), function () {
    console.log('Express started.');
});

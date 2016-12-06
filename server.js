var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongojs = require("mongojs");
//
var fs = fs = require('fs');
var engines = require('consolidate');
var bodyParser = require('body-parser');
//
//db Setup
var db = mongojs('test', ['user']);
var app = express();
var path = require('path');
//session var
var sess;
<<<<<<< HEAD

=======
>>>>>>> origin/master-jerry
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
//app.use(require('cookie-parser')(credentials.cookieSecret));
//app.use(require('express-session')({
//   resave: false,
//    saveUninitialized: false,
//    secret: credentials.cookieSecret,
<<<<<<< HEAD

=======
//    
>>>>>>> origin/master-jerry
//}));
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
//    console.log("req.headers.cookie");
//    console.log(req.headers.cookie);
<<<<<<< HEAD
   console.log(req);
//    req.session.username = null;
  //  sess = req.session;

    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/');
  //  console.log('---stat1--');
    // sess.stats = true;
  //  console.log(sess.stats);
  //  console.log(sess);
=======
>>>>>>> origin/master-jerry
//    console.log(req.session);
//    req.session.username = null;
//    sess = req.session;
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/');
//    console.log('---stat1--');
//    console.log(sess.stats);
//    console.log('---stat--');
//    console.log('---id1--');
//    console.log(sess.id);
//    console.log('---id--');
    //Serve content
//    if (sess.stats == true) {
//        switch (sess.id) {
//        case "admin":
//            console.log("User will be direcred to admin page!");
//            res.status(200);
//            res.send('admin');
//            break;
//        case "requester":
//            console.log("User will be direcred to requester page!");
//            res.status(200);
//            res.send('requester');
//            break;
//        case "evaluater":
//            console.log("User will be direcred to evaluater page!");
//            res.status(200);
//            res.send('evaluater');
//            break;
//        default:
//            // This would never happen if user was caterogorized properly
//            console.log("Error!");
//            console.log(sess.id);
//            res.status(200);
//            res.send('Invaild User Type')
//            break;
//        }
//    }
//    else {
        res.render('index.html');
//    }
});
<<<<<<< HEAD
app.post('/request', function (req, res) {
    //200 OK
    res.status(200);
    console.log(req.body);
        //Serve content
    res.render('apply.html');
});
app.get('/request', function (req, res) {
    //200 OK
    console.log("here");
    res.status(200);
    // var color = req.param('id');
    console.log(req.params.id);

        //Serve content
    res.render('apply.html');
});


// Serve application page
app.get('/apply', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/apply')
        //Serve content
    res.render('apply.html');
});
// Serve application page
app.get('/apply', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/apply')
        //Serve content
    res.render('apply.html');
});
=======
// Serve application page
app.get('/apply', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/apply')
        //Serve content
    res.render('apply.html');
});
>>>>>>> origin/master-jerry
// Serve admin page
app.get('/admin', function (req, res) {
//    sess = req.session;
    console.log("req.headers.cookie");
    console.log(req.headers.cookie);
    console.log(req.session);
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/admin');
    //Serve content
    res.render('admin.html');
    //   3
});
// Serve requester page
app.get('/requester', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/requester')
        //Serve content
    res.render('requester.html');
});
// Temporary
app.get('/register', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/register')
        //Serve content
    res.render('register.html');
});
//
app.post('/register', function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/register')
        //Parse content
    var data = req.body;
    console.log(data);
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    var id = req.body.id;
    var pwd = req.body.pwd;
    var usertype = "admin"
});
// Serve evaluater page
//app.get('/evaluater', function (req, res) {
////200 OK
//    res.status(200);
//    console.log('localhost:3000/evaluater')
////Serve content
//    res.render('evaluater.html');
//});
// Recieve and parse password.
app.post('/login', function (req, res) {
//    console.log("req.headers.cookie");
//    console.log(req.headers.cookie);
//    console.log(req.session);
//    sess = req.session;
//    if (sess.stats == true) {
//        switch (sess.id) {
//        case "admin":
//            console.log("User will be direcred to admin page!");
//            res.status(200);
//            res.send('admin');
//            break;
//        case "requester":
//            console.log("User will be direcred to requester page!");
//            res.status(200);
//            res.send('requester');
//            break;
//        case "evaluater":
//            console.log("User will be direcred to evaluater page!");
//            res.status(200);
//            res.send('evaluater');
//            break;
//        default:
//            // This would never happen if user was caterogorized properly
//            console.log("Error!");
//            console.log(sess.id);
//            res.status(200);
//            res.send('Invaild User Type')
//            break;
//        }
//    }
//    else {
//        console.log(sess);
//        console.log(sess.email);
        //200 OK
        res.status(200);
        console.log('POST - localhost:3000/login')
            //Parse body
        console.log(req.body);
        var id = JSON.stringify(req.body.uname);
        ////only search by id.
        var data = '{' + '"id": ' + id + '}';
        ////Convert String to JSON
        data = JSON.parse(data);
        //Query Body
        db.user.find(data, function (err, records) {
            if (err) {
                console.log("Database Error" + err);
                res.send("Database Error" + err);
            }
            else {
                // No error, but no result returned
                if (records[0] == undefined) {
                    console.log("User does not exist!");
                    res.send("User does not exist!");
                }
                else {
                    //Result returned, user exist.
                    console.log("User found!")
                    console.log(records[0]);
                    if (records[0].password == req.body.password) {
//                        sess.stats = true;
                        // Password matched.
                        console.log("Password Matched, redirecting....");
                        console.log(records[0].usertype);
                        //Look for user type and return to page
                        switch (records[0].usertype) {
                        case "admin":
                            console.log("User will be direcred to admin page!");
//                                console.log("req.session.username");
//                                req.session.username = records[0].id;
                                console.log(req.session.username);
                                console.log(records[0].id);

//                            sess.id = "admin";
//                            console.log(JSON.stringify(sess));
                            res.status(200);
                            res.send('admin');
                            break;
                        case "requester":
                            console.log("User will be direcred to requester page!");
//                            sess.id = "requester";
//                            console.log(JSON.stringify(sess));
                            res.status(200);
                            res.send('requester');
                            break;
                        case "evaluater":
                            console.log("User will be direcred to evaluater page!");
//                            sess.id = "evaluater";
//                            console.log(JSON.stringify(sess));
                            res.status(200);
                            res.send('evaluater');
                            break;
                        default:
                            // This would never happen if user was caterogorized properly
                            console.log("Error!");
                            console.log(userType);
                            res.status(200);
                            res.send('Invaild User Type')
                            break;
                        }
                    }
                    else {
//                        sess.stats = false;
                        // User exist, but wrong password.
                        console.log("Wrong Password!");
                        res.send("Wrong Password!");
                    }
                }
            }
        });
//    }
});
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});
app.get('/get_application_list', function (req, res) {
    res.send("ok");
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

var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongojs = require("mongojs");
var compression = require('compression');
var fs = fs = require('fs');
var engines = require('consolidate');
var bodyParser = require('body-parser');
//db Setup
var db = mongojs('test', ['user', 'application']);
//var db = mongojs('admin:adminisdead@ds129028.mlab.com:29028/ctgs', ['user', 'application'])
var app = express();
var path = require('path');
//session var
var sess;
//Email
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'mail.smtp2go.com'
    , port: 587
    , auth: {
        user: 'goask.ca@gmail.com'
        , pass: 'nwyMnWD8ksRI'
    }
}));
// Set the default port to localhost 3000.
app.set('port', process.env.PORT || 3000);
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// Parsing coming JSON object
app.use(compression());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// Serving all public content only from ./public
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'ssshhhhh'
}));

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is ready to take our messages');
    }
});

app.get('/', function (req, res) {
    res.status(200);
    console.log('GET - localhost:3000/');
    if (sess != undefined) {
        switch (sess.userType) {
        case "admin":
            console.log("User will be direcred to admin page!");
            // res.status(200);
            res.render('admin.html');
            break;
        case "requester":
            console.log("User will be direcred to requester page!");
            // res.status(200);
            res.render('requester.html');
            break;
        case "evaluator":
            console.log("User will be direcred to evaluator page!");
            // res.status(200);
            res.render('evaluator.html');
            break;
        case undefined:
            res.render('index.html');
        default:
            // This would never happen if user was caterogorized properly
            console.log("Error!");
            console.log(sess.userType);
            // res.status(200);
            res.send('Invaild User Type')
            break;
        }
    }
    else {
        sess = req.session;
        sess.user_id;
        sess.email;
        sess.fname;
        sess.userType;
        res.render('index.html');
    }
});
app.get('/apply', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/apply')
        //Serve content
    res.render('apply.html');
});


app.get('/admin', function (req, res) {
    //    sess = req.session;
    console.log('GET - localhost:3000/admin');
    if (sess != undefined) {
        switch (sess.userType) {
        case "admin":
            console.log("User will be direcred to admin page!");
            res.status(200);
            res.render('admin.html');
            break;
        case "requester":
            console.log("User will be direcred to requester page!");
            res.status(200);
            res.render('requester.html');
            break;
        case "evaluator":
            console.log("User will be direcred to evaluator page!");
            res.status(200);
            res.render('evaluator.html');
            break;
        case undefined:
            res.render('index.html');
        default:
            // This would never happen if user was caterogorized properly
            console.log("Error!");
            console.log(sess.userType);
            res.status(200);
            res.send('Invaild User Type')
            break;
        }
    }
    else {
        res.render('index.html');
    }
});
app.get('/create-user', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/create_user')
    //Serve content
    res.render('add_user.html');
});
app.get('/update-user', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/update_user')
    //Serve content
    res.render('update_user.html');
});
app.get('/set-parameter', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/update_user')
    //Serve content
    res.render('update_user.html');
});


// Serve requester page
app.get('/requester', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/requester')
        //Serve content
    res.render('requester.html');
});
app.get('/student-application-status', function (req, res) {
    res.render('student_application_status.html');
});
// Temporar  /get_application_list_all
app.get('/get-application-list-all', function (req, res) {
    db.application.find(function (err, records) {
        if (err) {
            console.log("Database Error" + err);
            res.send("Database Error" + err);
        }
        else {
            //            console.log("awer");
            console.log(records);
            res.send(records);
        }
    });
});
app.get('/register', function (req, res) {
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/register')
        //Serve content
    res.render('register.html');
});
app.get('/application', function (req, res) {
    //    sess = req.session;
    //    console.log("req.headers.cookie");
    //    console.log(req.headers.cookie);
    //    console.log(req.session);
    //200 OK
    res.status(200);
    console.log('GET - localhost:3000/admin');
    //Serve content
    res.render('admin.html');
    //   3
});
app.get('/evaluator', function (req, res) {
    //200 OK
    res.status(200);
    console.log('localhost:3000/evaluator')
        //Serve content
    res.render('evaluator.html');
});
app.get('/create-application', function (req, res) {
    console.log('localhost:3000/create-application');
    if (sess != undefined) {
        switch (sess.userType) {
            case "admin":
                console.log("User will be direcred to admin page!");
                res.status(200);
                res.send('Invaild User Type - You cannot create application as an admin, please user a requester account.');
                break;
            case "requester":
                console.log("User will be direcred to requester page!");
                res.status(200);
                res.render('create-application.html');
                break;
            case "evaluator":
                console.log("User will be direcred to evaluator page!");
                res.status(200);
                res.render('Invaild User Type - You cannot create application as an admin, please user a requester account.');
                break;
            case undefined:
                res.render('index.html');
            default:
                // This would never happen if user was caterogorized properly
                console.log("Error!");
                console.log(sess.userType);
                res.status(200);
                res.send('Invaild User Type')
                break;
        }
    }
    else {
        res.render('index.html');
    }
});
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            sess = undefined;
            res.render('index.html');
        }
    });
});
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
// Serve evaluator page
//app.get('/evaluator', function (req, res) {
////200 OK
//    res.status(200);
//    console.log('localhost:3000/evaluator')
////Serve content
//    res.render('evaluator.html');
//});
// Recieve and parse password.
app.post('/login',              function (req, res) {
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
                    // Password matched.
                    console.log("Password Matched, redirecting....");
                    sess = req.session;
                    sess.userType = records[0].usertype;
                    sess.fname = records[0].firstname;
                    sess.email = records[0].email;
                    sess.user_id = records[0].id;
                    //Look for user type and return to page
                    switch (records[0].usertype) {
                    case "admin":
                        console.log("User will be direcred to admin page!");
                        sess.username = records[0].id;
                        // res.status(200);
                        res.send('admin');
                        break;
                    case "requester":
                        console.log("User will be direcred to requester page!");
                        sess.userType = "requester";
                        //                            sess.id = "requester";
                        //                            console.log(JSON.stringify(sess));
                        // res.status(200);
                        res.send('requester');
                        break;
                    case "evaluator":
                        console.log("User will be direcred to evaluator page!");
                        sess.userType = "evaluator";
                        //                            sess.id = "evaluator";
                        //                            console.log(JSON.stringify(sess));
                        // res.status(200);
                        res.send('evaluator');
                        break;
                    default:
                        // This would never happen if user was caterogorized properly
                        console.log("Error!");
                        console.log(sess.userType);
                        // res.status(200);
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
app.post('/final-decision',     function (req, res) {
    //200 OK
    res.status(200);
    //get user email by query user
    if (req.body.Decision == "approve") {
        transporter.sendMail({
            from: 'CTGS@uottawa.ca'
            , to: "rogerliuray@gmail.com"
            , subject: 'Application approved'
            , text: 'Hi, your application has been approved! Congratulations! :D'
        }, function (error, response) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Approved Message sent');
            }
        });
    }
    else {
        transporter.sendMail({
            from: 'CTGS@uottawa.ca'
            , to: "rogerliuray@gmail.com"
            , subject: 'Application refused'
            , text: 'Hi,i am sorry to inform you that your application has been refused!'
        }, function (error, response) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Refused Message sent');
            }
        });
    }
    //Serve content
    res.render('evaluator.html');
});
app.post('/get-application',    function (req, res) {
    //200 OK
    
    res.status(200);
    console.log('GET - localhost:3000/getapp');
    var data = req.body.appid;
        //Serve content/
    db.application.find({_id: data}, function (err, records) {
        if (err) {
            console.log("Database Error" + err);
            res.send("Database Error" + err);
        }
        else {
            //            console.log("awer");
            console.log(records);
            res.send(records);
        }
    });
//    res.render('register.html');
});
app.post('/add-user',           function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/add_user')
        //Parse content
    var data = req.body;
    console.log(data);
    var firstnameI = req.body.fname;
    var lastnameI = req.body.lname;
    var emailI = req.body.email;
    var idI = req.body.id;
    var pwd = req.body.pwd;
    var usertypeI = req.body.userType;
    var data = {
        firstname: firstnameI
        , lastname: lastnameI
        , id: idI
        , password: pwd
        , email: emailI
        , usertype: usertypeI
    }
    console.log("datasadkfghakjsdhfiuashdjkfhajkshfdjkhsdjkh");
    console.log(data);
    db.user.insert(data);
    res.render("add_user.html")
});
app.post('/delete-user',        function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/delete_user')
        //Parse content
    var data = req.body;
    console.log(data);
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    var idI = req.body.id;
    var pwd = req.body.pwd;
    var usertype = "admin"
    db.products.remove({
        id: idI
    });
});
app.post('/submit',             function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/submit')
        //Parse content
});
app.post('/update-application', function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/update_application')
        //Parse content
});
app.post('/request',            function (req, res) {
    //200 OK
    res.status(200);
    console.log('POST - localhost:3000/request');
    console.log(req.body);
    //Parse content
});
app.post('/find-user',          function (req, res) {
    //200 OK
    console.log(req.body.email);
    db.user.find({
        email: req.body.email
    }, function (err, records) {
        if (err) {
            console.log("Database Error" + err);
            res.send("Database Error" + err);
        }
        else {
            console.log("awer");
            console.log(records);
            res.send(records);
        }
    });
});
app.post('/create-application', function (req, res) {
    //200 OK
    console.log(req.body);
    var data = req.body;
    db.application.insert(data);
    res.render("create-application");
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
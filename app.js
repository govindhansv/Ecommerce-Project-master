if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./connection');
// var fileupload=require('express-fileupload')



const sessions = require('express-session');
const hbs = require('express-handlebars');


var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ownersRouter = require('./routes/owners');
var adminRouter = require('./routes/admin');
var authsRouter = require('./routes/auths');

app.get('/',(req,res)=>{ 
  console.log(' hell yeah!. Here we go again');
  res.send('user/signmup');
})

// db connection
db.connect()



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/', partialsDir: __dirname + '/views/partials/' }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use(fileupload());


app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/owners', ownersRouter);
// app.use('/admin', adminRouter);
// app.use('/auths', authsRouter);


// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

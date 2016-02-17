var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var socket_io = require('socket.io');
var dbConfig = require('./db-config');
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

var app = express();
var io = socket_io();

// globals
var stocks = []; // put into closure with private vars

// io namespaces
var pio = io.of('/price');
var tio = io.of('/buySell');
//var cio = io.of('/chat'); // for chat

app.set('io', io); //pass io to www
app.set('bookshelf', bookshelf); //pass instance of DB connection around

// socket logic
require('./realtime/controller/price-fetcher')(pio);
require('./realtime/controller/trade-broker')(tio);

// routes - see route order below
var users = require('./routes/users');
var about = require('./routes/about');
var create = require('./routes/create');
var stock = require('./routes/stock');
var index = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'durian',
  resave: false,
  saveUninitialized: true
}));

// route order
app.use('/users', users);
app.use('/about', about);
app.use('/create', create);
app.use('/', stock);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/




module.exports = app;

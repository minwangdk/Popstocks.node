/**
 * Created by Min on 02-Feb-16.
 */

var express = require('express');
var router = express.Router();

var ua = require('../realtime/model/userActions.js')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', {title: 'Stock Creation Page'});
});

//router.post('/', function(req, res, next) {
//  body.parse details
//  ua.createStock(stockname, details);
//  res.render('index', {title: 'Express'});
//});

module.exports = router;
/**
 * Created by Min on 24-Jan-16.
 */
var express = require('express');
var router = express.Router();

/* Run at any request to path starting with /about */
router.use('/', function(req, res, next){
    console.log('hello from about.js');
    next();
});

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Express' });
});

module.exports = router;
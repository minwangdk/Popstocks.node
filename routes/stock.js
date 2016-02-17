/**
 * Created by Min on 09-Feb-16.
 */
var express = require('express');
var router = express.Router();

router.param('stockname', function (req, res, next, stockname) {
//TODO Get the stock data from Stock model and attach it to request object (req.stock)
// Check if the stock exists
  req.stock = [];
  req.stock['name'] = stockname;

  // TODO pass stockname to io somehow, possibly using sessions (pass req.stock to session, then access session in io)
  // pass req.stock to session
  return next();
});

/* GET stock page. */
router.get('/:stockname', function(req, res, next) {
  if (!req.stock) {return next('route');} //main page '/'
  res.render('stock', {title: req.stock['name']});
});



module.exports = router;








/**
 * Created by Min on 29-Jan-16.
 */

/** user actions **/

var userAction = function (){
  var stockCounter = require('./stockCounter.js');

  return { //TODO create user action logic
    createStock: function (stockname, details)  {
      // database: create new stock
      //then push new stockcounter to global stocks array
      stocks[stockname] = stockCounter(stockname);
    },
    getPrices: function (stockname){
      // get latest price points for a stock
      // database query
    },
    buy: function(stockname, user, quantity){
      // pass stockname, stock price and quantity to pricemodel.js, callback returns cost.
      // pass cost to user-currency-handler.js
    },
    sell: function (stockname, user){
    },
    close: function (){
    },
    connect: function (){
    }
  }
};

module.exports = userAction;
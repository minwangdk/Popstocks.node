/**
 * Created by Min on 10-Feb-16.
 */

var buySell = function (){

  return {
    buy: function(user, order){
      // pass stockname, stock price and quantity to pricemodel.js, callback returns cost.
      // pass cost to user-currency-handler.js
    },
    sell: function (stockname, user){
    }
  }
};

module.exports = buySell;
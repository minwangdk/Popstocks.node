// closure with private var for price
// when instantiated, private var value is set to database value

var stockCounter = function (stockname){
  var stock = {
    id:     '',
    name:   '',
    price:  ''
  };

  //stock.price = databaseStockprice || 0;
  //stock.name = databasename || 0;

  function changeBy(val)  {
    stock.price += val;
  }
  return  {
    increase: function(x) {
      changeBy(+x);
    },
    decrease: function(x) {
      changeBy(-x);
    },
    id: function () {
      return stock.id;
    },
    name: function () {
      return stock.name;
    },
    price: function() {
      return stock.price;
    }
  }
};

module.exports = stockCounter;
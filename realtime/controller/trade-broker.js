/**
 * Created by Min on 10-Feb-16.
 */
module.exports = function(tio) {
  var user = require('../model/brokerTrades.js')();

  tio.on('connection', function (socket) {
    socket.on('buy', function (order) { //TODO callback for confirmation to client
      //user.buy(socket.id, order);
    });

    socket.on('sell', function (order) { //TODO callback for confirmation to client
      //user.sell(socket.id, order);
    });
  });
};
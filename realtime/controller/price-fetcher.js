/**
 * Created by Min on 10-Feb-16.
 */
module.exports = function(pio) {
  var fetchPrices = require('../model/fetchPrices'); //maybe just 'fetchPrices'

  pio.on('connection', function (socket) {
    // greeting and farewell
    socket.emit('hello', {hello: 'Connection established'});
    console.log(socket.id + ' connected 1');

    socket.on('disconnect', function () {
      console.log(socket.id + ' has left')
    });

    // join stock channel for pushing new prices to client
    socket.on('stock-channel', function (channel) {
      console.log(socket.id + ' joined channel: ' + channel);
      socket.join(channel);
    });

    // fetch latest/specified stock prices and send to client
    socket.on('stock-prices', function (stockName, period){
      /*fetchPrices(stockName, period, function(err, prices) {
        // error handling here
        if (err) throw err;

        socket.emit('prices', prices); //TODO check if async
        console.log('Prices fetched and sent.')
      });*/
      console.log('Fetching prices...');
    });
  });
};
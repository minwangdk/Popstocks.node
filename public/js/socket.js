// stock-channel joiner and stock-price receiver
var socket = io.connect('http://localhost:3000/price');

socket.on('connect', function(){
  socket.emit('stock-channel', stock.name);
  socket.emit('stock-prices', stock.name);
});

socket.on('notice', function (data) {
  alert(data.hello);
});

socket.on('hello', function (data) {
  alert(data.hello);
});

socket.on('prices', function (data) {
  alert(data[0]);
});
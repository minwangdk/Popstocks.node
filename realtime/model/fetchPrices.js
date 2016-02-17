/**
 * Created by Min on 10-Feb-16.
 */



 var fetchPrices = function (stockName, period, callback){
   if (!mysql) {
     var mysql = require('mysql');

     if (!db) {
       var db = mysql.createConnection({
         host     : 'localhost',
         user     : 'admin',
         password : 'admin',
         database : 'popstocks'
       });
     }
   }



  /* // database query
   var query = select from table where 'id' = stockname and 'period' = period;

   // get latest prices for a stock
   db.query(query, callback);*/

 };
 module.exports = fetchPrices;

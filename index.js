// var http = require("http");
// http.createServer(function(req,res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Aloha world');
// }).listen(process.env.PORT || 3000);

var Calculator = require("./Calculator.js");//.js is optional
var calc = new Calculator();
let result = calc.divide(6,0);
console.log(result);

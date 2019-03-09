
require('./js/keypressHandler').initialize();
// This sets up our keyhandler with some standard functionality
const httpHandler = require('./js/httpHandler');

const http = require('http'); //hyper text transfer protocol: *Circle back to this*
const server = http.createServer(httpHandler.router); //uses method createServer

//Router just directs traffic

const port = 3000; //port - if relevant lookup - this is where packages/resources land 
const ip = '127.0.0.1'; // internet protocol address
server.listen(port, ip); //URL - Listens to port, to see if anyone has request a resource

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);

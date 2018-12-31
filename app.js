// var events = require('events');

// var myEmitter= new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// })

// myEmitter.emit('someEvent', 'event emitted');

// var util = require('util');

// var Person = function(name){
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter)
// var fs = require('fs');

// var readme = fs.readFileSync('README.md', 'utf8');
// console.log(readme);
// fs.unlink('filename.txt');
// fs.rmdirSync('stuff');
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
// myReadStream.pipe(myWriteStream)

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  myReadStream.pipe(res)
});

server.listen(3000, '127.0.0.1');
console.log('hello, now listening to 3000');




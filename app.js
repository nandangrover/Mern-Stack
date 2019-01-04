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
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
// // myReadStream.pipe(myWriteStream)

// var server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html'
//   });
//   fs.createReadStream(__dirname + '/index.html').pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// // console.log('hello, now listening to 3000');
// console.log('test');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.render('index');
})

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})
app.get('/contact', function (req, res) {
  console.log(req.body);
  res.render('contact', {
    qs: req.query
  });
})

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);

  res.render('contact', {
    qs: req.query
  });
})
// app.get('/', function (req, res) {
//   res.send('this is homepage')
// })
app.get('/profile/:id', function (req, res) {
  // res.send('You requested to see a profile with id of ' + req.params.id);
  var data = {
    age: 29,
    job: 'ninja',
    sampleArray: [1, 2, 3, 4, 5, 6, 7]
  };
  res.render('profile', {
    person: req.params.id,
    data: data
  });
})
app.listen(3000);
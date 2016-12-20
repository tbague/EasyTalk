
// importar
var express = require("express");

// instanciar
var app = express();
var https = require("https");
var fs = require("fs");
var io = require("socket.io")(https);

// ruteo
app.use('/', express.static(__dirname + '/public_html'));

/*
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    //console.log('message: ' + msg);
  });
});
*/

var options = {key: fs.readFileSync("192.168.100.13.key"), cert: fs.readFileSync("192.168.100.13.crt")}
var server = https.createServer(options, app);

server.listen(3443, function(){
  console.log("Listening on *:3443");
});


/*
var express = require("express");
var https = require("https");
var fs = require("fs");
var app = express();
app.get("/", function(req, res){
res.send("<h1>hello<h2>");
});
var options = {key: fs.readFileSync("192.168.100.13.key"), cert: fs.readFileSync("192.168.100.13.crt")}
var server = https.createServer(options, app);
console.log("Listen to 3443");
server.listen(3443);
*/
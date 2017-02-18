
// importar
var express = require("express");
var fs = require("fs");
var options = { key: fs.readFileSync('./certs/WebRTC.key'), cert: fs.readFileSync('./certs/WebRTC.crt')};
var app = express();
var https = require("https").Server(options, app);

app.use('/', express.static(__dirname + '/public_html'));

https.listen(3443, function(){
  console.log("Listening on *:3443");
});

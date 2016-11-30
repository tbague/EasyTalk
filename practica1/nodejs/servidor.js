var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  try { res.write(fs.readFileSync('.' + url.parse(req.url).pathname)); }
  catch(err) { console.log(err.message); }
  res.end();
}).listen(8080);

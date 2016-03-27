var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + '/index.html','utf-8');
  var message = 'Dynamic message from the server side';
  html = html.replace('{message}', message);
  res.end(html);
});

server.listen(1337, '127.0.0.1');

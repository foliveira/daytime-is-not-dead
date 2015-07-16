var net = require('net')

net.createServer(function (c) {
  c.end(new Date().toUTCString())
}).listen(13)

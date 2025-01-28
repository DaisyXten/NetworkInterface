const http = require('http');
const server = http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, You came from ${ip}\n');
});

const hostname = process.argv[2] || null;

server.listen(8181, hostname, (err) => {
  if (err) {
    return concole.log(e.stack);
  }

  console.log('Listening to', hostname);
})

const http = require('http');

const hostname = '192.168.0.31';
const port = 42001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n hi this mallikarjuna \n i am working has devops in nodia\n i ahve total 4 years exp in devops \n i created new');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

let http = require ('http');
http
  .createServer ((req, res) => {
    res.writeHead (200, {
      'Content-Type': 'text/plain',
    });
    res.end ('hello shanks');
  })
  .listen (3000, 'localhost');
console.log ('hello');

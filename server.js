var http = require('http');

function requestHandler(req, res) {
  console.log("== Request was received");
  console.log("  - method:", req.method);
  console.log("  - url:", req.url);
  console.log("  - headers:", req.headers);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Content-Type', 'image/jpg');

  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Welcome to our page!</h1>");
  res.write("<p>You requested this page: " + req.url + "</p>");
  res.write("</body>");
  res.write("</html>");

  res.end();

  res.write("</html>");

}

var server = http.createServer(requestHandler);

server.listen(8000, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server is listening on port 8000");
});

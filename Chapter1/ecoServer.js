const http = require("http");

var server = http.createServer(function(request, response, err) {
  if (err) {
    console.log(err);
    response.writeHead(404, { "Content-Type": "text/html" });
  } else {
    console.log(request.method);
    console.log(request.headers);
    console.log(response.statusCode);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body>Hello</body></html>");
  }
  response.end();
});
server.listen(18888, "localhost");

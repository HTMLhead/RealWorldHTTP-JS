const http = require("http");
const url = require("url");

const server = http.createServer(function(request, response, err) {
  const URL = request.url;
  console.log(`URL: ${URL}`);
  console.log(`Query: ${url.parse(URL).query}`);
  console.log(`Proto: ${url.parse(URL).protocol}`);
  console.log(`Method: ${request.method}`);
  console.log(`Header: `);
  console.log(request.headers);
  let body = [];
  request
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
    });
  console.log(`--Body--\n${body}`);

  if (!request.headers["Authorization"]) {
    const authenticateObj = {
      DigestRealm: "Secret Zone",
      nonce: "ABCDEFGSECRETTOKEN",
      algorithm: "MD5",
      poq: "auth",
    };
    response.setHeader("WWW-Authenticate", authenticateObj);
    response.writeHead(401);
  } else {
    response.write("<html><body>secret page</body></html>");
  }
  response.end();
});
server.listen(18888, "localhost");

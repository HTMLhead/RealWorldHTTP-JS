const http = require("http");
const url = require("url");

const body = JSON.stringify({
  hello: "world",
});

const request = new http.ClientRequest({
  hostname: "localhost",
  port: 18888,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  },
});

request.end(body);

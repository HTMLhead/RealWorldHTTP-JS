const http = require("http");
const url = require("url");
const options = {
  hostname: "localhost",
  port: 18888,
  method: "HEAD",
};

function handleResponse(res) {
  try {
    res.on("data", chunk => {});
    res.on("end", () => {
      console.log("statusCode :", res.statusCode);
      console.log("headers", res.headers);
    });
  } catch (err) {
    console.log(err);
  }
}

http
  .request(options, res => {
    handleResponse(res);
  })
  .end();

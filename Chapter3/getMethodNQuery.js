const http = require("http");
const url = require("url");
const options = {
  hostname: "localhost",
  port: 18888,
  query: url.domainToUnicode("hello World"),
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
  .get("http://localhost:18888" + "?" + url.format("search main"), res => {
    handleResponse(res);
  })
  .end();

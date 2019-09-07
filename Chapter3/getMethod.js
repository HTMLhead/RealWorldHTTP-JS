const http = require("http");

const options = {
  hostname: "localhost",
  port: 18888,
};

function handleResponse(res) {
  try {
    let serverData = "";
    res.on("data", chunk => {
      serverData += chunk;
    });
    res.on("end", () => {
      console.log("statusCode :", res.statusCode);
      console.log("headers", res.headers);
      console.log("received server data:");
      console.log(serverData);
    });
  } catch (err) {
    console.log(err);
  }
}

http
  .get(options, res => {
    handleResponse(res);
  })
  .end();

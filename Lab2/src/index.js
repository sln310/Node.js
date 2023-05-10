// index.js

const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const nodemon = require("nodemon");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(`Received request from ${req.headers.host}${path}`);

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello Node!</h1>");
    res.write(`<a href="http://localhost:8000/read-message">Read Message</a>`);
    res.write(
      `<a href="http://localhost:8000/write-message">Write Message</a>`
    );
    res.end();
  }

  if (path === "/write-message") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <form method="post" action="/write-message">
          <label>Enter your message:</label>
          <input type="text" name="message" />
          <button type="submit">Submit</button>
        </form>
      `);
      res.end();
    }

    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const message = querystring.parse(body).message;
        fs.writeFile("message.txt", message, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
          res.writeHead(302, { Location: "/read-message" });
          res.end();
        });
      });
    }
  }

  if (path === "/read-message") {
    fs.readFile("message.txt", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<p>Your message: ${data.toString()}</p>`);
      res.end();
    });
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

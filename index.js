// const http = require("http");
// const routeHandler = require("./routes");

// const server = http.createServer(routeHandler);

// server.listen(3000);

// console.log("node.js server working at port 3000");

const express = require("express");

const app = express();

app.use("/about",(request, response) => {
    response.end("About page");
  });

app.use("/product/:id"/*:dynamic parameter*/,(request,response)=>{

    console.log(request.params); // -> Calling dynamic parameter, keeps as object {id:...}
    response.end("Product detail page ...");

})

app.use("/", (request, response, next) => {
  console.log("Middleware 1");
  next(); // -> Going next middleware, if we dont define next or listen response like 'response.end' app will stack between request and response.
});

app.use("/", (request, response) => {
    console.log("Middleware 2");
    response.end("Middleware 2 finished ...");
  });

app.listen(3000, () => {
  console.log("3000 port started");
});

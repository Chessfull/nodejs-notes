const routeHandler = (request, response) => {
  
    console.log(request.url);
  console.log(request.method);

  // Stream -> Chunk 1, Chunk 2 (Buffer) - Chunk 3, Chunk 4 (Buffer) -> Parsed Data
  const data = [];

  request.on("data", (chunk) => {
    data.push(chunk);
  });

  request.on("end", () => {
    const result = Buffer.concat(data).toString();
    console.log(result);
  });

  response.end();
};

module.exports = routeHandler;

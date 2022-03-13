require('http').createServer((inRequest, inResponse) => {
    inResponse.end("First Node Web server");
}).listen(80);
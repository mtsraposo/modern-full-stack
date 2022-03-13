require('http').createServer((inRequest, inResponse) => {
    const requestModule = require("request");
    requestModule(
        "http://worldtimeapi.org/api/timezone/America/New_York",
        function (inErr, inResp, inBody) {
            inResponse.end(
                `First Node Web Server: ${inBody}`
            );
        }
    );
}).listen(80);
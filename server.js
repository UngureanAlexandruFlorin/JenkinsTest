const http = require("http");

http.createServer((req, res) => {
	res.write("<h1>It's finally working!</h1>");
	res.end();
}).listen(3500);

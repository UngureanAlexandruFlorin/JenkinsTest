const http = require("http");

http.createServer((req, res) => {
	res.write("It's working!");
	res.end();
}).listen(3500);

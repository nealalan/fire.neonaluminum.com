#!/usr/bin/env nodejs
var http = require('http');

http.createServer(
	function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><title>HELLO WORLD, COUNT to 100k</title>');
  		res.write('Hello World!!!!\n');
		for (let i = 0; i <= 100000; i++) {
			res.write(String(i) + ', ');
		}
		res.write('done</HTML>');
		res.end();
	}
	).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');

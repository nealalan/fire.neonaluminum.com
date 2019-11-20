#!/usr/bin/env nodejs
var http = require('http');

http.createServer(
	function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><title>CTA</title>');
  		res.write('Hello World!!!! (from port 8082)\n');
		res.write('done</HTML>');
		res.end();
	}
	).listen(8082, 'localhost');


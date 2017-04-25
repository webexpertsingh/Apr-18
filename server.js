var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 8080;

function serverResponse(request, response){
	// Do Something Here
	//response.end('<h1>it worked singh!! Path hit:'+request.url+'</h1>');

	var urlPasrts = url.parse(request.url);
	//console.log(urlPasrts);
	switch(urlPasrts.pathname) {
		case '/home':
			fs.readFile("demo.html",function(err, data){
				response.end(data);
			});
			break;
		case '/portfolio':
			fs.readFile("portfolio.html",function(err, data){
				response.end(data);
			});
			break;
		case '/':
			response.end('<h1>This is home page<a href="/home">home</a><br><a href="/portfolio">portfolio</a></h1>');
			//do 404
		default:
			response.end('<h1>oops<br><a href="/home">Go home</a></h1>');
			//do 404
	}
}

var server = http.createServer(serverResponse);

server.listen(port, function(){
	// Do something when we start
	console.log('server started!! Listening on: http://localhost:'+port);
});
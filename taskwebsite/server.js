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
		case '/':
			fs.readFile("templates/home.html",function(err, data){
				response.writeHead(200,{'Content-type':'text/html'});
				response.end(data);
			});
			break;
		case '/favfood':
			fs.readFile("templates/favfood.html",function(err, data){
				response.end(data);
			});
			break;
		case '/favcssfw':
			fs.readFile("templates/favcssfw.html",function(err, data){
				response.end(data);
			});
			break;
		case '/favmovie':
			fs.readFile("templates/favmovie.html",function(err, data){
				response.end(data);
			});
			break;
		default:
			response.end('<h1>oops<br><a href="/">Go home</a></h1>');
			//do 404
	}
}

var server = http.createServer(serverResponse);

server.listen(port, function(){
	// Do something when we start
	console.log('server started!! Listening on: http://localhost:'+port);
});
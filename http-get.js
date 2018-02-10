var http = require("http");

var options = {
    host: 'www.jtduncan.me',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Making the request...');

/*
var req = http.request(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
req.end();

or 
*/
http.get(options, function(response){
    response.pipe(process.stdout);
    console.log(response.statusCode);
});
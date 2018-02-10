var http = require("http");
var socketio = require('socket.io')({
  transports  : ['xhr-polling']
});
var fs = require("fs");

var handler = function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end("Error loading index");
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);



io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timeStamp = Date.now();
        console.log("Emitted: " + timeStamp);
        socket.emit("timer", timeStamp);
    }, 200);
    socket.on("submit", function(data){
        console.log("submitted: " + data);
    });
});

app.listen(process.env.PORT, process.env.IP);

console.log('server running');
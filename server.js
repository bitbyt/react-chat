var express = require('express');
var app = express();
var io = require('socket.io')(httpServer);

io.on('connection', function (socket) {
    console.log("Socket Ready");

    // broadcast a user's message to other users
    socket.on('send:mesaage', function (data) {
        socket.broadcast.emit('send:message', {
            text: data.text
        });
    });
});

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 8080);

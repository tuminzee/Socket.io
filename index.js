var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
const port = 3000;
var server = app.listen(port, function(){
    console.log(`listening for requests on port http://localhost:${port}`);
});

// Static files
app.use(express.static('public'));

//Socket Setup
var io = socket(server);
io.on('connection', (socket) => {
    console.log('Socket Connection ' + socket);
})
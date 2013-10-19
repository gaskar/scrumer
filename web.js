/**
 * Created by gaskar on 10/19/13.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);


app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
server.listen(process.env.PORT || 5000);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
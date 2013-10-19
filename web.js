/**
 * Created by gaskar on 10/19/13.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();
var io = require('socket.io').listen(8800);

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
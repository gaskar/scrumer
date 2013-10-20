/**
 * Created by gaskar on 10/19/13.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var server = http.createServer(app);
var dbConf = require('./db');
var mongoose = require('mongoose');
var io = require('socket.io').listen(server);


mongoose.connect(process.env.MONGOLAB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

});


app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file)
})
var cards = require('./app/controllers/cards');

require('./config/routes')(app);


server.listen(process.env.PORT || 3000);


io.sockets.on('connection', function (socket) {
    socket.on('create', function (data) {
        cards.create(data);
        io.sockets.emit('newCard', {});
    });
});
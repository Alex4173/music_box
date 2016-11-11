var express = require('express');
var server = express();
var musicBoxRouter = require('./server/routers/music_box.router.js');
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;
var mongoose = require('mongoose');

mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;

server.use(musicBoxRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});

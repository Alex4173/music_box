var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musicBoxSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  isGood: {
    type: Boolean,
    required: true
  }

});

var MusicBox = mongoose.model('MusicBox', musicBoxSchema);
module.exports = MusicBox;

var express = require('express');
var router = express.Router();
var MusicBox = require('../models/music_box.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/albums', function(req, res){
  MusicBox.find({}, function(err, foundAlbums){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      albums: foundAlbums
    });
  });
});
router.get('/albums/:id', function(req, res){
  MusicBox.find({_id: req.params.id}, function(err, foundAlbums){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      todo: foundAlbums
    });
  });
});
router.post('/albums', function(req, res){
  var todo = new MusicBox(req.body);
  todo.save(function(err){
    if(err){
      // throw err; //don't do this! for now...
      res.status(500).json({
        err: err
      });
    }
    res.status(201).json({
      msg: 'successfully created album'
    });
  });
});
router.put('/albums/:id', function(req, res){
  MusicBox.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldAlbums){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: oldAlbums
    });
  });
});
router.delete('/albums/:id', function(req, res){
  MusicBox.findOneAndRemove({ _id: req.params.id }, function(err, deletedAlbums){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: deletedAlbums
    });
  });
});

module.exports = router;

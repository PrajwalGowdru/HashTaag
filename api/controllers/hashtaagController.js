'use strict';
var mongoose = require('mongoose'),
HashTaag = mongoose.model('hashTaag');

exports.list_stateDetails = function(req, res) {
    HashTaag.find(req.params.stateName, function(err, details) {
      if (err)
        res.send(err);
      res.json(details);
    });
  };


  exports.list_townDetails = function(req, res) {
    HashTaag.find(req.params.townName, function(err, details) {
      if (err)
        res.send(err);
      res.json(details);
    });
  };


  exports.list_districtDetails = function(req, res) {
    HashTaag.find(req.params.districtName, function(err, details) {
      if (err)
        res.send(err);
      res.json(details);
    });
  };
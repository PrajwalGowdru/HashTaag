'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HashTaagSchema = new Schema({
    town: {
    type: String,
    required: 'Kindly enter the name of the town'
  },
  Urban_status: {
    type: String,
    required: 'Kindly enter the name of the urban status'
  },
  State: {
    type: String,
    required: 'Kindly enter the name of the State'
  },
  District: {
    type: String,
    required: 'Kindly enter the name of the District'
  },
  State_code: {
    type: Number,
    required: 'Kindly enter the name of the State code'
  },
  District_code: {
    type: Number,
    required: 'Kindly enter the name of the District code'
  },
});

module.exports = mongoose.model('hashTaag', HashTaagSchema);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IpSchema = new Schema({
  ip_addr: {
    type: String,
    required: ''
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ips', IpSchema);

var urlSchema = new Schema({
  name: {
    type: String,
    default: 'prev'
  },
  number: {
    type: Number,
    default : 0
  }
});

module.exports = mongoose.model('Commands', urlSchema);
'use strict';

var mongoose = require('mongoose'),
  Ips = mongoose.model('Ips'),
  Commands = mongoose.model('Commands');

mongoose.connect('mongodb://localhost/Test');
var db = mongoose.connection;

db.once('open', function() {
  Commands.findOne({name: 'prev'}, function(err, obj) {
    if (err)
      res.send(err);
    if(obj == null)
    {
      var new_doc = new Commands();
      new_doc.save(function(err) {
        if (err)
          res.send(err);          
      });
    }
  });  
});


var ip_obj = {
  'ip_addr' : 0
};

exports.add_ip_to_list = function(req, res) { 
  ip_obj.ip_addr = req.ip;
  var new_Ips = new Ips(ip_obj);
  
  new_Ips.save(function(err, obj) {
    if (err)
      res.send(err);
    res.json({ message: 'ip address was successfully added to Ips list' });
  });

};

exports.return_total_prevs = function(req, res) {
  Commands.findOne({name: 'prev'}, function(err , obj){
    if(err)
      res.send(err);
    res.json(obj.number);
  });
};

var count;
var command_obj = {
  'name' : 'prev',
  'number' : 0
};

exports.return_prev_ip_address = function (req, res){
  Ips.findOne({}, {}, { sort : { 'Created_date' : -1 } }, function(err, obj){
    if (err)
      res.send(err);
    else{
      res.json(obj.ip_addr); 
      Commands.findOne({name: 'prev'}, function(err , obj){        
      if(err)
        res.send(err);
      count = obj.number; 
      count++;
      command_obj.number = count;

      Commands.findOneAndUpdate({name: 'prev'}, command_obj, function(err,obj) {
        if (err)
          res.send(err);
      }); 
      }) 
    }
  });
};


exports.return_statistics = function (req, res) {
  db.db.stats(function(err, stats) {
    if (err)
      res.send(err);
    res.json(stats);
  });
};



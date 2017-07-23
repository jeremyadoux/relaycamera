'use strict';

module.exports = function(Livebox) {

  Livebox.ping = function(req, cb) {
    let ip = req.connection.remoteAddress;
    Livebox.create({
      "ping": ip
    }, function(err, obj) {
      cb(err, obj);
    });


  };

  Livebox.remoteMethod('ping', {
    accepts: {arg: 'req', type: 'object', 'http': {source: 'req'}},
    returns: {arg: 'livebox', type: 'object'}
  });
};

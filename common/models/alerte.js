'use strict';

module.exports = function(Alerte) {
  Alerte.observe('before save', function filterProperties(ctx, next) {
    Alerte.app.models.Email.send({
      to: 'testjadoux@yopmail.com',
      from: 'personne.jeremy@gmail.com',
      subject: 'CEci es tun test',
      text: 'chaussette',
      html: 'my <em>chaussette</em>'
    }, function(err, mail) {
      console.log('email sent!');
      console.log(err);
    });
    next();
  });
};

'use strict';

module.exports = function(Alerte) {
  Alerte.observe('before save', function filterProperties(ctx, next) {
    Alerte.app.models.Email.send({
      to: 'jeremy.adoux@gmail.com',
      from: 'personne.jeremy@gmail.com',
      subject: 'Nouvelle introduction dans le garage',
      text: 'Une nouvelle introduction dans le garage attention',
      html: '<em>Une nouvelle introduction dans le garage attention</em>'
    }, function(err, mail) {
      console.log('email sent!');
      console.log(err);
    });
    next();
  });
};

module.exports = function(app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create(
    app.get('adminuser')
    , function(err, users) {
    if (err) {
      console.log(err);
      return;
    }
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) {
        console.log(err);
        return;
      }


      // Make admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
  });
};

const users = require('./users/users.service.js');
const comments = require('./comments/comments.service.js');
const retros = require('./retros/retros.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(comments);
  app.configure(retros);
};

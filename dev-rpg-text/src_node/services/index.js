const gSkill = require('./g-skill/g-skill.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(gSkill);
};

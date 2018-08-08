// Initializes the `g_skill` service on path `/g-skill`
const createService = require('feathers-mongoose');
const createModel = require('../../models/g-skill.model');
const hooks = require('./g-skill.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/g-skill', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('g-skill');

  service.hooks(hooks);
};

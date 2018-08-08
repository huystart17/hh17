const assert = require('assert');
const app = require('../../src_node/app');

describe('\'g_skill\' service', () => {
  it('registered the service', () => {
    const service = app.service('g-skill');

    assert.ok(service, 'Registered the service');
  });
});

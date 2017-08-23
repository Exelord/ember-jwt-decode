import emberJwtDecode from 'ember-jwt-decode';
import { module, test } from 'qunit';

module('Unit | Index | ember jwt decode');

test('it decodes JWT token', function(assert) {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXhlbG9yZCIsInBhY2thZ2UiOiJFbWJlciBKV1QgRGVjb2RlIn0.srNuuHlMDG0GWXuvo-GRb1wvacPSWLABgBGZaEMKpVg';

  let result = emberJwtDecode(token);
  assert.deepEqual(result, { name: "Exelord", package: "Ember JWT Decode" });
});

/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-jwt-decode',

  included(app) {
    this._super.included(app);

    app.import('node_modules/jwt-decode/build/jwt-decode.min.js', {
      using: [
        { transformation: 'amd', as: 'jwt-decode' }
      ]
    });
    app.import('vendor/ember-jwt-decode/shims/jwt-decode.js');
  }
};

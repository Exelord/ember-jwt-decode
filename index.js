/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-jwt-decode',

  included(app) {
    this._super.included(app);

    app.import('vendor/ember-jwt-decode/jwt-decode.js', {
      using: [
        { transformation: 'amd', as: 'jwt-decode' }
      ]
    });
    app.import('vendor/ember-jwt-decode/shims/jwt-decode.js');
  },

  jwtDecodePath() {
    return path.join(this.app.project.nodeModulesPath, 'jwt-decode', 'build');
  },

  treeForVendor(tree) {
    let trees = [tree];

    trees.push(new Funnel(this.jwtDecodePath(), {
      destDir: 'ember-jwt-decode',
      files: ['jwt-decode.js']
    }));

    return mergeTrees(trees);
  },
};

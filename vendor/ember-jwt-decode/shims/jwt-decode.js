/* eslint-env node */
define('jwt-decode', [], function() {
  'use strict';

  var jwtDecode;

  if (typeof FastBoot != 'undefined') {
    jwtDecode = FastBoot.require('jwt-decode');
  } else {
    jwtDecode = self['jwt_decode'];
    delete self['jwt_decode'];
  }

  return {
    'default': jwtDecode
  };
});

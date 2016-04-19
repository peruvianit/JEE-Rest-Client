/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Configurazione Resource Provider
 * Create : 12.04.2016 16.20
 */

'use strict';

jeeApiRestApp.config(['$resourceProvider','$httpProvider', function($resourceProvider,$httpProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
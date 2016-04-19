
/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Creazione file di configurazione Routers
 * Create : 12.04.2016 16.20
 */

'use strict';

jeeApiRestApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login',
						{templateUrl: 'views/app.views.login.html',
						 controller: 'LoginController'		
					    })
				  .otherwise({templateUrl: '/error404.html'});
}]);
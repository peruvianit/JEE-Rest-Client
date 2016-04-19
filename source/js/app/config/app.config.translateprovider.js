
/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Creazione file di configurazione Multilingua
 * Create : 12.04.2016 16.25
 */


 /*** File Configurazione Applicazione AngularJS ***/

'use strict';

jeeApiRestApp.config(function($translateProvider){
	$translateProvider.fallbackLanguage(['it','en']);
	$translateProvider.preferredLanguage('it');
	$translateProvider.useSanitizeValueStrategy('sanitize');

	$translateProvider.useStaticFilesLoader({		
		prefix: '/local/locale-',
		suffix: '.json'
	});	
});
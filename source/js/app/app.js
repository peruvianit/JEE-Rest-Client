
/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Creazione file di configurazione per AngularJS
 * Create : 11.04.2016 11.20
 */


 /*** File Configurazione Applicazione AngularJS ***/

'use strict';

var jeeApiRestApp = angular.module('jeeApiRest',['ngRoute','pascalprecht.translate','ngSanitize','notyModule','jcs-autoValidate','ui.gravatar','ngResource','LocalStorageModule']);

/*jeeApiRestApp.run(function(browserHelperService){
	browserHelperService.controlCompatibility();
});*/

jeeApiRestApp.run([
		'browserHelperService',
        'bootstrap3ElementModifier',
        'defaultErrorMessageResolver',
        function (browserHelperService,bootstrap3ElementModifier,defaultErrorMessageResolver) {
        	browserHelperService.controlCompatibility();
        	defaultErrorMessageResolver.setI18nFileRootPath('local');	
        	defaultErrorMessageResolver.setCulture('it-IT');
            bootstrap3ElementModifier.enableValidationStateIcons(true);
       }]);

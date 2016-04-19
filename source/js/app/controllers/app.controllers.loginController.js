/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Creazione Controller Login
 * Create : 11.04.2016 11.43
 */
 
'use strict';

jeeApiRestApp.controller('LoginController', LoginController);

function LoginController(APP_CONSTANT,noty,authService,localStorageService){
	var vm = this;

	vm.utente = {
		"typeAccessAccount":"BASIC_FORM"
	};

	vm.version = APP_CONSTANT.VERSION;

	vm.login = function(){
		authService.save(vm.utente)
		.$promise
		.then(function(response){
			localStorageService.set('token', response.token);
			console.log(response);
		})
		.catch(function(response){
			console.log(response);
		});
	}
}
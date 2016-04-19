/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Servizio per il controllo della compatibilita del browser
 * Create : 14.04.2016 10.45
 */

'use strict';

jeeApiRestApp.factory('authService', authService);

function authService(APP_CONSTANT,noty,$resource){
    var resourceUrl = APP_CONSTANT.API_URL + 'user/authenticate';

    return $resource(resourceUrl, 
            {},//parameters
            {
                update: {
                      method: 'PUT'
                }
                 
            });
};

/**
 * Created with SublimeText.
 * User: s.arellano
 * Description : Servizio per il controllo della compatibilita del browser
 * Create : 13.04.2016 14.38
 */

'use strict';

jeeApiRestApp.service('browserHelperService', browserHelperService);

function browserHelperService(APP_CONSTANT){
	this.controlCompatibility = function (){
		if (!window.localStorage && !window.sessionStorage){
                alert("I'm sorry, Local Storage and Session Storage are not supported in your browser. Upgrade it or use another browser like Firefox, Chrome or Safari.");
        }

        if (this.checkBrowser()) {
            if (this.checkCookie()) {
                // START CODE
                /** www startup **/ 
            }
            else {
                $("#content").append("<img src='css/img/logo.jpg' width='600'/>");
                alert("I'm sorry, cca requires cookies enabled.")
            }
        }
        else {
            $("#content").append("<img src='css/img/logo.jpg' width='600'/>");
            alert("I'm sorry, cca is not compliant with your IE version. Upgrade it or use another browser like Firefox, Chrome or Safari.")
        }

        var xhr = this.createCORSRequest('GET', APP_CONSTANT.CORS_REQUEST_TEST);
		if (!xhr) {
		  throw new Error('CORS not supported');
		}
	};

	//check for browser compatibility
	this.checkBrowser = function () {
	        var ver = -1; // Return value assumes failure.
	        var ret = true;
	        if (navigator.appName == 'Microsoft Internet Explorer') {
	            var ua = navigator.userAgent;
	            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	            if (re.exec(ua) != null)
	            ver = parseFloat(RegExp.$1);
	    }
	    if (ver > -1) {
	        if (ver < 8.0)
	            ret = false;
	    }
	    return ret;
	}

	//check for cookie enabled
	this.checkCookie = function () {
	    var cookieEnabled = (navigator.cookieEnabled) ? true : false
	    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
	        document.cookie = "testcookie";
	        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
	    }
	    return (cookieEnabled) ? true : false;
	}

	this.createCORSRequest = function (method, url) {
	    var xhr = new XMLHttpRequest();
	    if ("withCredentials" in xhr) {

	        // Check if the XMLHttpRequest object has a "withCredentials" property.
	        // "withCredentials" only exists on XMLHTTPRequest2 objects.
	        xhr.open(method, url, true);

	    } else if (typeof XDomainRequest != "undefined") {

	        // Otherwise, check if XDomainRequest.
	        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
	        xhr = new XDomainRequest();
	        xhr.open(method, url);

	    } else {

	        // Otherwise, CORS is not supported by the browser.
	        xhr = null;

	    }
	    return xhr;
	}
};
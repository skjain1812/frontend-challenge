'use strict';

//declare modules
angular.module('countryApp', []);
angular.module('currencyApp', []);

angular.module('hiringApp', [
                               'countryApp',
                               'currencyApp',
                               'ngRoute'
                               ])
                               .config(['$routeProvider', function ($routeProvider) {
                            	   $routeProvider
                            	   .when('/country', {
                            		   controller: 'countryCtrl',
                            		   templateUrl: 'country.html'
                            	   }) 
                            	   .when('/currency', {
                            		   controller: 'currencyCtrl',
                            		   templateUrl: 'currency.html'
                            	   })
                            	   .otherwise({ redirectTo: '/country' });
                               }]);
'use strict';

/* App Module */

var cawSite = angular.module('cawSite',[
    'ngRoute',
    'cawControllers'
]);

cawSite.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'mainCtrl'
        });
        
        $locationProvider.html5Mode(false).hashPrefix('!');
        
    }]);
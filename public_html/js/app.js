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
        $routeProvider.
                when('/projects', {
                    templateUrl: 'partials/projects.html',
                    controller: 'projCtrl'
        });
        $routeProvider.
                when('/photography', {
                    templateUrl: 'partials/photography.html',
                    controller: 'photoCtrl'
        });
        $routeProvider.
                when('/design', {
                    templateUrl: 'partials/design.html',
                    controller: 'designCtrl'
        });
        
        $locationProvider.html5Mode(false).hashPrefix('!');
        
    }]);
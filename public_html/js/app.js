'use strict';

/* App Module */

var cawSite = angular.module('cawSite', [
    'ngRoute',
    'cawControllers',
    'BlogServices'
]);

cawSite.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        // can either use $routeProvider for each template or or simply 
        // type }).when after each route

        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'mainCtrl'
                }).when('/projects', {
                    templateUrl: 'partials/projects.html',
                    controller: 'projCtrl'
                }).when('/photography', {
                    templateUrl: 'partials/photography.html',
                    controller: 'photoCtrl'
                }).when('/design', {
                    templateUrl: 'partials/design.html',
                    controller: 'designCtrl'
                }).when('/contact', {
                    templateUrl: 'partials/contact.html',
                    controller: 'contactCtrl'
                }).when('/blog', {
                    templateUrl: 'partials/blog.html',
                    controller: 'blogCtrl'
                }).when('/blogPost/:id', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'blogViewCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');

    }]);
'use strict';

/* main site controllers */

var cawControllers = angular.module('cawControllers', []);

cawControllers.controller('mainCtrl', ['$scope', '$location',
    function mainCtrl($scope, $location){
        $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
        
}]);

cawControllers.controller('projCtrl', ['$scope', '$location',
    function projCtrl($scope){
        
}]);

cawControllers.controller('photoCtrl', ['$scope', '$location',
    function photoCtrl($scope){
        $scope.pageinclude = "partials/family.html";
        $scope.family = function(){
            $scope.pageinclude = "partials/family.html";
        };
        $scope.portrait = function(){
            $scope.pageinclude = "partials/portrait.html";
        };
        $scope.landscape = function(){
            $scope.pageinclude = "partials/landscape.html";
        };
        $scope.itemPhoto = function(){
            $scope.pageinclude = "partials/itemPhoto.html";
        };
}]);

cawControllers.controller('designCtrl', ['$scope', '$location',
    function designCtrl($scope){
        
}]);
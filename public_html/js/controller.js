'use strict';

/* controllers */

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
        
}]);

cawControllers.controller('designCtrl', ['$scope', '$location',
    function designCtrl($scope){
        
}]);
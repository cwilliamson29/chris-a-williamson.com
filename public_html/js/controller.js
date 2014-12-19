'use strict';

/* main site controllers */

var cawControllers = angular.module('cawControllers', []);

cawControllers.controller('blogCtrl', ['$scope', '$location',
    function blogCtrl($scope) {
        $scope.blogList = [
            {
                "_id": 1,
                "date": 1400623623107,
                "introText": "This a blog post about Angular JS. We will cover how to build",
                "blogText": "This a blog post about Angular JS. We will cover how to build a blog and how to add comments to the blog post."
            },
            {
                "_id": 2,
                "date": 1400623623107,
                "introText": "In this blog post we will learn how to buld applications based on REST",
                "blogText": "In this blog post we will learn how to buld applications based on REST web services that contain most of the business logic needed for the application."
            }
        ];
    }]);

cawControllers.controller('blogViewCtrl', ['$scope', '$routeParams',
    function blogViewCtrl($scope, $routeParams) {
        var blogId = $routeParams.id;
        var blog1 = {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngularJS. We will cover how to build",
            "blogText": "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post.",
            "comments" :[
                {
                    "commentText" : "Very good post. I love it."
                },
                {
                    "commentText" : "When can we learn services."
                }
                
            ]
        };

        var blog2 = {
            "_id": 2,
            "date": 1400267723107,
            "introText": "In this blog post we will learn how to build applications based on REST",
            "blogText": "In this blog post we will learn how to build applications based on REST web services that contain most of the business logic needed for the application.",
            "comments" :[
                {
                    "commentText" : "REST is great. I want to know more."
                },
                {
                    "commentText" : "Will we use Node.js for REST services?"
                }
                
            ]
        };
        
        if(blogId === '1'){
            $scope.blogEntry = blog1;
        }else if(blogId === '2'){
            $scope.blogEntry = blog2;
        }
}]);

cawControllers.controller('mainCtrl', ['$scope', '$location',
    function mainCtrl($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }]);

cawControllers.controller('projCtrl', ['$scope', '$location',
    function projCtrl($scope) {

    }]);

cawControllers.controller('photoCtrl', ['$scope', '$location',
    function photoCtrl($scope) {
        $scope.pageinclude = "partials/family.html";
        $scope.family = function () {
            $scope.pageinclude = "partials/family.html";
        };
        $scope.portrait = function () {
            $scope.pageinclude = "partials/portrait.html";
        };
        $scope.landscape = function () {
            $scope.pageinclude = "partials/landscape.html";
        };
        $scope.itemPhoto = function () {
            $scope.pageinclude = "partials/itemPhoto.html";
        };
    }]);

cawControllers.controller('designCtrl', ['$scope', '$location',
    function designCtrl($scope) {

    }]);

cawControllers.controller('contactCtrl', ['$scope', '$location', '$http',
    function contactCtrl($scope, $http) {
        $scope.success = false;
        $scope.error = false;
        $scope.send = function () {

            var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
                    '<div>Email: ' + $scope.user.email + '</div>' +
                    '<div>Message: ' + $scope.user.body + '</div>' +
                    '<div>Date: ' + (new Date()).toString() + '</div>';
            $http({
                url: 'https://api.postmarkapp.com/email',
                method: 'POST',
                data: {
                    'From': 'noreply@chris-a-williamson.com',
                    'To': 'chriswill0629@gmail.com',
                    'HtmlBody': htmlBody,
                    'Subject': 'You have a new email from Chris-A-Williamson.com'
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
                }
            }).
                    success(function (data) {
                        $scope.success = true;
                        $scope.user = {};
                    }).
                    error(function (data) {
                        $scope.error = true;
                    });
        };
    }]);

            
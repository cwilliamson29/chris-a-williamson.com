'use strict';

// Services

var BlogServices = angular.module('BlogServices',['ngResource']);

BlogServices.factory('BlogPost', ['$resource',
    function($resource){
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList", {},{
            get: {method: 'GET', cache: false, isArray: true}
            //save: {method: 'POST', cache: false, isArray: false},
            //update: {method: 'PUT', cache: false, isArray: false},
            //delete: {method: 'DELETE', cache: false, isArray: false}
        });
}]);

'use strict';


// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ng',
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MyCtrl1'});
  $routeProvider.when('/rooms', {templateUrl: 'partials/rooms.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);


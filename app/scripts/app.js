'use strict';

/**
 * @ngdoc overview
 * @name dohiappApp
 * @description
 * # dohiappApp
 *
 * Main module of the application.
 */
angular
  .module('dohiappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'apiApp',
	'mapsApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'apiCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'apiCtrl'
      })
      .when('/path/:pathId', {
        templateUrl: 'views/path_detail.html',
        controller: 'apiCtrl'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
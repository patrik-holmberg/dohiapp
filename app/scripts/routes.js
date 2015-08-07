'use strict';

angular
  .module('dohiappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'apiMod',
	'mapMod',
	'flyout',
	'navigation',
	'appCtrl'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/de', {
        templateUrl: 'views/main.html',
        controller: 'apiCtrl'
      })
      .when('/en', {
        templateUrl: 'views/main.html',
        controller: 'apiCtrl'
      })
      .when('/sv', {
        templateUrl: 'views/main.html',
        controller: 'apiCtrl'
      })
      .when('/:pathLoc/about', {
        templateUrl: 'views/about.html',
        controller: 'apiCtrl'
      })
      .when('/:pathLoc/path/:pathId', {
        templateUrl: 'views/detail.html',
        controller: 'apiCtrl'
      })
      .otherwise({
        redirectTo: '/404.html'
      });
  });
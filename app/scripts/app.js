'use strict';

var appControllers = angular.module('appCtrl', []);

appControllers.controller('HeaderCtrl', ['$scope',
  function ($scope) {
    $scope.items = [
      {href: '/sv', name: 'Swedish'},
      {href: '/en', name: 'English'},
      {href: '/de', name: 'Deutsch'},
    ];
  }]);
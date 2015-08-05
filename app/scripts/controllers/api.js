'use strict';

var apiApp = angular.module('apiApp', []);

apiApp.controller('apiCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('https://forward-byte-711.appspot.com/read/Test/Development/sv').success(function(data) {
	    $scope.pathId = $routeParams.pathId;
		$scope.paths = data;
    });
  }]);
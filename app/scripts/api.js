'use strict';

var apiMod = angular.module('apiMod', []);

apiMod.controller('apiCtrl', ['$scope', '$http', '$routeParams', '$location',
  function($scope, $http, $routeParams, $location) {
    $scope.pathLoc = $location.path().substring(0,3);
    $http.get('https://forward-byte-711.appspot.com/read/Test/Development'+$scope.pathLoc).success(function(data) {
	    $scope.pathId = $routeParams.pathId;
		$scope.paths = data;
    });
  }]);
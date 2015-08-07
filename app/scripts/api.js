'use strict';

var apiMod = angular.module('apiMod', []);

apiMod.controller('apiCtrl', ['$scope', '$http', '$routeParams', '$location',
  function($scope, $http, $routeParams, $location) {
    $http.get('https://forward-byte-711.appspot.com/read/Test/Development'+$location.path().substring(0,3)).success(function(data) {
	    $scope.pathId = $routeParams.pathId;
	    $scope.pathLoc = $location.path().substring(0,3);
		$scope.paths = data;
    });
  }]);
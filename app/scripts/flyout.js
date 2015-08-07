'use strict';

var flyout = angular.module('flyout', []);

flyout.directive('flyout', [function () {
  return {
    restrict: 'E',
    templateUrl: 'views/flyout.html',
    scope: {
      menuItems: '=items'
    },
    controller: function($scope) {

      $scope.overlay = {
        open: false,
        toggle: function() {
          $scope.overlay.open = !$scope.overlay.open;
        }
      };
    }
  };
}]);
'use strict';

var navigation = angular.module('navigation', []);

navigation.directive('menuFlyout', [function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/flyout.html',
    controller: function($scope, $location, MenuItems) {
	  $scope.isActive = function (viewLocation) {
	       var active = (viewLocation === $location.path());
	       return active;
	  };
      $scope.menuItems = MenuItems;
      $scope.overlay = {
        open: false,
        toggle: function() {
          $scope.overlay.open = !$scope.overlay.open;
        }
      };
    }
  };
}]);

navigation.factory('MenuItems', function() {
  var items = [
    {href: '/sv', name: 'Swedish'},
    {href: '/en', name: 'English'},
    {href: '/de', name: 'Deutsch'},
  ];

  return items;
});
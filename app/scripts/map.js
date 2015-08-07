'use strict';

var i;
var google;
var cities = [];

angular.module('mapMod', [])
.controller('MapCtrl', function ($scope, $http, $routeParams, $location) {

    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(63.825561, 20.262561),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info) {
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.place_position.lat, info.place_position.lng),
            title: info.place_name
        });
        marker.content = '<div class="infoWindowContent"><img class="image" src="' + info.place_image + '" />' + info.place_info + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h3 class="title">' + marker.title + '</h3>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
    };

    $http.get('https://forward-byte-711.appspot.com/read/Test/Development'+$location.path().substring(0,3)).success(function(data) {
        data.paths[$routeParams.pathId].places.map(function(item) {
            createMarker(item);
        });
        
        var cityPathCoordinates = data.paths[$routeParams.pathId].path_polyline[0].map(function(item) {
			return new google.maps.LatLng(item.lat, item.lng);
		});
	
		var cityPath = new google.maps.Polyline({
			path: cityPathCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
	
		cityPath.setMap($scope.map);
		
    });
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

});
function placesState($stateProvider) {
  $stateProvider
    .state('places', {
      parent: 'app',
      url: '/places?location&radius&type',
      resolve: {
        places: function($stateParams, LocationFactory, PlacesFactory) {
          if (!$stateParams.location) {
            return LocationFactory.geolocate()
            .then(function(coordinates) {
              var searchParams = angular.copy($stateParams);
              searchParams.location = coordinates;
              return PlacesFactory.searchPlaces(searchParams);
            })
          }

          return PlacesFactory.searchPlaces($stateParams);
        }
      },
      views: {
        main: {
          component: 'places',
        }
      }
    });
}

module.exports = placesState;

'use strict';

angular.module('project1', ['ui.router', 'project1.common'])
  .constant('ENDPOINT', 'http://localhost:3000/api')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.tmpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('explore', {
        url: '/explore',
        templateUrl: 'app/explore/explore.tmpl.html',
        controller: 'ExploreCtrl',
        controllerAs: 'explore',
        resolve: {
          places: function (PlacesModel) {
            return PlacesModel.defaultSearch();
          }
        }
      })
      .state('explore.schedule', {
        // url: '/schedule',
        templateUrl: 'app/schedule/schedule.tmpl.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'schedule'
      });
  });

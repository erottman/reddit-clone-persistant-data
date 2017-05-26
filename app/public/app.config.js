(function() {
  'use strict';

  angular.module('reddit').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('list', {
        url: '/',
        template: `<h1>testing<h1>`,
        controller: function () {
          console.log("list ontroller is working");
        }
      })
  }

}());

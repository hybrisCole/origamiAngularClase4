'use strict';

/**
 * @ngdoc function
 * @name origamiTestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the origamiTestingApp
 */
angular.module('origamiTestingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'PureCSS'
    ];
  });

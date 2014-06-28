'use strict';

/**
 * @ngdoc function
 * @name origamiTestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the origamiTestingApp
 */
angular.module('origamiTestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sumar = function(valor1, valor2){
      console.log(valor1 + valor2);
      return valor1 + valor2;
    };
  });

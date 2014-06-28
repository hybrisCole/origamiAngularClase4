'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('origamiTestingApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings).toContain('AngularJS');
    expect(scope.awesomeThings.length).toBe(4);
  });

  it('Defunucon del segundo test', function () {
    expect(scope.awesomeThings[2]).toEqual('Karma');
  });


});

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('origamiTestingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('Deberia retornar una suma correcta', function () {
    var resultadoSuma = scope.sumar(10,5);
    expect(resultadoSuma).toBe(15);
  });

  it('Deberia retornar una suma correcta, verificar que un valor sea mayor', function () {
    var resultadoSuma = scope.sumar(29,13);
    var compararCon = 50;
    expect(compararCon).toBeGreaterThan(resultadoSuma);
  });

  it('Deberia retornar una suma correcta, verificar que un valor sea mayor', function () {
    var resultadoSuma = scope.sumar(29,13);
    var compararCon = 50;
    expect(compararCon).toBeGreaterThan(resultadoSuma);
  });

  it('Despues de hacer una suma, una variable deberia tener su valor definido', function () {
    var resultadoSuma;
    expect(resultadoSuma).not.toBeDefined();
    resultadoSuma = scope.sumar(-1,-10);
    expect(resultadoSuma).toBeDefined();
  });



  /*
  * 1. Hacer en el controlador de Main una funcion que sume dos variables
  *    Y que retorne el valor.
  *
  * 2. Hacer tres tests usando las funciones que estan en la pagina de Jasmine
  *
  * 3. Hacer un servicio que retorne un contacto basado en identificador,
  *    que la informacion este en un array
  *
  * 4. Hacer un unit testing que pruebe cuando uno envie un identificador que
  *    no existe, cuando si existe un identificador, y enviar un identificador
  *    vacio.
  *
  * **/
});

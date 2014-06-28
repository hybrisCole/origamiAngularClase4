'use strict';

describe('Service: ContactoFactory', function () {

  // load the service's module
  beforeEach(module('origamiTestingApp'));

  // instantiate service
  var ContactoFactory;
  beforeEach(inject(function (_ContactoFactory_) {
    ContactoFactory = _ContactoFactory_;
  }));

  it('should do something', function () {
    expect(!!ContactoFactory).toBe(true);
  });

  it('Deberia Imprir a Alberto', function () {
    var albertoObj;
    albertoObj = ContactoFactory.buscarPorId('12312333');
    expect(albertoObj.nombre).toBe('Alberto');
  });

  it('Deberia Retornar Undefined cuando enviamos un id que no existe', function () {
    var contactoObject;
    contactoObject = ContactoFactory.buscarPorId('-12314892347');
    expect(contactoObject).not.toBeDefined();
  });

  it('Deberia Retornar un objeto vacio cuando no enviamos un id', function () {
    var contactoObject;
    contactoObject = ContactoFactory.buscarPorId();
    expect(contactoObject).toEqual({});
  });

  it('Deberia ser el mismo objeto de Alberto', function () {
    var albertoObj;
    albertoObj = ContactoFactory.buscarPorId('12312333');
    expect(albertoObj).toEqual({
      id:'12312333',
      nombre:'Alberto',
      edad:29
    });
  });

});

'use strict';

/**
 * @ngdoc service
 * @name origamiTestingApp.ContactoFactory
 * @description
 * # ContactoFactory
 * Factory in the origamiTestingApp.
 */
angular.module('origamiTestingApp')
  .factory('ContactoFactory', function () {
    // Service logic
    // ...

    var contactos = [
      {
        id:'12312333',
        nombre:'Alberto',
        edad:29
      },
      {
        id:'4234234',
        nombre:'Andres',
        edad:28
      },
      {
        id:'789798',
        nombre:'Adrian',
        edad:16
      }
    ];

    var meaningOfLife = 42;

    // Public API here
    return {
      buscarPorId: function (id) {
        if(id){
          return _.find(contactos, { 'id': id });
        }else{
          return {};
        }

      }
    };
  });

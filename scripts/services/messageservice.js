'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:3000');
      },

      addMessage: function ( username, message ) {
        return $http.post('http://localhost:3000', { username: username, message: message });
      }
    };
  });

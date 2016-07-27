'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function (username, message ) {
      if (username && message) {
        console.log("hit");
        messageService.addMessage(username, message).then(function ( response ) {
          $scope.messages = response.data;
          console.log(username, message);
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

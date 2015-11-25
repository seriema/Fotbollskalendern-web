'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MatchctrlCtrl
 * @description
 * # MatchctrlCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MatchCtrl', function ($scope, $location, MatchService) {
      $scope.match = {};
      var url = $location.search().url;
      MatchService.getGameByUrl(url).then(function(data){
         $scope.match = data.fixture;
      });

      $scope.teamInfo = function (game, isHomeTeam) {
          if(isHomeTeam){
              $location.path('team').search('url', game._links.homeTeam.href);
          }
          else{
              $location.path('team').search('url', game._links.awayTeam.href);
          }
      };

  });

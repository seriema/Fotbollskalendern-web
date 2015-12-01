'use strict';

angular.module('fotbollskalendernWebApp')
  .controller('LeagueCtrl', function ($scope, $location, DataService) {

      $scope.table = {};
      var url = $location.search().url;
      DataService.getDataFromUrl(url + 'leagueTable').then(function(data){
          $scope.table = data;
      });

  });

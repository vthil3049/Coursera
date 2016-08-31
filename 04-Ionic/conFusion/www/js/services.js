'use strict';

angular.module('conFusion.services', ['ngResource'])
.service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

    return $resource(baseURL + "dishes/:id", null, {
        'update': {
            method: 'PUT'
        }
    });

}])
.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

  this.query = function(){
    return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
  };

  return $resource(baseURL+"leadership/:id");

}])
.factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {


  return $resource(baseURL+"feedback/:id");

}])
.factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL, $localStorage) {
  var favFac = {};
  var favorites = [];

  favFac.addToFavorites = function (index) {
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].id == index)
      return;
    }
    favorites.push({id: index});
    $localStorage.storeObject('favorites',favorites); //add to favorites
    console.log('Storing favorites', favorites);
  };

  favFac.deleteFromFavorites = function (index) {
      for (var i = 0; i < favorites.length; i++) {
          if (favorites[i].id == index) {
              favorites.splice(i, 1);
          }
      }
      $localStorage.storeObject('favorites',favorites); //update the favortites list
      console.log('Storing favorites', favorites);
  };

  favFac.getFavorites = function () {
      favorites = $localStorage.getObject('favorites','{}');
      console.log('Retrieving favorites', favorites);
      return favorites;
  };

  return favFac;
}])
.factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

            return $resource(baseURL + "promotions/:id");

}])
.factory('$localStorage', ['$window', function($window) {
  return {
    store: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    storeObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key,defaultValue) {
      return JSON.parse($window.localStorage[key] || defaultValue);
    }
  }
}])
;

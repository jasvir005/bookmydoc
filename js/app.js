// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',"ngStorage"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    document.addEventListener('deviceready', function() {
       setTimeout(function() {
            navigator.splashscreen.hide();
        }, -1);
  //navigator.splashscreen.hide();
});
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
.state('app.bmd-home', {
  cache: false,
      url: '/bmd-home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.bmd-blocked', {
  cache: false,
      url: '/bmd-blocked',
      views: {
        'menuContent': {
          templateUrl: 'templates/blocked.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.listing', {
  cache: false,
      url: '/listing/:selectionId',
      views: {
        'menuContent': {
          templateUrl: 'templates/listing.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.search', {
  cache: false,
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'searchCtrl'
        }
      }
    })
.state('app.doctor', {
  cache: false,
      url: '/doctor',
      views: {
        'menuContent': {
          templateUrl: 'templates/search_result.html',
          controller: 'searchCtrl'
        }
      }
    })
.state('app.appointment', {
  cache: false,
      url: '/appointment/:apnt_date_time',
      views: {
        'menuContent': {
          templateUrl: 'templates/appointment.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.my_booking', {
  cache: true,
      url: '/my_booking',
      views: {
        'menuContent': {
          templateUrl: 'templates/my_booking.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.search_list', {
  cache: false,
      url: '/search_list/:search_text',
      views: {
        'menuContent': {
          templateUrl: 'templates/search_listing.html',
          controller: 'BMDCtrl'
        }
      }
    })
.state('app.test', {
  cache: false,
      url: '/test',
      views: {
        'menuContent': {
          templateUrl: 'templates/test.html',
          controller: 'BMDCtrl'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bmd-home');
});

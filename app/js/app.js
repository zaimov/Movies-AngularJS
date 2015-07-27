var app = angular.module('MainApp', ['ui.sortable', 'ngStorage', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/favoriteMovies.html'
            })
            .when('/details/', {
                templateUrl: 'templates/moviesDetails.html'
            })
            .when('/searchMovies/', {
                templateUrl: 'templates/searchMovies.html'
            })
            .otherwise({redirectTo: '/'})
    });
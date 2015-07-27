app.directive('searchMovies', function () {
    return {
        restrict: 'EA',
        templateUrl: 'templates/directives/search-movies.html',
        replace: true
    }
});
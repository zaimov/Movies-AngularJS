app.controller('MainController', function ($scope, $routeParams, $localStorage, $sessionStorage, moviesData) {
    $scope.author = 'Denislav Zaimov';
    $scope.year = '2015';
    $scope.greyBackgroundCss = 'grey-background';

    moviesData.getMovies().then(function (data) {
        if ($localStorage.allMovies === undefined) {
            $scope.allMovies = data.sort(sortByName);
        } else {
            $scope.allMovies = $localStorage.allMovies;
        }
    });

    if ($localStorage.favoriteMovies === undefined) {
        $scope.favoriteMovies = [];
    } else {
        $scope.favoriteMovies = $localStorage.favoriteMovies;
    }

    $scope.transferToFavoriteMovies = function (index) {
        $scope.favoriteMovies.push($scope.allMovies[index]);
        $scope.allMovies.splice(index, 1);
        $localStorage.allMovies = $scope.allMovies;
        $localStorage.favoriteMovies = $scope.favoriteMovies;
    };

    $scope.transferToAllMovies = function (index) {
        sortAllMovies($scope.favoriteMovies[index]);
        $scope.favoriteMovies.splice(index, 1);
        $localStorage.allMovies = $scope.allMovies;
        $localStorage.favoriteMovies = $scope.favoriteMovies;
    };

    $scope.getIndex = function (index) {
        $scope.movieInfo = [];
        $scope.movieInfo.push($scope.allMovies[index]);
        $localStorage.movieInfo = $scope.movieInfo;
    };

    $scope.detailsFirstLoad = function () {
        $scope.movieInfo = [];
        $scope.movieInfo.push($scope.allMovies[0]);
        $localStorage.movieInfo = $scope.movieInfo;
    };

    function sortAllMovies (movie) {
        for (var i = 0; i < $scope.allMovies.length; i++) {
            if (movie.title < $scope.allMovies[i].title) {
                $scope.allMovies.splice(i, 0, movie);
                break;
            } else if (i === $scope.allMovies.length - 1) {
                $scope.allMovies.push(movie);
                break;
            }
        }
    }

    function sortByName(a, b) {
        var aName = a.title;
        var bName = b.title;
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }

    (function () {
        if ($scope.movieInfo == undefined) {
            $scope.movieInfo = $localStorage.movieInfo;
        }
    })();

   /* $scope.upVoteRating = upVoteRating;   Rating for movies
    $scope.downVoteRating = downVoteRating;

    function upVoteRating (movie) {
        movie.rating++
    }

    function downVoteRating (movie) {
        if (movie.rating > 0) {
        movie.rating--;
        }
    }
*/

});
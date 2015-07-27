app.factory('moviesData', function ($http, $q) {
    return {
        getMovies: function (id) {
            var defer = $q.defer();

            $http({
                url: 'http://jsonstub.com/movies',
                method: 'GET',
                dataType: 'json',
                data: '',
                headers: {
                    'Content-Type': 'application/json',
                    'JsonStub-User-Key': '181211b7-45a8-4e42-8ab3-2ad5fa40a759',
                    'JsonStub-Project-Key': '8255c3c0-5e1c-4881-b34b-932aa90873fb'
                }
            }).success(function (data) {
                defer.resolve(data);
            })
                .error(function (data) {
                    defer.reject(data);
                });

            return defer.promise;
        }     
    }
});
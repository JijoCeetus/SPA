var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/blog', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'AboutController'
    })

    .otherwise({ redirectTo: '/' });
});

app.controller('homeController', function ($scope) {
    $scope.message = 'From Home Controller';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'From blog Contact';
})

app.controller('AboutController', function ($scope) {
    $scope.message = 'From About Controler';
})

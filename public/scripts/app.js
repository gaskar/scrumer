'use strict';

var socket = io.connect('http://scrumertest.herokuapp.com/');

var app = angular.module('scrummerApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        "cardServices"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/cards/:created?', {
                'templateUrl': 'views/cards.html',
                controller: 'CardsCtrl'
            })
            .when('/card/addCard', {
                'templateUrl' : 'views/add-card.html',
                controller: 'CardsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.directive('cardDetails', function($compile){

});

app.directive('card', function() {
    return {
        restrict: 'E',
        require: '^ngModel',
        scope: {
            ngModel: '='
        },
        templateUrl: 'views/directives/card-template.html'
    }
});
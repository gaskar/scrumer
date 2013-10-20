'use strict';

angular.module('scrumerApp')
    .controller('LoginCtrl', function ($scope, $cookies, $location) {
        $scope.username = '';

        var isAuthorized = function(){
            return $cookies.username;
        };

        var redirectToCardsPage = function(){
            $location.path("/cards");
        };

        if(isAuthorized())
           redirectToCardsPage();

        $scope.login = function(){
            $cookies.username = $scope.username;
            redirectToCardsPage();
        };

    })
    .controller('CardsCtrl', function($scope, $routeParams, $cookies, Card){
        if(/^\d{2}[./-]\d{2}[./-]\d{4}$/.test($routeParams.created)){
            alert($routeParams.created);
        }

        socket.on('newCard', function () {
            alert("new card");
        });

        $scope.cards = Card.query();

        var createNewCard = function(username){
            return {
                creator : username,
                created: new Date(),
                toDo: [],
                done: [],
                toBeCompleted: [],
                description: ""
            };
        };

        $scope.newCard  = createNewCard($cookies.username);

        $scope.addTodo = function(item){
            $scope.newCard.toDo.push(item);
            $scope.todoItem = "";
        };

        $scope.addDone = function(item){
            $scope.newCard.done.push(item);
            $scope.doneItem = "";
        };

        $scope.addToBeCompleted = function(item){
            $scope.newCard.toBeCompleted.push(item);
            $scope.toBeCompletedItem = "";
        };

        $scope.addCard = function(){
            socket.emit('create', $scope.newCard);
        };


    });

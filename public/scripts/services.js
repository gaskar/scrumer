/**
 * Created by gaskar on 10/20/13.
 */
var cardServices = angular.module('cardServices', ['ngResource']);

cardServices.factory('Card', ['$resource',
    function($resource){
        return $resource('cards/getCards', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);

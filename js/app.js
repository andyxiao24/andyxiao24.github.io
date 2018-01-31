var andyApp = angular.module('githubApp', ['ui.router']);

andyApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("page", {
            url:"/page/:catagory/:article_name",
            templateUrl: function (stateParams){
                return 'html/' + stateParams.catagory + "/" + stateParams.article_name + '.html';
            }
        });
}]);
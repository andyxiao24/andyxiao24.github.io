var andyApp = angular.module('githubApp', ['ui.router']);

andyApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("page", {
            url:"/page/:category/:article_name",
            templateUrl: function (stateParams){
                return 'html/' + stateParams.category + "/" + stateParams.article_name + '.html';
            }
        });
}]);

/* move this logic to homeCtrl.js
andyApp.run(['$rootScope', '$location', '$state', function ($rootScope, $location, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log("state changed");
    });
}])
*/
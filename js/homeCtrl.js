andyApp.controller('homeCtrl', function($scope, $rootScope) {
    $scope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            this.activeCategory = this.articles[toParams.category]
        }.bind($scope));

    $scope.articles = {
        "Spring": [
            {
                "title": "haha",
                "name": "Spring中的循环依赖11",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖12",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖13",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ],
        "Java": [
            {
                "title": "hehe",
                "name": "Spring中的循环依赖21",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖22",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖23",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ],
        "JDK": [
            {
                "title": "haha",
                "name": "Spring中的循环依赖31",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖32",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }, {
                "title": "haha",
                "name": "Spring中的循环依赖33",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ],
        "About me": [
            {
                "title": "haha",
                "name": "About Me",
                "src": "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ]
    };

    $scope.activeCategory = $scope.articles["Spring"];

    $scope.changeContent = function(name) {
       $scope.activeCategory = $scope.articles[name];
    }
});
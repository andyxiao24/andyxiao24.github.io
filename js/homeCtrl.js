andyApp.controller('homeCtrl', function($scope) {
    console.info("test");
    $scope.articles = {
        "Spring": [
            {
                "name": "Spring中的循环依赖",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            },{
                "name": "Spring中的循环依赖2",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            },{
                "name": "Spring中的循环依赖3",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ],
        "Java" : [
            {
                "name": "Spring中的循环依赖",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            },{
                "name": "Spring中的循环依赖2",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            },{
                "name": "Spring中的循环依赖3",
                "src" : "http://www.baidu.com",
                "shortDesc": "",
                "createdDate": 123
            }
        ]
    };
});
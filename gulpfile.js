var gulp = require('gulp');

gulp.task('default', function() {
    console.log("test");
    // 将你的默认的任务代码放在这
});


var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src("./") // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
                              livereload: true, // 启用LiveReload，去掉f5刷新的痛点
                              open: true, // 服务器启动时自动打开网页
                              port: 3000
                          }));
});

gulp.task('gen-article-info', function() {

});
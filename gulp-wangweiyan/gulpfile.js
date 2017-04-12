/**
 * require 导入头文件
 */
var gulp = require('gulp')

gulp.task('copy-index', function () {
    return gulp.src('index.html').pipe(gulp.dest('dist'))
})
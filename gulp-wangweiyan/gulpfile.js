/**
 * require 导入头文件
 */
var gulp = require('gulp')

gulp.task('copy_image', function() {
    return gulp.src('image/*/*').pipe(gulp.dest('dist/image'))
})

gulp.task('copy_data', function() {
    return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json']).pipe(gulp.dest('dist/data'))
})

gulp.task('build', ['copy_image', 'copy_data'], function() {
    console.log('执行build任务');
    
})

//watch命令
gulp.task('watch', function() {
    //监视index.html文件如果有变化,执行copy_index任务
    gulp.watch('index.html', ['copy_index'])
    //监视image文件里面的所有jpg和png格式的图片,如果有变化,执行copy-index任务
    gulp.watch('image/**/*.{jpg,png}', ['copy_image'])
    /**
     * 监视xml和json文件里面的所有xml和json文件,除了json/secret里面的json文件,如果有变化,执行copy_data任务
     */
    gulp.watch('xml/*.xml', 'json/*.json', '!json/secret-*.json', ['copy_data'])
})
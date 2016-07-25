// 载入外挂
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'), //压缩CSS
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

// 压缩非minjs,检查JS
gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js', '!js/*min.js'])// 要压缩的js文件
        .pipe(uglify()) //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/js'))//压缩后的路径
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

// 压缩非mincss
gulp.task('styles', function() {
    return gulp.src(['src/css/*.css', '!**/*min.css'])
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
            message: 'styles task complete'
        }));
});

/**
 * 删除所有编译文件
 */
gulp.task('clean', function() {
    return gulp.src(['build'], {
        read: false
    })
        .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {
    gulp.start(['scripts', 'styles']);
});

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

var config = {
    paths: {
        scss: './src/**/*.scss',
        html: '/public/index.html'
    },
    output: {
        cssName: 'style.min.css',
        path: './public/css'
    }
}
// =============== scss =============
gulp.task('scss', function(){
    return gulp.src(config.paths.scss)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: 'last 10 versions',
            cascade: true
        }))
        .pipe(cleanCss())
        .pipe(concat(config.output.cssName))
        .pipe(gulp.dest(config.output.path))
})

gulp.task('default', function(){
    gulp.watch('./src/**/*.scss', ['scss']);
})
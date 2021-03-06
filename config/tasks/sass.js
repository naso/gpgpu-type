var gulp = require('gulp')
var compass = require('gulp-compass')
var autoprefixer = require('gulp-autoprefixer')
var minify = require('gulp-minify-css')
var gulpif = require('gulp-if')
var browserSync = require('browser-sync')
var config = require('../config')
var error = require('../utils/error')

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(compass(config.sass.settings))
    .on('error', error)
    .pipe(autoprefixer(config.sass.autoprefixer))
    .pipe(gulpif(process.env.NODE_ENV === 'production', minify()))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream: true}))
})

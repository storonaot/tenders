const gulp = require('gulp')

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const debug = require('gulp-debug')
const browserSync = require('browser-sync').create()
const pug = require('gulp-pug')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')

const postcss = require('gulp-postcss')
const inlineSVG = require('postcss-inline-svg')
const processors = [inlineSVG()]

gulp.task('styles:build', () => {
  return gulp.src('frontend/styles/main.sass', {base: 'frontend'})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(debug({title: 'styles'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'))
})

gulp.task('html:build', () => {
  return gulp.src('frontend/**/*.pug')
    .pipe(debug({title: 'html'}))
    .pipe(pug())
    .pipe(gulp.dest('public'))
})

gulp.task('js:build', () => {
  return gulp.src('frontend/javascripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(debug({title: 'js'}))
    .pipe(debug({title: 'js'}))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/javascripts'));
})

gulp.task('images:build', () => {
  return gulp.src('frontend/images/**/*.*', {base: 'frontend'})
    .pipe(imagemin())
    .pipe(gulp.dest('public'));
})

gulp.task('fonts:build', () => {
  return gulp.src('frontend/fonts/**/*.*', {base: 'frontend'})
  .pipe(gulp.dest('public'));
})

gulp.task('3rdparty:build', () => {
  return gulp.src('frontend/3rd-party/**/*.*', {base: 'frontend'})
  .pipe(gulp.dest('public'));
})

gulp.task('clean', () => {
  return del('public')
})

gulp.task('build',
  gulp.series('clean',
    gulp.parallel('js:build', 'html:build', 'styles:build', 'images:build', 'fonts:build', '3rdparty:build')
  )
)

gulp.task('watch', () => {
  gulp.watch('frontend/styles/**/*.sass', gulp.series('styles:build'))
  gulp.watch('frontend/javascripts/*.js', gulp.series('js:build'))
  gulp.watch('frontend/**/*.pug', gulp.series('html:build'))
  gulp.watch('frontend/images/**/*.*', gulp.series('images:build'))
  gulp.watch('frontend/fonts/**/*.*', gulp.series('fonts:build'))
  gulp.watch('frontend/3rd-party/**/*.*', gulp.series('3rdparty:build'))
})

gulp.task('serve', () => {
  browserSync.init({
    server: 'public',
    port: 8080,
    ui: {
      port: 8081,
    },
  })
  browserSync.watch('public/**/*.*').on('change', browserSync.reload)
})

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')))

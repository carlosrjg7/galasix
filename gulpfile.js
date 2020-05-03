'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');


const browserInit = () =>{
  browserSync.init({
    server: {
      baseDir: './public'
    },
    port: 8080,
/*    https: {
      key: "./ssl/server.key",
      cert: "./ssl/server.crt"
  }*/
  });
};

const browserReload = () => {
  browserSync.reload();
};

gulp.task('awesome', () => {
  return gulp.src('./node_modules/font-awesome/fonts/**/*.*')
  .pipe(gulp.dest('./public/fonts/'))
});

const fuentes = ['./resourse/fonts/**/*.{woff,woff2}'];
gulp.task('copyFonts', ()=>{
  return gulp.src(fuentes)
  .pipe(gulp.dest('./public/fonts'))
});

gulp.task('js', () => {
  return gulp.src('./resourse/js/**/*.js')
            .pipe(babel({       
              "presets": ["@babel/env"]
            }))  
            .pipe(browserify())
            .pipe(uglify())
            .pipe(rename({
              suffix: '.min'
            }))
            .pipe(gulp.dest('./public/js'))
            .pipe(browserSync.stream())
});

gulp.task('sass', () =>{
    return gulp.src('./resourse/sass/styles.scss')
      .pipe(sass({
        includePaths: ['./node_modules'],
      }))
      .on('error', sass.logError)
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream())
  });

const watchFiles = () =>{
  gulp.watch('./public/**/*.html', gulp.series(browserReload));
  gulp.watch('./resourse/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./resourse/js/**/*.js', gulp.series('js'));
}

exports.start = gulp.parallel(watchFiles,browserInit);

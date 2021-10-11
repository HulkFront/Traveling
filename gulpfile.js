const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require
('gulp-autoprefixer');

gulp.task('sass', () =>
gulp.src('./src/*.scss')
.pipe(sass({
    outputStyle: 'compressed'
}))
.pipe(gulp.dest('./css'))
);
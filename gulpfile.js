var gulp = require('gulp'),
    gutil = require('gulp-util'),
	coffee = require ('gulp-coffee');
var coffeeSources= ['componenets/coffee/*.coffee']

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
	.pipe(coffee({ bare: true })
	 .on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});
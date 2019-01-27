module.exports = function () {
	$.gulp.task('scss', function () {
	return $.gulp.src('src/static/scss/*.scss') 
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass({}))
		.pipe($.gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
		.pipe($.gp.plumber())
		.on("error", $.gp.notify.onError({
			message: "Error: <%= error.message %>",
			title: "scss"
		}))
		.pipe($.gp.csso()) //оптимизирует css
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/static/css'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
}
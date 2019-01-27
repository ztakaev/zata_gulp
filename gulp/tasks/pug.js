module.exports = function () {
	$.gulp.task('pug', function () {
		return $.gulp.src('src/pug/pages/*.pug') //файл разработки
			.pipe($.gp.pug({
				pretty:true //не минифицировать pug
			}))
			.pipe($.gulp.dest('build')) //исходный файл
			.on('end', $.bs.reload);
	});
}
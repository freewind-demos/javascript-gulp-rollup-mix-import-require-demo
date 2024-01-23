const gulp = require('gulp');
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(rollup({
            input: './src/hello.js',
            output: {
                format: 'cjs'
            },
            // NOTE plugins is not supported in `gulp-rollup`
            plugins: []
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./build'))
})


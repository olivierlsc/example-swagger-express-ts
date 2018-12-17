const gulp = require('gulp');
const clean = require('gulp-clean');

function cleanAll() {
    return gulp
        .src(['.nyc_output', 'coverage', 'built', '*.log', 'logs'], {
            read: false,
            allowEmpty: true,
        })
        .pipe(clean());
}

gulp.task('clean', cleanAll);

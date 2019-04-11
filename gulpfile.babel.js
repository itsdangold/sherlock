import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const browserSync = require('browser-sync').create();

gulp.task('css', function () {
    var processors = [
        autoprefixer,
        cssnano({
            preset: ['default', {
                minifyFontValues: {
                    removeQuotes: false
                },
                normalizeUrl: false
            }]
        })
    ];
    return gulp.src('dev/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', gulp.series('css', (done) => {
    browserSync.init({	
        server: {
            baseDir: "./"
        },
        notify: false
    });

    gulp.watch(['dev/main.scss', 'dev/*/_*.scss'], gulp.series('css'));

    done();
}));
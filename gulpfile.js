var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/js/all.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('css', function() {
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch("src/css/*.css").on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('js', 'css', 'serve'));

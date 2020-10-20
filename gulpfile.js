// define dependencies used for gulp setup  
const gulp = require('gulp');
const npmDist = require('gulp-npm-dist');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();



// Compile scss & move to css folder
function style (){
//1 where is my scss files 
return gulp.src('src/assets/scss/**/*.scss')
//2 pass file through sass compiler and sanitize errors 
.pipe(sass().on('error', sass.logError)) 
//3 where do i save compiled css?
.pipe(gulp.dest('src/assets/css/style'))
//4 stream changes to all browsers
.pipe(browserSync.stream());

}

// Compile Bootstrap & move to css folder
function bootstrap (done){
  //1 where is my bootstrap scss files 
   gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
   .pipe(gulp.src('node_modules/bootstrap/dist/css/bootstrap-grid.min.css'))
   .pipe(gulp.src('node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'))
  //3 where do i save compiled bootstrap?
  .pipe(gulp.dest('src/assets/css/bootstrap'))
  //4 stream changes to all browsers
  .pipe(browserSync.stream())
  done();
}

// Move Bootstrap Js to js folder
function bootstrapJS (){
  // 1 Where is my bootstrap js files
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
  // 2 where do i save my bootstrap js files
  .pipe(gulp.dest('src/assets/js/bootstrap'))
  //3 stream changes to all browsers
  .pipe(browserSync.stream());
}

// Move Jquery JS to js folder
function jquery (){
// 1 Where is my Jquery js files
return gulp.src('node_modules/jquery/dist/jquery.min.js')
// 2 where do i save my Jquery js files
.pipe(gulp.dest('src/assets/js/jquery'))
//3 stream changes to all browsers
 .pipe(browserSync.stream());
}

// Move Popper JS to js folder
function popper (){
  // 1 Where is my Popper js files
  return gulp.src('./node_modules/@popperjs/core/dist/umd/popper.min.js')
  // 2 where do i save my Popper js files
  .pipe(gulp.dest('src/assets/js/popper'))
  //3 stream changes to all browsers
   .pipe(browserSync.stream());
}

// look for changes made and update 
function watch(){
// init a basic server     
browserSync.init({
    server: {
    baseDir: './src',
    index: "index.html"  
    }
});

// watch for scss style changes 
gulp.watch('src/assets/scss/**/*.scss', style);
// watch for HTML changes 
gulp.watch('src/*.html').on('change', browserSync.reload);
// watch for javascript changes 
gulp.watch('src/assets/js/**/*.js').on('change', browserSync.reload);
}


// Copy dependencies to lib 
gulp.task('default', function() {
  return gulp.src(npmDist(), {base:'./node_modules/'})
       .pipe(rename(function(path) {
           path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
       }))
       .pipe(gulp.dest('./lib'));
 });


//Exports gulp functions to start a basic dev server

exports.style = style;             // run ---> "gulp style"  export scss & create style.css file 
exports.bootstrap = bootstrap;     // run ---> "gulp bootstrap"  export bootstrap scss & create bootstrap.css file 
exports.bootstrapJS = bootstrapJS; // run ---> "gulp bootstrapJS"  export bootstrap JS & create bootstrap.js file 
exports.jquery = jquery;           // run ---> "gulp jquery"  export jquery JS & create jquery.js file
exports.popper = popper;           // run ---> "gulp popper"  export popper JS & create popper.js file
exports.watch = watch;             // run ---> "gulp watch" to start the server 


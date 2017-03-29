"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");

gulp.task("images", function(){
	return gulp.src("img/**/*.{png,jpg,gif}")
	  .pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.jpegtran({progressive: true})
	]))
	.pipe(gulp.dest("img"));
});

gulp.task("sprite", function() {
	return gulp.src("img/*.svg")
	  .pipe(svgmin())
	  .pipe(svgstore({
		inlineSvg: true
	  }))
	  .pipe(rename("sprite.svg"))
	  .pipe(gulp.dest("img"));
});


gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]}),
	  mqpacker({
		  sort: true
	  })
	]))
    .pipe(gulp.dest("css"))
	.pipe(minify())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

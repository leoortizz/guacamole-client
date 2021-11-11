const gulp = require("gulp")
const concat = require("gulp-concat")
const insert = require("gulp-insert")
const terser = require("gulp-terser")
const rename = require("gulp-rename")

gulp.task("default", function () {
  return gulp
    .src("./src/main/webapp/modules/*.js")
    .pipe(concat("guacamole-common.js"))
    .pipe(insert.append("\nmodule.exports = Guacamole;"))
    .pipe(gulp.dest("dist"))
    .pipe(terser())
    .pipe(rename("guacamole-common.min.js"))
    .pipe(gulp.dest("dist"))
})

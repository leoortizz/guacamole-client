import gulp from "gulp"
import concat from "gulp-concat"
import insert from "gulp-insert"

// TODO: minify
// TODO: fix typescript support

gulp.task("default", function () {
  return concatAndExportGuacamoleCommonJs()
})

function concatAndExportGuacamoleCommonJs() {
  return gulp
    .src("./src/main/webapp/modules/*.js")
    .pipe(concat("guacamole-common.ts"))
    .pipe(insert.prepend("// @ts-nocheck\n"))
    .pipe(insert.append("\ndeclare module 'guacamole-common-js-mirror';\n"))
    .pipe(insert.append("\nmodule.exports = Guacamole;"))
    .pipe(gulp.dest("dist"))
}

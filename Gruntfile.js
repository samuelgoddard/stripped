module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          cacheLocation: 'styles/sass/.scss-cache',
          style: 'compressed'
        },
        files: {
          'styles/css/main.css': 'styles/scss/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['styles/scss/**/*.scss'],
        tasks: 'sass:dist'
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask('default', ["watch"]);
};

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server : {
        options: {
          port: 9000,
          hostname: 'localhost',
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        },
      },
    },
    uglify: {
      dist: {
        files: {
          'out.min.js': ['script.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);

}

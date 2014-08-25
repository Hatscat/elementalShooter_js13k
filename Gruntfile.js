module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server : {
        options: {
          port: 9001,
          hostname: 'localhost',
          livereload: 3333,
          open: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['uglify'],
        options: {
          livereload: 3333
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

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server : {
        options: {
          port: 9001,
          hostname: 'localhost',
          open: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['script.js'],
        tasks: ['uglify', 'jscrush'],
        options: {
          livereload: 3333
        },
      },
    },
    jscrush: {
      options: {
      },
      dist: {
        files: {
          'out.crush.js': ['script.js']
        }
      },
    },
    uglify: {
      options: {
        compress: true,
        mangle: true
      },
      dist: {
        files: {
          'out.uglify.js': ['script.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscrush');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);

}

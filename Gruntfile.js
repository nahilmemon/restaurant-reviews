/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images-resized directory from  the
  images-original directory
  "grunt clean" removes the images-resized directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    // Resize images in the images-original directory
    responsive_images: {
      // Resize all the images in the images-original/card directory
      dev: {
        options: {
          // engine: 'gm',
          sizes: [{
            width: 300,
            quality: 50
          },
          {
            width: 400,
            quality: 50
          },
          {
            width: 500,
            quality: 50
          },
          {
            width: 600,
            quality: 50
          },
          {
            width: 700,
            quality: 50
          },
          {
            width: 800,
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'images-original/',
          dest: 'images-resized/'
        }]
      }
    },

    /* Clear out the images-resized directory if it exists */
    clean: {
      dev: {
        src: ['images-resized'],
      },
    },

    /* Generate the images-resized directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images-resized']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images-resized/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images-original/fixed/*.{gif,jpg,png}',
          dest: 'images-resized/'
        }]
      },
    },
  });

  // load all the NPM tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  // Set up the default grunt task to clean the images-resized directory,
  // make a new image-resized directory if it's missing,
  // copy all the images in the images-orginal/fixed directory to the images-resized directory
  // and resize all the images in the images-original directory
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
};

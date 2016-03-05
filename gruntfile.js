module.exports = function (grunt) {

grunt.initConfig({
    // pkg:grunt.file.readJson('package.json'),
    less: {
        compile: {
            files: {
                './css/base.css': './less/base.less'
            }
        }
    },
    watch: {
        scripts: {
            files: ['./less/*.less'],
            tasks: ['less'],
            options:{
                spawn:false
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['less','watch']);
};

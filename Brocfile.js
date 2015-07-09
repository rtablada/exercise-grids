var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');

var includePaths = [
    'assets',
    'bower_components',
    'bower_components/fontawesome/scss',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/neat/app/assets/stylesheets',
];

var compiledCSS = sass(includePaths, 'hooli.scss', 'xyz.css');

module.exports = merge(['public', 'bower_components', compiledCSS]);

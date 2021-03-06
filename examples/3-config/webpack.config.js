const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './init.js',

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js']
    },

    watch: true
};
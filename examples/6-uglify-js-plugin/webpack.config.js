const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        a: './a',
        b: './b'
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]

}
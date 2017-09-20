const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: './init.js',

    output: {
        path: path.join(__dirname, "built"),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: true,
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: false,
        })
    ]

}
const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        home: "./Home",
        order: "./Order",
        profile: "./Profile",
        shop: "./Shop",
        vendor: ["lodash", "jquery"]
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["common", 'vendor'],
            minChunks: 2,
        })
    ]

}
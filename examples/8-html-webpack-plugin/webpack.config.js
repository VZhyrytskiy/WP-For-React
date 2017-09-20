const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        shop: './Shop',
        another: './Another.js',
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        })
    ]

}
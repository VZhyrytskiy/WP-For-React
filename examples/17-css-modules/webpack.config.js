const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        shop: './index'
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                }, {
                    loader: 'typed-css-modules-loader',
                    options: {
                        camelCase: true,
                        outDir: './built/css-modules'
                    },
                }
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
    ],
};
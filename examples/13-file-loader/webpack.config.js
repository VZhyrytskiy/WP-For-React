const path = require('path');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        a: "./a",
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [{
            test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader",
            options: {
                name: '[path][name].[ext]?[hash]'
            }
        }]
    }

}
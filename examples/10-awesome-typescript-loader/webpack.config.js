const path = require('path');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        home: "./Home",
        order: "./Order",
        profile: "./Profile",
        shop: "./Shop"
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            options: {
                useCache: true
            }
        }]
    }

}
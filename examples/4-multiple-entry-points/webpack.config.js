const path = require('path');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        home: "./home",
        order: "./order",
        profile: "./profile",
        shop: "./shop"
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js']
    }

}
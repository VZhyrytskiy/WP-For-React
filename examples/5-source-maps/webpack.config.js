const path = require('path');

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

    devtool: 'eval'
    //devtool: 'source-map'

}
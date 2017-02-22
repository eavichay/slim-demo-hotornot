// webpack.config.js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// Include Section

module.exports = {
    devtool: 'source-map',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Seed Project',
            filename: 'index.html',
            template: 'index.tmpl.html',
            inject: 'body',
            hash: true
        })
    ]
};

'use strict';

var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH,'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'main.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        alias: {
            'mycommon': path.resolve(ROOT_PATH, 'src/common')
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ['style','css']
            }, {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                include: SRC_PATH
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }, {
                test: /\.js[x]?$/,
                loader: 'babel',
                include: SRC_PATH,
                query: {
                    presets: ['es2015']
                }
            }

        ]
    }
};
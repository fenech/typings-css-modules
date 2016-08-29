const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

import "babel-polyfill";
import TypingsPlugin from "typings-for-css-modules-plugin";

module.exports = {
    entry: [
        './index.ts',
    ],
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },
    resolve: {
        extensions: ["", ".ts", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: [
                    "ts-loader"
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new TypingsPlugin({ verbose: true })
    ]
};
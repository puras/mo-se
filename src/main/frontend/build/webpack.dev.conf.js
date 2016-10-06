/**
 * Created by puras on 10/6/16.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var base_conf = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base_conf, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: 'index.html',
    //     inject: true
    // })
  ]
});
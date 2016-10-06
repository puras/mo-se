/**
 * Created by puras on 10/6/16.
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var base_conf = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
// var CleanWebpackPlugin = require('clean-webpack-plugin')
var boot_assets_path = path.resolve(__dirname, '../../resources/static')

module.exports = merge(base_conf, {
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'node_modules/bootstrap/dist',
        from: '**/*',
        to: path.resolve(boot_assets_path, 'lib/bootstrap')
      },
      {
        context: 'node_modules/jquery/dist',
        from: '**/*',
        to: path.resolve(boot_assets_path, 'lib/jquery')
      }
    ]),
    // new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: 'index.html',
    //     inject: true
    // })
  ]
})
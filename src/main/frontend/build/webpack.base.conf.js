/**
 * Created by puras on 10/6/16.
 */
var path = require('path');
var webpack = require('webpack');
var proj_root = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(proj_root, '../resources/static/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: proj_root,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: proj_root,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: proj_root,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
};
/**
 * Created by puras on 10/6/16.
 */

var webpack = require('webpack');
var webpack_conf = require('./webpack.prod.conf');

webpack(webpack_conf, function(err, stats) {
  console.log('Hello world');
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
});
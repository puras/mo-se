/**
 * Created by puras on 10/6/16.
 */

var webpack = require('webpack')
var webpack_conf = require('./webpack.dev.conf')

var compiler = webpack(webpack_conf)

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, function(err, stats) {
  console.log('Hello world');
  if (err) throw err;
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n');
})
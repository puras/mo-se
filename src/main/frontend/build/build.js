/**
 * Created by puras on 10/6/16.
 */
require('shelljs/global')

var webpack = require('webpack')
var webpack_conf = require('./webpack.dev.conf')
var path = require('path')
var boot_assets_path = path.resolve(__dirname, '../../resources/static')

echo('run build...')

rm('-r', path.resolve(boot_assets_path, 'js'))
echo('clean js directory...done')
rm('-r', path.resolve(boot_assets_path, 'lib'))
echo('clean lib directory...done')

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
})
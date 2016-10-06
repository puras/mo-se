/**
 * Created by puras on 10/6/16.
 */
var merge = require('webpack-merge');
var prod_env = require('./prod.env');

module.exports = merge(prod_env, {
  NODE_ENV: '"developement"'
});
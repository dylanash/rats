var path = require('path');
var webpack = require('webpack');
var uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node-modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [new uglify()]
};
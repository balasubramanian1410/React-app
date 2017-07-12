var path = require('path');
var webpack = require('webpack');

var ENV = 'production';
//var ENV = 'development';

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: './scripts/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: ENV == 'production' ? true : false
      }
    })
  ]
};
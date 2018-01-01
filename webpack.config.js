var path = require('path')
var config = {
  entry: './src/main.js',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    host: 'localhost',
    port: 4000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  }
}

module.exports = config;

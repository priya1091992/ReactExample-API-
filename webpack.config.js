var path = require('path')
var config = {
  entry: {
  client:'./src/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public/',
    filename: '[name].js'
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

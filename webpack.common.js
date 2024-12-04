const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};

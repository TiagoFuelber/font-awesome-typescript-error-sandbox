const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('babel-polyfill');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: { extensions: ['.tsx', '.js', '.jsx', '.ts'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html', // target html
      template: './src/index.html' // source html
    }),
    new ExtractTextPlugin({ filename: 'css/style.css' }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      EXAMPLE: JSON.stringify('example_api_key')
    })
  ]
};

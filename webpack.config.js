const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
});

const VENDOR_LIBS = [
  'angular'
];

const config = {
  entry: {
    bundle: './src/app/app.js',
    vendor: VENDOR_LIBS
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /nodemodules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
          test: /\.html$/,
          loader: 'raw-loader'
        }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      title: 'webpack-angularjs',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
};

module.exports = config;

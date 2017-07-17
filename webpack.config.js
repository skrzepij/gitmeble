var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var root = __dirname;

module.exports = {
  context: root,
  entry: {
    app: "./src/js/entry.js",
    contact: "./src/js/contact.js"
  },
  output: {
    path: path.join(root, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      /***************
      ###   SASS / CSS LOADERS
      ***********/
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          //resolve-url-loader may be chained before sass-loader if necessary
          fallback: "style-loader",       // put inline CSS into html file
          use: [{
            loader: 'css-loader',         // translates CSS into CommonJS
            options: {
              // minimize: true,          run with -p to minify;
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'      // manipulate CSS (e.g. autoprefixer) postcss.config.js
          },
          {
            loader: 'sass-loader',        // compiles Sass to CSS
            options: {
              // data: "$env: " + process.env.NODE_ENV + ";"
            }
          }],
          publicPath: "/dist"
        })
      },

      /***************
      ###   JS LOADER
      ***********/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      /***************
      ###   PUG LOADER
      ***********/
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }]
      },

      /***************
      ###   FONTS AND IMAGES LOADER
      ***********/
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file-loader?name=/img/[name].[hash].[ext]'
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
      // {
      //   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/font-woff'
      // },
      // {
      //   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/font-woff'
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/octet-stream'
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file-loader?name=/fonts/[name].[ext]'
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=image/svg+xml'
      // }
    ]
  },
  devServer: {
    contentBase: path.join(root, "dist"),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    stats: "errors-only",
    disableHostCheck: true
    //open: true            only in local env (with browser)
  },
  plugins: [
    ///HTML
    new HtmlWebpackPlugin({
      title: 'Gitmeble',
      hash: true,
      excludeChunks: ['contact'],
      template: './src/views/templates/index.pug',
      favicon: './src/favicon.png'
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Gitmeble Page1',
    //   hash: true,
    //   excludeChunks: ['contact'],
    //   template: './src/views/templates/page1.pug',
    //   filename: 'page1.html',
    //   favicon: './src/favicon.png'
    // }),
    new HtmlWebpackPlugin({
      title: "Gitmeble",
      hash: true,
      excludeChunks: ['contact'],
      template: './src/views/templates/szafy.pug',
      filename: 'szafy.html',
      favicon: './src/favicon.png'
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Webpack Contact',
    //   hash: true,
    //   chunks: ['contact'],
    //   filename: 'contact.html',
    //   template: './src/contact.html',
    //   favicon: './src/favicon.png'
    // }),


    //CSS
    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true
      //    filename: "[name].[contenthash].css"
      //     disable: process.env.NODE_ENV === "development"
    })
  ]
};

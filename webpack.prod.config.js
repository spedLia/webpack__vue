const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.js');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].[hash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index_prod.html',
            template: './index.ejs',
            inject: false
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsWebpackPlugin({
            cache: true
        })]
    }
});
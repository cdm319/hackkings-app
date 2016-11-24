import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssNext from 'postcss-cssnext';

const config = {
    debug: false,
    devtool: 'none',
    noInfo: true,
    entry: [
        './client/index'
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist/client'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'client/index.html'})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'url?limit=10000'
            }
        ]
    },
    postcss: (webpack) => [postcssImport({addDependencyTo: webpack}), postcssNext()]
};

export default config;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        script: './src/js/index.js',
        style: './src/css/index.css'
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'js/[name].js',
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/[name].css",
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
};
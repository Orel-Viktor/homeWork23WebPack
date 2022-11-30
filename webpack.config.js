const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: [
        './src/main.js',
        './src/styles/main.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:
            'main.min.js',

    },
    mode: "production",
    devtool:"source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [new HtmlWebPackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'main.min.css' })]
}
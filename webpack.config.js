const path = require('path')

module.exports = {
    entry: [
        './src/main.js',
        './src/main.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: [
            'main.min.js',
        ]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
}
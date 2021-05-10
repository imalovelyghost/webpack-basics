const path = require("path");
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [{
                test: /\.scss$/,
                use: ["style-loader", //3.-inject styles into DOM
                    "css-loader", //2.-turn css into commonjs
                    "sass-loader" //1.-Turn sass into css
                ]
            },

        ]

    }
};
const path = require('path');

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};

module.exports = config;
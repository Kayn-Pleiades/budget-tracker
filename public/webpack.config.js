// Needed Consts
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

// Set up config
const config = {
    entry: {
        app: './index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    mode: 'development',
    // Module
    // Plugins
};

// Export
module.exports = config;
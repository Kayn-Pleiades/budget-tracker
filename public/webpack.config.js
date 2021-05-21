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
    // Mode
    // Module
    // Plugins
};

// Export
module.exports = config;
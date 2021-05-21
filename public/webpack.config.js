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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new WebpackPwaManifest({
          fingerprints: false,
          name: 'Kayn Budget Tracker',
          short_name: 'BudgetTracker',
          description: 'An application that allows you to manage your budget.',
          background_color: '#01579b',
          theme_color: '#ffffff',
          'theme-color': '#ffffff',
          start_url: '/',
          icons: [
            {
              src: path.resolve('assets/images/icons/android-chrome-192x192.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ],
        }),
      ],
};

// Export
module.exports = config;
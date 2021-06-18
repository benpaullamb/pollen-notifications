const path = require('path');

module.exports = {
  entry: './src/pollen-lambda.js',
  output: {
    filename: 'pollen-lambda.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
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
  mode: 'production',
  target: 'node',
};

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.zy$/,
        use: ['my-loader'], // 处理顺序 html-minify-loader => html-loader => webpack
      },
    ],
  },
  resolveLoader: {
    modules: [path.join(__dirname, './src/loaders'), 'node_modules'],
  },
};

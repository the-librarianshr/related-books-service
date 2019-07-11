module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: { path: __dirname + '/public/dist', filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
        }
      }
    ]
  }
};
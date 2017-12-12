const webpack = require('webpack')

const config = {
  context: __dirname,
  entry: './index.js',
  output: {
      filename: 'reaktive.js',
      path: __dirname + '/build',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true
          }}],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              'babel-plugin-transform-inline-environment-variables',
              'babel-plugin-transform-class-properties',
              'babel-plugin-syntax-class-properties',
              'babel-plugin-transform-object-rest-spread',
              'babel-plugin-transform-jsx'
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}

module.exports = config

// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    // http://gaearon.github.io/react-hot-loader-loader/getstarted/
    //'webpack-dev-server/client?http://localhost:8001',
    // 'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
  devServer: {
    contentBase: __dirname + '/public',
    overlay: {
      errors: true
    }
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
  ]
}

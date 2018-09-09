const path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: ['./app.js'],
  output: {
    filename: './output.js',
    path: path.resolve(__dirname),
  },
};

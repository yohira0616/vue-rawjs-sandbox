const serve = require('webpack-serve');
const config = require('./webpack.config.js');
const argv = {}
const options = {config, content: '/', open: true, port: 8080}

// serve({}, { config });
serve(argv, options);
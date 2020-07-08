const path = require('path');
const webpack = require('webpack');

const version = process.env.VERSION || require('./package.json').version
const banner = 
`@spices/ginger v${version}
(c) ${new Date().getFullYear()} Alexandre Masy
@license MIT`

const resolve = _path => path.resolve(__dirname, _path);

module.exports = [
  {
    entry: resolve('src/index.js'),
    file: 'spices-ginger-body.js',
    format: 'umd', 
    env: 'development'
  },
  {
    entry: resolve('src/index.js'),
    file: 'spices-ginger-body.min.js',
    format: 'umd',
    env: 'production'
  },
].map(genConfig);


function genConfig(opts){
  const config = {
    devtool: 'source-map',
    entry: opts.entry,
    mode: opts.env,
    resolve:{
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: opts.file,
      library: 'spices-ginger-body',
      libraryTarget: opts.format
    },
    plugins: [
      new webpack.BannerPlugin({
        banner
      })
    ]
  }

  return config;
}

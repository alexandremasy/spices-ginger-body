const path = require('path')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')

const version = process.env.VERSION || require('./package.json').version
const banner =
  `/*!
  * @ginger/body v${version}
  * (c) ${new Date().getFullYear()} Alexandre Masy
  * @license MIT
  */`

const resolve = _path => path.resolve(__dirname, _path)

module.exports = [
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger-body.js'),
    format: 'umd',
    env: 'development'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger-body.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger-body.esm.min.js'),
    format: 'es',
    env: 'production'
  }
].map(config)

function config(opts) {
  const ret = {
    input: opts.entry,
    output: {
      banner,
      format: opts.format,
      file: opts.file,
      name: 'SpicesGingerBody'
    },
    plugins: [
      node(),
      cjs(),
    ]
  }

  return ret;
}
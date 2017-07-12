// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var projects = require('./projects')

var pro = projects.getProject()

if(pro) {
  console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  )

  var spinner = ora('building '  +  pro.name  + ' for production...')

  spinner.start()

  var assetsPath = path.join(pro.assetsRoot, pro.assetsSubDirectory)
  rm('-rf', assetsPath)
  mkdir('-p', assetsPath)
  cp('-R', 'static/*', assetsPath)

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  })
}

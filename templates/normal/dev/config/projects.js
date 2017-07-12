var path = require('path')
var Time = require('./time')


module.exports = {
  /**
   *  主工程
   */
  default: {
    name: 'default',
    entry: 'main.js',
    buildTemplate: 'index.html',
    devTemplate: 'index.html',
    index: path.resolve(__dirname, '../../index.html'),
    assetsRoot: path.resolve(__dirname, '../../'),
    assetsSubDirectory: 'static/default/'+new Time().format('yyMMddhhmm'),
    assetsPublicPath: ''
  },
  /**
   *  测试
   */
  test: {
    name: 'test',
    entry: 'main.js',
    buildTemplate: 'index-test.html',
    devTemplate: 'index-test.html',
    index: path.resolve(__dirname, '../../index.html'),
    assetsRoot: path.resolve(__dirname, '../../'),
    assetsSubDirectory: 'static/test/'+new Time().format('yyMMddhhmm'),
    assetsPublicPath: '',
    port: '8082'
  }
}

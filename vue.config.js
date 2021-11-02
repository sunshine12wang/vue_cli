const path = require('path')
// 引入import.scss文件供全局使用
function addStyleResource(rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({ 
        patterns: [path.resolve(__dirname, './src/styles/imports.scss'),
      ], 
      })
}
module.exports = { 
  chainWebpack: config => { 
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'] 
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type))) 
  }, 
}
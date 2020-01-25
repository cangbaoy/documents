const utils = require('../../utils/index')

const titles = ['指南', '文档']

const childrenData = [
  [
    '',
    'Markdown语法',
    'Vuepress优化'
  ],
  [
    '文档测试'
  ]
]

/**
 * 指南模块
 * @param {侧边栏标题 Array} params 
 * @param {文件名 Array} children 
 */
function genSidebar(params, children) {
  return utils.genSidebar(params, children, false, 1)
}

module.exports = genSidebar(titles, childrenData)
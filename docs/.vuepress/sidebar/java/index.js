const utils = require('../../utils/index')

const titles = [
  'Java核心知识点'
]
const childrenData = [
  [
    '',
    'JAVA 集合'
  ]
]

/**
 * Java核心知识点 模块
 * @param {*} params 
 * @param {*} children 
 */
function genSidebar(params, children) {
  return utils.genSidebar(params, children, false, 1)
}

module.exports = genSidebar(titles, childrenData)
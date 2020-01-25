# vuepress 优化

## 导航栏
- 在 `config.js` 中修改 `nav` 属性, 引入导航栏菜单配置文件
``` yaml
nav: require('./nav/zh')
```
- `zh.js` 配置文件如下格式：
``` js
// module.exports 暴露出去即可
module.exports = [
  // 指南
	{ text: '指南', link: '/zh/guide/' },
	{ text: '宝典', link: '/zh/knowledge/' },
  ......
	// 开发工具
	{ text: '开发工具', 
		items: [
			{ text: '在线编辑', 
				items: [
					{ text: 'JSON格式化', link: 'https://www.bejson.com/jsoneditoronline' },
					{ text: 'MD表格生成', link: 'https://tableconvert.com/' },
					{ text: 'CORN表达式', link: 'http://cron.qqe2.com/' },
					{ text: '正则表达式测试', link: 'https://www.bejson.com/othertools/regex/' },
					{ text: '代码格式化', link: 'https://www.bejson.com/jshtml_format/' },
					{ text: '二维码生成器', link: 'https://cli.im/' },
					{ text: 'YAML <--> Properties', link: 'https://www.toyaml.com/index.html' },
				]
			},
			{ text: '在线服务',
				items: [
					{ text: 'Boot CDN', link: 'https://www.bootcdn.cn/' },
					{ text: '微信 CDN', link: 'https://qydev.weixin.qq.com/cdn/cdnjs.html' },
				]
			},
			{ text: '开源镜像',
				items: [
					{ text: 'OPSX', link: 'https://opsx.alibaba.com/' },
					{ text: 'AZURE', link: 'https://mirror.azure.cn/' },
					{ text: 'Docker HUB', link: 'https://hub.docker.com/' },
				]
			},
			{ text: '趋势分析',
				items: [
					{ text: '谷歌趋势', link: 'https://trends.google.com/trends/?geo=US' },
					{ text: '百度指数', link: 'http://index.baidu.com/v2/index.html#/' },
					{ text: '百度流量研究院', link: 'https://tongji.baidu.com/data/browser' },
				]
			},
		],
	},
]
```

## 侧边栏
- 定义侧边栏通用生成工具类
```js
// 侧边栏生成通用工具类
const utils = {
  /**
   * 多个标题侧边栏
   * @param {侧边栏标题: 类型Array} titles 
   * @param {文件名： 类型Array} children 
   * @param {展开状态: 默认true} collapsable 
   * @param {标题深度: 默认1最大2禁用0} sidebarDepth 
   */
  genSidebar: function (titles, children, collapsable = true, sidebarDepth = 1) {
    const sidebarArray = []
    titles.forEach((el, index) => {
      const option = {
        title: el,
        collapsable: collapsable,
        sidebarDepth: sidebarDepth,
        children: children[index]
      }
      sidebarArray.push(option)
    })
    return sidebarArray
  },
}
// 暴露工具
module.exports = utils
```
- 使用工具类生成侧边栏
  - 在 `.vuepress` 下自定义文件夹 `sidebar`, 参考 `guide` 示例 `index.js`
```js
const utils = require('../../utils/index')

const titles = ['指南', '文档']

const childrenData = [
  ['','start-markdown','start-vuepress'],
  ['start-test']
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
```
- 创建 侧边栏配置文件 `sidebarConfig.js`
```js

const guide = require('./sidebar/guide/index')

const knowledge = require('./sidebar/knowledge/index')

// 菜单配置
module.exports = {
  '/zh/guide/': guide,
  '/zh/knowledge/': knowledge,
}
```
- 在 `config.js` 中配置使用
``` yaml
sidebar: require('./sidebarConfig'),
```

## 插件使用
- 在 `config.js` 中配置 `plugins` 属性 

``` yaml
plugins: require('./plugins/plugins'),
```
- 创建插件配置文件 `plugins.js`
``` js
const analytics = require('./analytics.js')

module.exports = {
  // 刷新内容插件
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  // 回到顶部插件
  '@vuepress/back-to-top': true,
  // 网站数据分析插件
  '@vuepress/google-analytics': {
    'ga': analytics.ga
  }
};
```
- 网站数据分析配置 `analytics.js`
```
module.exports = {
  ga: 'UA-140132644-1' //https://analytics.google.com/analytics/web/  获取 ga 值 用来做网站数据分析
}
```
## Travis CI 持续集成
修改代码后提交不需要手动命令部署, 使用 Travis CI 持续集成, 直接提交代码到 github , Travis CI 会自动帮你部署到服务器

[Travis CI 官网](https://travis-ci.org/)
- 在官网配置：开启 Travis CI, 如下所示

![](http://114.116.184.67:81/images/guide/travis_20190815154947.png)

- 设置参数说明：
  - `${user}`: 用户名
  - `${email}`: 邮箱
  - `${access_token}`: github仓库地址
  - `${project}`: 项目名
  - `${branch}`: 分支

![](http://114.116.184.67:81/images/guide/travis_20190815153817.png)



- 项目根路径下创建 `.travis.yml` 文件
``` yaml
language: node_js
# nodejs版本
node_js:
    - '10'

# S: Build Lifecycle
install:
  - npm install
script:
  # 生成静态文件
  - npm run build

  # 进入生成的文件夹
  - cd dist
  - git init
  - git config user.name "${user}"
  - git config user.email "${email}"
  - git add -A
  - git commit -m 'deploy'
  # 如果发布到 https://<USERNAME>.github.io/<REPO>
  - git push --force --quiet "https://${access_token}@${project}" master:${branch}

# 只对某个分支行为生效
branches:
  only:
    - master
```

- Travis CI 使用最终效果

![](http://114.116.184.67:81/images/guide/travis_20190815154410.png)

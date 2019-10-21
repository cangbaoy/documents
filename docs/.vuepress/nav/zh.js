module.exports = [
    // 指南
	{ text: '指南', link: '/zh/guide/' },
	{ text: '宝典', link: '/zh/knowledge/' },
	// 在线文档
	{ text: '在线文档',        // 这里是下拉列表展现形式。
			items: [
					{ text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
					{ text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
					{ text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
					{ text: 'Bootstrap', link: 'https://v3.bootcss.com/components/' },
			]	
	},
	// 基础测试
	{ text: '基础测试',        // 这里是下拉列表展现形式。
			items: [
					{ text: 'LeetCode', link: 'https://leetcode.com/' },
					{ text: 'Codewars', link: 'https://www.codewars.com/' },
			]	
	},
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
	// ChangeLog
	{ text: 'ChangeLog', link: '/zh/changelog/' },
]



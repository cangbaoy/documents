module.exports = {
  base: '/documents/',
  dest: 'dist',
  title: 'documents',
  description: 'Vuepress Demo',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: require('./plugins/plugins'),
  themeConfig: {
    algolia: {
      apiKey: '2edc6685f13cdc3099a808bac3c2d755',
      indexName: 'dev'
    },
    // 你的GitHub仓库
    repo: 'https://github.com/P-Sansei/documents.git',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: require('./nav/zh'), // 导航栏菜单
    sidebar: require('./sidebarConfig'), // 侧边栏菜单
  }
}

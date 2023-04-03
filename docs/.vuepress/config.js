module.exports = {
  theme: '',
  title: 'VuePress + Element',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features'); // 解决core版本问题
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/select.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}
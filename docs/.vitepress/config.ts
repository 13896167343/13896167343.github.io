import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "瑶的技术博客",
  description: "分享技术，记录成长",
  base: '/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文章', link: '/articles/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/articles/': [
        {
          text: '前端',
          items: [
            { text: 'Vue3 入门', link: '/articles/vue3-start' },
            { text: 'Vite 进阶', link: '/articles/vite-advanced' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/498330580' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
})

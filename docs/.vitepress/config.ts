import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "瑶的技术博客",
  description: "分享技术，记录成长",
  base: '/',
  
  themeConfig: {
    siteTitle: '瑶的技术博客',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文章', link: '/articles/' },
      { text: '关于', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/498330580' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
})

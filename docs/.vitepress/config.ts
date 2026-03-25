import { defineConfig } from 'vitepress'
import { withTeek } from 'vitepress-theme-teek'

export default withTeek(defineConfig({
  title: "瑶的技术博客",
  description: "分享技术，记录成长",
  base: '/',
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文章', link: '/articles/' },
      { text: '关于', link: '/about' }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/498330580' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
}))
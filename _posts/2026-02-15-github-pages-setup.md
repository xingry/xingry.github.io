---
layout: post
title: "GitHub Pages搭建个人博客"
date: 2026-02-15 10:00:00 +0800
categories: [教程, GitHub]
tags: [github, pages, 博客, 教程]
author: 星如意
---

# GitHub Pages搭建个人博客完整指南

GitHub Pages是GitHub提供的静态网站托管服务，非常适合搭建个人博客、项目文档等。本文将详细介绍如何使用GitHub Pages搭建个人博客。

## 准备工作

### 1. GitHub账户
如果你还没有GitHub账户，需要先注册一个：
- 访问 [GitHub官网](https://github.com)
- 点击"Sign up"注册新账户

### 2. 创建仓库
GitHub Pages有两种类型：
1. **用户/组织站点**：仓库名为 `username.github.io`
2. **项目站点**：任何仓库的`gh-pages`分支或`docs`文件夹

对于个人博客，建议使用第一种方式。

## 创建博客仓库

### 步骤1：新建仓库
1. 登录GitHub
2. 点击右上角"+" → "New repository"
3. 填写仓库信息：
   - Repository name: `username.github.io` (替换为你的用户名)
   - Description: 可选描述
   - Public: 选择公开
   - Initialize with a README: 可选

### 步骤2：克隆仓库到本地
```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

## 选择静态站点生成器

### 选项1：Jekyll（推荐）
GitHub Pages原生支持Jekyll，无需额外配置。

#### 安装Jekyll
```bash
# 安装Ruby（如果尚未安装）
# macOS:
brew install ruby

# Ubuntu/Debian:
sudo apt-get install ruby-full

# 安装Jekyll和Bundler
gem install jekyll bundler
```

#### 创建Jekyll站点
```bash
jekyll new .
```

### 选项2：Hugo
Hugo速度更快，但需要GitHub Actions构建。

#### 安装Hugo
```bash
# macOS
brew install hugo

# 其他系统参考：https://gohugo.io/installation/
```

#### 创建Hugo站点
```bash
hugo new site .
```

### 选项3：Hexo
Hexo基于Node.js，主题丰富。

#### 安装Hexo
```bash
npm install -g hexo-cli
hexo init .
```

## 博客配置

### Jekyll配置示例 (`_config.yml`)
```yaml
title: "我的博客"
description: "记录技术思考和生活感悟"
baseurl: ""
url: "https://username.github.io"

theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag

author:
  name: "你的名字"
  email: "your-email@example.com"

# 社交链接
social:
  github: username
  twitter: username
```

### 主题选择
- **Minima**：Jekyll默认主题，简洁
- **TeXt**：功能丰富的主题
- **Chirpy**：现代设计，功能完整
- **Hugo Themes**：Hugo主题库

## 内容管理

### 文章结构
```
_posts/
├── 2026-01-01-welcome.md
├── 2026-01-15-tutorial.md
└── 2026-02-01-update.md
```

### 文章Front Matter
```yaml
---
layout: post
title: "文章标题"
date: 2026-01-01 12:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
author: 作者名
---
```

## 本地开发

### 启动本地服务器
```bash
# Jekyll
bundle exec jekyll serve

# Hugo
hugo server

# Hexo
hexo server
```

访问 `http://localhost:4000` 查看效果。

### 实时预览
- Jekyll和Hugo支持热重载
- 修改文件后自动刷新页面
- 方便调试和测试

## 部署到GitHub

### 方法1：直接推送
```bash
git add .
git commit -m "初始化博客"
git push origin main
```

### 方法2：使用GitHub Actions（非Jekyll）
创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          
      - name: Build
        run: hugo --minify
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 自定义域名

### 步骤1：购买域名
- 国内：阿里云、腾讯云
- 国外：Namecheap、GoDaddy

### 步骤2：配置DNS
1. 添加CNAME记录：
   ```
   Type: CNAME
   Name: @ 或 www
   Value: username.github.io
   ```

2. 等待DNS生效（通常几分钟到几小时）

### 步骤3：GitHub配置
1. 在仓库设置中找到"Pages"
2. 在"Custom domain"中输入你的域名
3. 勾选"Enforce HTTPS"

## 高级功能

### 1. 评论系统
- **Disqus**：最流行的评论系统
- **Gitalk**：基于GitHub Issues
- **Utterances**：轻量级，基于GitHub

### 2. 搜索功能
- **Algolia**：强大的搜索服务
- **Simple-Jekyll-Search**：轻量级客户端搜索
- **Lunr.js**：本地搜索

### 3. 分析统计
- **Google Analytics**：全面的网站分析
- **百度统计**：国内用户分析
- **Umami**：开源、隐私友好的分析工具

### 4. CDN加速
- **Cloudflare**：免费CDN和DNS
- **jsDelivr**：开源CDN
- **UNPKG**：npm包CDN

## 最佳实践

### 1. 版本控制
- 使用Git管理所有更改
- 提交信息清晰明了
- 定期备份重要内容

### 2. 性能优化
- 压缩图片
- 使用CDN加速静态资源
- 减少HTTP请求

### 3. SEO优化
- 使用语义化HTML
- 添加meta描述和关键词
- 创建sitemap.xml

### 4. 移动端适配
- 使用响应式设计
- 测试不同设备显示效果
- 确保触摸操作友好

## 常见问题

### Q1：网站无法访问
- 检查仓库名称是否正确
- 确认GitHub Pages已启用
- 查看构建状态

### Q2：自定义域名不生效
- 检查DNS配置
- 等待DNS传播
- 确认GitHub设置正确

### Q3：本地和线上显示不一致
- 清除浏览器缓存
- 检查构建日志
- 确认配置文件正确

### Q4：如何添加新功能
- 查找相关插件
- 参考官方文档
- 在社区寻求帮助

## 资源推荐

### 学习资源
- [Jekyll官方文档](https://jekyllrb.com/docs/)
- [Hugo官方文档](https://gohugo.io/documentation/)
- [GitHub Pages文档](https://docs.github.com/pages)

### 主题市场
- [Jekyll Themes](http://jekyllthemes.org/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Hexo Themes](https://hexo.io/themes/)

### 工具推荐
- [Netlify](https://www.netlify.com/)：替代托管平台
- [Forestry](https://forestry.io/)：CMS for静态站点
- [Prose](https://prose.io/)：在线编辑器

## 总结

GitHub Pages是搭建个人博客的绝佳选择，它：
- 🆓 完全免费
- 🔒 安全可靠
- ⚡ 访问速度快
- 🔧 配置简单
- 🌐 全球可用

希望这份指南能帮助你成功搭建自己的博客。开始写作，分享你的知识和经验吧！

---

*本文最后更新：2026年2月15日*  
*如有问题，欢迎在评论区留言讨论。*

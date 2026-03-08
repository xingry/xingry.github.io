# 星如意的个人博客

这是我的个人博客，使用 Jekyll 构建，托管在 GitHub Pages。

## 博客特点

- 🎨 简洁现代的响应式设计
- 📱 移动端友好
- 🔍 支持分类、标签和搜索
- 📅 文章归档功能
- 🌙 暗色模式支持
- 📊 访问统计（可选）
- 💬 评论系统（可选）

## 本地开发

### 环境要求

- Ruby 2.5.0 或更高版本
- Bundler gem

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/xingry/xingry.github.io.git
   cd xingry.github.io
   ```

2. 安装依赖：
   ```bash
   bundle install
   ```

3. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```

4. 在浏览器中访问：http://localhost:4000

## 写作指南

### 创建新文章

1. 在 `_posts` 目录中创建新的 Markdown 文件
2. 文件名格式：`YYYY-MM-DD-title.md`
3. 文件开头添加 Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: YYYY-MM-DD HH:MM:SS +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
author: 作者名
---
```

### 文章格式

- 使用 Markdown 语法
- 图片放在 `assets/images/` 目录
- 代码块指定语言以获得语法高亮
- 使用相对链接引用本地资源

## 部署

博客会自动部署到 GitHub Pages：

1. 推送更改到 `main` 分支
2. GitHub Actions 会自动构建和部署
3. 访问 https://xingry.github.io 查看最新版本

## 目录结构

```
.
├── _config.yml          # 配置文件
├── _posts/              # 文章目录
├── _layouts/            # 布局文件
├── _includes/           # 包含文件
├── assets/              # 静态资源
│   ├── css/             # 样式表
│   ├── js/              # JavaScript
│   └── images/          # 图片
├── about.md             # 关于页面
├── archive.md           # 归档页面
├── tags.md              # 标签页面
├── categories.md        # 分类页面
├── index.html           # 首页
└── Gemfile              # Ruby依赖
```

## 自定义配置

### 修改主题

编辑 `_config.yml` 文件：

```yaml
# 基本设置
title: "博客标题"
description: "博客描述"
url: "https://xingry.github.io"

# 作者信息
author:
  name: "你的名字"
  bio: "个人简介"
  avatar: "/assets/images/avatar.jpg"
  
# 社交链接
social:
  github: xingry
  twitter: xingry
```

### 添加功能

1. **评论系统**：配置 Disqus 或 Gitalk
2. **搜索功能**：集成 Algolia 或本地搜索
3. **分析统计**：添加 Google Analytics 或百度统计
4. **CDN加速**：使用 Cloudflare 或 jsDelivr

## 贡献

欢迎提交 Issue 或 Pull Request 来改进这个博客。

## 许可证

博客内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可证。

代码部分采用 MIT 许可证。

## 联系方式

- GitHub: [xingry](https://github.com/xingry)
- 博客: [https://xingry.github.io](https://xingry.github.io)

---

感谢访问我的博客！

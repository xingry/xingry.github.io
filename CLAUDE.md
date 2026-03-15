# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Jekyll 构建的静态博客，托管在 GitHub Pages (https://xingry.github.io)。

## 开发命令

```bash
# 安装依赖
bundle install

# 本地开发服务器
bundle exec jekyll serve
# 访问 http://localhost:4000

# 带草稿的本地开发
bundle exec jekyll serve --drafts

# 构建生产版本
bundle exec jekyll build
```

## 目录结构

```
├── _config.yml          # 站点配置
├── _posts/              # 博客文章
├── _layouts/            # 布局模板 (default, page, post)
├── _includes/           # 可复用组件
├── assets/
│   ├── css/           # SCSS样式
│   ├── js/            # JavaScript
│   └── images/        # 图片资源
└── index.html         # 首页
```

## 核心架构

- **主题**: 基于 `minima` 主题
- **Markdown 处理器**: kramdown
- **代码高亮**: rouge
- **样式**: 自定义 SCSS (`assets/css/custom.scss`)，支持暗色模式
- **布局**:
  - `default.html`: 基础布局，包含 header/footer/nav
  - `post.html`: 文章页面布局
  - `page.html`: 普通页面布局

## 文章格式

文章位于 `_posts/` 目录，文件名格式为 `YYYY-MM-DD-title.md`。

Front Matter 示例:
```yaml
---
layout: post
title: "文章标题"
date: 2026-03-15 12:00:00 +0800
categories: [分类 1, 分类 2]
tags: [标签 1, 标签 2]
author: 作者名
---
```

## 部署

推送至 `main` 分支后自动部署到 GitHub Pages。

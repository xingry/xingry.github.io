# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Jekyll 构建的静态博客，使用 **Chirpy 主题**，托管在 GitHub Pages (https://xingry.github.io)。

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
├── _tabs/               # 导航页面 (home, categories, tags, archives, about)
├── _posts/              # 博客文章
└── Gemfile              # Ruby 依赖
```

## 核心架构

- **主题**: jekyll-theme-chirpy
- **Markdown 处理器**: kramdown
- **代码高亮**: rouge
- **语言**: zh-CN

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

### Chirpy 特有 Front Matter 字段（可选）

```yaml
---
# 置顶文章（数字越大越靠前）
pin: 3

# 文章描述（用于 SEO）
description: "文章的简短描述"

# 禁用评论
comments: false

# 禁用目录
toc: false

# 封面图片
image:
  path: /assets/images/cover.jpg
---
```

## 添加新文章

1. 在 `_posts/` 目录创建文件，命名格式：`YYYY-MM-DD-标题.md`
2. 添加 Front Matter（见上方）
3. 撰写 Markdown 内容
4. 推送即可自动部署

示例：
```bash
# 创建新文章
cp _posts/2026-03-09-openclaw-feishu-integration.md _posts/$(date +%Y-%m-%d)-my-new-post.md
```

## 导航配置

编辑 `_tabs/` 目录下的文件：
- `home.md` - 首页
- `categories.md` - 分类页面
- `tags.md` - 标签页面
- `archives.md` - 归档页面
- `about.md` - 关于页面

## 部署

推送至 `main` 分支后自动部署到 GitHub Pages。
构建由 GitHub Actions 自动执行。

## Chirpy 主题文档

- 快速开始：https://chirpy.cotes2020.page/docs/quick-start
- 配置说明：https://chirpy.cotes2020.page/docs/configuration
- 写作指南：https://chirpy.cotes2020.page/docs/writing-posts

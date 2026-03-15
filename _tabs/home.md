---
# 你可以自定义首页内容，或者留空使用默认的文章列表
layout: home
#
# 所有配置都是可选的，你可以删除或注释掉不需要的配置
#

# 首页简介
title: 欢迎来到我的博客
lead: 这里记录了我的技术思考、学习笔记和生活感悟

# 启用主页横幅（展示最新的文章）
banner: true

# 显示特定分类的文章
# 格式：分类名: 文章数量
# pin 分类会优先显示
sections:
  - category: 技术
    limit: 3
  - category: AI
    limit: 2

# 显示特定的文章（通过 front matter 中的 pin: true 设置）
pin: 3

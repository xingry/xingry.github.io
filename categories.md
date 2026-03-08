---
layout: page
title: 分类
permalink: /categories/
---

# 文章分类

{% for category in site.categories %}
<h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
<ul class="category-posts">
  {% for post in category[1] %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%Y年%m月%d日" }}
    </time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {% if post.tags.size > 0 %}
    <span class="post-tags">
      {% for tag in post.tags %}
      <a href="/tags/#{{ tag | slugify }}" class="tag">{{ tag }}</a>
      {% endfor %}
    </span>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% endfor %}

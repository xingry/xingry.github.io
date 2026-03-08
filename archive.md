---
layout: page
title: 文章归档
permalink: /archive/
---

# 文章归档

按时间顺序查看所有文章：

{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y年" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="{{ currentdate }}">{{ currentdate }}</h2>
    <ul class="archive-year">
    {% assign date = currentdate %}
  {% endif %}
  
  {% assign currentmonth = post.date | date: "%m月" %}
  {% if currentmonth != month %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h3 id="{{ currentdate }}-{{ currentmonth | date: '%m' }}">{{ currentmonth }}</h3>
    <ul class="archive-month">
    {% assign month = currentmonth %}
  {% endif %}
  
  <li class="archive-item">
    <time datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%m月%d日" }}
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
  
  {% if forloop.last %}</ul></ul>{% endif %}
{% endfor %}

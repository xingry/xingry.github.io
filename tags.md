---
layout: page
title: 标签
permalink: /tags/
---

# 标签云

<div class="tag-cloud">
{% for tag in site.tags %}
  {% assign size = tag[1].size %}
  {% assign font_size = size | times: 2 | plus: 14 %}
  <a href="#{{ tag[0] | slugify }}" class="tag" style="font-size: {{ font_size }}px;">
    {{ tag[0] }} ({{ size }})
  </a>
{% endfor %}
</div>

<hr>

{% for tag in site.tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul class="tag-posts">
  {% for post in tag[1] %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%Y年%m月%d日" }}
    </time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% endfor %}

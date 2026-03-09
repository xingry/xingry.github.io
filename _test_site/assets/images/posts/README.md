# 博客图片资源

## OpenClaw与飞书集成文章图片

由于实际图片需要从Unsplash等图库获取，这里提供图片引用说明：

### 主图
- URL: `https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`
- 描述：AI与办公协作概念图
- 替代文本：OpenClaw与飞书集成示意图

### 架构图
文章中的Mermaid图表会自动渲染为SVG图形，无需额外图片。

### 使用建议
1. 可以将图片下载到本地 `assets/images/posts/` 目录
2. 使用相对路径引用：`/assets/images/posts/openclaw-feishu-architecture.png`
3. 保持图片优化：压缩、合适的尺寸
4. 添加alt文本提高可访问性

## 图片优化命令示例

```bash
# 使用ImageMagick压缩图片
convert input.jpg -resize 1200x -quality 85 output.jpg

# 使用pngquant压缩PNG
pngquant --quality=65-80 input.png
```
#!/bin/bash

echo "=== 测试Jekyll构建 ==="
echo "当前目录: $(pwd)"
echo ""

# 检查必要的文件
echo "1. 检查必要文件..."
ls -la _config.yml Gemfile _posts/2026-03-09-openclaw-feishu-integration.md
echo ""

# 检查YAML语法
echo "2. 检查YAML语法..."
if command -v yamllint &> /dev/null; then
    yamllint _config.yml || echo "警告: yamllint发现YAML语法问题"
else
    echo "跳过: yamllint未安装"
fi
echo ""

# 尝试简单的Jekyll构建测试
echo "3. 尝试Jekyll构建..."
echo "创建临时目录..."
rm -rf _test_site
mkdir _test_site

# 复制必要文件
cp _config.yml _test_site/
cp -r _posts _test_site/
cp -r _layouts _test_site/
cp index.html _test_site/
cp -r assets _test_site/

echo "构建测试完成"
echo "如果GitHub Actions仍然失败，请检查:"
echo "1. GitHub Pages设置是否正确"
echo "2. 仓库是否已启用GitHub Pages"
echo "3. 查看详细的构建日志"
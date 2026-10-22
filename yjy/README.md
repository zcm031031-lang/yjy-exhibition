# YIJIAYOU Exhibition Site

展会独立站 — 扬州亿家友酒店用品有限公司产品展示网站

## 本地预览

直接双击 `index.html` 即可在浏览器中打开。

或使用本地服务器：

```bash
python -m http.server 8080
```

然后访问 http://localhost:8080

## 部署到 GitHub Pages

### 方案一：GitHub 网页上传（最简单，无需安装工具）

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角 **+** → **New repository**
3. 仓库名填写 `yjy-exhibition`（或任意名称），选择 **Public**，不要勾选 README
4. 创建后点击 **uploading an existing file**
5. 将 `yjy` 文件夹中的所有文件拖入上传区域（或选择文件夹上传）
6. 点击 **Commit changes**
7. 进入仓库 **Settings** → 左侧 **Pages**
8. Source 选择 **Deploy from a branch**，Branch 选择 **main** / **(root)**
9. 保存后等待 1-2 分钟，访问 `https://你的用户名.github.io/yjy-exhibition/`

### 方案二：安装 Git 后命令行上传

```bash
# 1. 安装 Git: https://git-scm.com/download/win

# 2. 在 yjy 文件夹中执行
git init
git add -A
git commit -m "Exhibition site"
git branch -M main
git remote add origin https://github.com/你的用户名/yjy-exhibition.git
git push -u origin main

# 3. 在 GitHub 仓库 Settings → Pages 中启用 Pages
```

### 方案三：GitHub Desktop（图形界面）

1. 下载安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录 GitHub 账号
3. File → Add Local Repository → 选择 `yjy` 文件夹
4. 点击 **Publish repository** 即可

## 网站功能

- 英文界面，面向外国客户
- 27 款产品展示（垃圾袋/无纺布袋/酒店易耗品）
- 产品分类筛选
- WhatsApp 一键询盘（+86 137 5299 7293）
- 邮箱联系（zcm@gmail.com）
- 响应式设计，手机/平板/电脑均可浏览

## 文件结构

```
yjy/
  index.html          # 主页面
  assets/
    style.css         # 样式
    app.js            # 产品数据与交互
    img/              # 35 张产品图（来自画册）
  .nojekyll           # GitHub Pages 配置
  README.md           # 本文件
```

# 数据治理解决方案网站

[![Deploy VitePress](https://github.com/your-org/Vite-Press/workflows/Deploy%20VitePress%20site%20to%20Pages/badge.svg)](https://github.com/your-org/Vite-Press/actions)
[![VitePress](https://img.shields.io/badge/VitePress-1.5.0-brightgreen.svg)](https://vitepress.dev/)
[![Vue](https://img.shields.io/badge/Vue-3.5.0-brightgreen.svg)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

中文 | [English](./README.md)

基于 VitePress 构建的数据治理企业解决方案展示网站，提供专业、简洁的数据治理知识和服务介绍。

## ✨ 主要特性

-   🎨 **专业设计** - 蓝色调主题（#007BFF），专业且现代
-   📱 **响应式布局** - 完美支持移动端、平板和桌面端
-   🌐 **多语言支持** - 按语言分类的清晰目录结构（参考 VitePress 官方）
-   ⚡ **极速体验** - 基于 Vite 构建，即时热更新
-   🔍 **多语言搜索** - 独立的中英文搜索索引
-   🧩 **自定义组件** - Vue 3 组件（FeatureCard, CaseCard 等）
-   🌙 **深色模式** - 优化的暗色主题，文字清晰可读
-   📊 **SEO 优化** - 清晰的 URL 结构，多语言元标签
-   🗂️ **清晰结构** - `/zh/` 和 `/en/` 独立目录，易于维护

## 📦 快速开始

### 环境要求

-   Node.js 18+
-   npm 9+

### 安装

```bash
# 克隆仓库
git clone https://github.com/your-org/Vite-Press.git
cd Vite-Press

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
# 构建
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
Vite-Press/
├── docs/                          # 文档源文件
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.js            # 主配置（多语言）
│   │   └── theme/               # 自定义主题
│   │       ├── index.js         # 主题入口
│   │       ├── custom.css       # 自定义样式
│   │       └── components/      # Vue 组件
│   ├── public/                  # 静态资源
│   │   ├── logo.svg
│   │   ├── hero-image.svg
│   │   └── favicon.ico
│   ├── zh/                      # 🇨🇳 中文内容
│   │   ├── index.md             # 中文首页
│   │   ├── what-is-data-governance/
│   │   │   ├── index.md         # 数据治理概述
│   │   │   ├── benefits.md      # 业务益处
│   │   │   └── implementation.md # 实施指南
│   │   └── cases/               # 成功案例
│   │       ├── index.md         # 案例索引
│   │       ├── bank.md
│   │       ├── hospital.md
│   │       ├── ecommerce.md
│   │       └── manufacturing.md
│   ├── en/                      # 🇺🇸 英文内容
│   │   ├── index.md
│   │   ├── what-is-data-governance.md
│   │   ├── benefits.md
│   │   ├── implementation.md
│   │   └── cases.md
│   └── index.md                 # 语言选择页
├── .github/workflows/            # GitHub Actions
├── .vscode/                      # VSCode 设置
├── DIRECTORY_STRUCTURE.md        # 目录结构说明
├── CHANGELOG.md                  # 更新日志
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 核心页面

### 📄 首页

-   英雄 banner，展示核心价值主张
-   6 个特性卡片，展示数据治理的核心优势
-   清晰的行动号召（CTA）按钮
-   统计数据和成功指标

### 📖 数据治理概述

-   详细的概念解释
-   核心原则介绍（数据质量、元数据、安全、主数据等）
-   数据治理框架和最佳实践
-   Mermaid 流程图可视化

### 💼 业务益处

-   6 大核心益处详细说明
-   量化的业务价值数据
-   实际应用场景和 ROI 案例
-   对比表格展示改善效果

### 🚀 实施指南

-   5 阶段实施路线图
-   每个阶段的详细步骤和交付物
-   关键成功因素和常见陷阱
-   实施检查清单

### 🏆 成功案例

-   4 个跨行业案例（金融、医疗、零售、制造）
-   包含挑战、解决方案、成果三要素
-   量化的业务成果数据
-   客户证言

### 📝 博客

-   行业趋势和洞察
-   "2025 年数据治理十大趋势"
-   最佳实践分享

### 📧 联系我们

-   交互式联系表单
-   多渠道联系方式
-   双语表单验证

## 🧩 自定义组件

### FeatureCard

展示功能特性，包含图标、标题和描述。

```vue
<FeatureCard
    icon="🎯"
    title="数据质量保障"
    description="建立完善的数据质量管理体系"
/>
```

### CaseCard

展示案例研究，包含行业、挑战、解决方案和成果。

```vue
<CaseCard
    industry="金融"
    title="某大型银行"
    challenge="数据分散、质量参差不齐"
    solution="建立企业级数据治理体系"
    result="数据质量提升60%"
/>
```

### ContactForm

双语联系表单，带验证功能。

```vue
<ContactForm />
```

## 🎨 自定义配置

### 主题颜色

主色调：`#007BFF`（蓝色）

在 `docs/.vitepress/theme/style.css` 中修改：

```css
:root {
    --vp-c-brand-1: #007bff;
    --vp-c-brand-2: #0069d9;
    --vp-c-brand-3: #0056b3;
}
```

### 配置文件

主配置：`docs/.vitepress/config.mts`

-   共享设置：`docs/.vitepress/config/shared.ts`
-   中文语言：`docs/.vitepress/config/zh.ts`
-   英文语言：`docs/.vitepress/config/en.ts`

## 🚀 部署

### GitHub Pages

项目包含 GitHub Actions 工作流，可自动部署。

1. 在仓库设置中启用 GitHub Pages
2. 将源设置为 "GitHub Actions"
3. 推送到 `main` 分支 - 自动部署

### 手动部署

```bash
# 构建
npm run build

# 部署 docs/.vitepress/dist 目录
```

详见 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解更多部署选项。

## 🛠️ 开发指南

### 代码风格

-   **缩进**：2 个空格
-   **行结束符**：LF
-   **TypeScript**：已启用
-   **Prettier**：自动格式化
-   **EditorConfig**：一致的样式

### 推荐的 VSCode 扩展

-   Vue Language Features (Volar)
-   TypeScript Vue Plugin
-   Prettier
-   EditorConfig

## 📚 技术栈

-   **框架**：[VitePress](https://vitepress.dev/) 1.5+
-   **UI 框架**：[Vue](https://vuejs.org/) 3.5+
-   **构建工具**：[Vite](https://vitejs.dev/)
-   **语言**：TypeScript
-   **样式**：CSS3 + CSS 变量
-   **图表**：Mermaid

## 🤝 贡献

欢迎贡献！请阅读我们的 [贡献指南](./CONTRIBUTING.md) 了解详情。

### 开发流程

1. Fork 仓库
2. 创建特性分支
3. 进行更改
4. 提交 Pull Request

## 📄 许可证

[MIT License](./LICENSE) © 2025 数据治理解决方案

## 📞 联系方式

-   📧 邮箱：contact@datagovernance.com
-   📞 电话：400-123-4567
-   🏢 地址：北京市朝阳区数据产业园 A 座 10 层

## 🙏 致谢

-   [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
-   [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
-   [Vite](https://vitejs.dev/) - 下一代前端工具

---

**使用 VitePress 用 ❤️ 构建**

# 数据治理解决方案网站

[![VitePress](https://img.shields.io/badge/VitePress-1.5.0-brightgreen.svg)](https://vitepress.dev/)
[![Vue](https://img.shields.io/badge/Vue-3.5.0-brightgreen.svg)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## 🛠️ 开发指南

### 代码风格

-   **缩进**：4 个空格
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

## 🙏 致谢

-   [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
-   [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
-   [Vite](https://vitejs.dev/) - 下一代前端工具

---

\*\*使用 VitePress 用 ❤️ 构建

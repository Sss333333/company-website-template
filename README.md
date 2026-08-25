# 科技公司网站模板

这是一个通用的科技公司网站模板。您可以通过修改文本、图片和颜色来快速构建自己的公司网站。

该 UI 基于 [Business Tech Company UI Kit](https://www.figma.com/community/file/1286806143648573757/business-tech-company-ui-kit)。

技术栈：Next.js + Tailwind CSS，支持国际化。

## 功能特性
- 使用 Next.js TypeScript 开发
- 使用 Tailwind CSS 进行灵活和简洁的样式设计
- 纯静态页面，Lighthouse 评分优秀
- 模块化、响应式和可扩展的组件
- 基于 i18n 的国际化支持

## 代码自定义

### 主题颜色
修改 `src/styles/globals.css` 中的主题色

### 替换图片
在 `public/images/` 中替换图片

### 内容和国际化

本项目使用 [next-i18next](https://www.i18next.com/) 进行国际化处理。

#### 添加新语言

页面路径中的语言参数决定了使用的语言。如果需要添加新语言，请在 `public/locales/` 下创建相应的语言文件夹，例如：`public/locales/新语言代码`。

目前仅支持中文和英文，所有翻译文件存储在 `public/locales/zh` 和 `public/locales/en` 中。

#### 修改内容

代码中的翻译项用于查询相应的翻译文本进行显示。如需修改，可在 `public/locales/` 中找到相应的翻译文本。

在 `public/locales/en` 和 `public/locales/zh` 目录中添加或修改相应页面的翻译文件，例如：
- `public/locales/en/contact.json` 和 `public/locales/zh/contact.json` 用于联系我们页面的翻译
- `public/locales/en/about.json` 和 `public/locales/zh/about.json` 用于关于我们页面的翻译
- `public/locales/en/aboutData.json` 和 `public/locales/zh/aboutData.json` 用于关于我们页面中的员工信息翻译
- `public/locales/en/partners.json` 和 `public/locales/zh/partners.json` 用于合作伙伴页面文本的翻译
- `public/locales/en/partnersData.json` 和 `public/locales/zh/partnersData.json` 用于合作伙伴页面中合作伙伴列表的翻译
- `public/locales/en/contact.json` 和 `src/pages/en/contact.tsx` 用于联系我们页面的翻译
- `public/locales/en/about.json` 和 `src/pages/en/about.tsx` 用于关于我们页面的翻译
- `public/locales/en/partners.json` 和 `src/pages/en/partners.tsx` 用于合作伙伴页面的翻译
- `public/locales/en/news.json` 和 `src/pages/en/news.tsx` 用于新闻中心页面的翻译
- `public/locales/en/projects.json` 和 `public/locales/zh/projects.json` 用于项目页面中项目列表的翻译

请确保每个页面的翻译文件都包含相应的翻译内容，以便在不同语言环境中正确显示。

## 环境变量

### Web3Forms 配置（联系表单）

本模板使用 Web3Forms 实现联系表单功能。要启用联系表单的邮件发送：

1. **获取 Web3Forms API 密钥**：
   - 访问 [Web3Forms](https://web3forms.com/)
   - 点击 "Get Access Key"
   - 输入您的电子邮件地址
   - 检查您的电子邮件以获取 API 密钥

2. **配置环境变量**：
   在项目根目录创建 `.env.local` 文件并添加：
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key_here
   ```

3. **测试联系表单**：
   - 启动开发服务器：`npm run dev`
   - 访问联系页面
   - 填写并提交表单
   - 检查是否收到电子邮件

> 注意：Web3Forms 平台具有反垃圾邮件机制，请使用真实姓名和电子邮件进行测试。此外，请模拟真实场景来发送内容，避免编写明显的垃圾邮件内容。

### Plasmic CMS API 配置

本模板的新闻页面使用 Plasmic CMS API 进行内容管理。

> 如果不需要此功能及其相关页面，可以将相应的环境变量设置为 `ignore`。项目将自动跳过所有新闻相关页面和链接。

Plasmic CMS API 配置和文档：https://docs.plasmic.app/learn/plasmic-cms-api-reference/

该模板使用国际化，因此文章内容也需要相应的多语言版本。您需要在 Plasmic 设置页面上配置 `Locales`：
![](https://cdnstatic.tencentcs.com/edgeone/pages/docs/tech-company-website-template-doc1.png)

返回 Model 页面创建 News 数据结构，详情如下：
![](https://cdnstatic.tencentcs.com/edgeone/pages/docs/tech-company-website-template-doc2.png)

## 本地开发

安装依赖：`npm install`

本地调试：`npm run dev`

## 部署

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=tech-company-website-template)

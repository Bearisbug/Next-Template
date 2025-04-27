# <img src="https://i.imgur.com/iUTRSbw.png" width=20> 虫の模版

该模板为本虫使用的 Next.js 启动模板，内置了 TailwindCSS v3、React 18、Axios、Framer Motion、Lucide 图标、React Query 等常用工具库。你可以基于此模板快速搭建现代化的前端项目。

---

## 前置要求

* ​**Node.js**​（建议版本 ≥ 18）
* ​**npm**​、**pnpm** 或 **yarn**

---

## 相关技术库

[![Static Badge](https://img.shields.io/badge/Next.js-000000?style=social&logo=next.js&logoColor=%23000000)](https://nextjs.org/) [![Static Badge](https://img.shields.io/badge/React-61DAFB?style=social&logo=react&logoColor=%2361DAFB)](https://reactjs.org/) [![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=social&logo=tailwindcss&logoColor=%2306B6D4)](https://tailwindcss.com/) [![Static Badge](https://img.shields.io/badge/Axios-5A29E4?style=social&logo=axios&logoColor=%235A29E4)](https://axios-http.com/) [![Static Badge](https://img.shields.io/badge/React%20Query-FF4154?style=social&logo=react-query&logoColor=%23FF4154)](https://tanstack.com/query/latest) [![Static Badge](https://img.shields.io/badge/Framer%20Motion-0055FF?style=social&logo=framer&logoColor=%230055FF)](https://www.framer.com/motion/)

---

## 快速开始

1. **克隆项目仓库**
   打开终端，执行以下命令：
   
   ```bash
   git clone https://github.com/Bearisbug/Next-Template.git
   cd Next-Template
   ```
2. **安装依赖**
   使用 npm、pnpm 或 yarn 安装项目依赖：
   
   ```bash
   pnpm install
   # 或者
   npm install
   # 或者
   yarn install
   ```
3. **启动开发服务器**
   安装完成后，启动开发服务器：
   
   ```bash
   pnpm dev
   # 或者
   npm run dev
   # 或者
   yarn dev
   ```
   
   启动后浏览器访问 [http://localhost:3000](http://localhost:3000/)，即可开始开发。

---

## 项目结构

```
next-template/
├── public/              # 静态资源目录（图片、图标等）
├── src/                 # 源代码目录
│   ├── lib/             # 公共方法封装（如 axios 实例）
│   └── app/             # Next.js App Router 页面目录
├── components.json      # MagicUI 组件管理文件
├── next.config.mjs      # Next.js 配置文件
├── tsconfig.json        # TypeScript 配置文件
├── tailwind.config.ts   # TailwindCSS 配置文件
├── postcss.config.mjs   # PostCSS 配置文件
├── package.json         # 项目依赖及脚本配置
└── README.md            # 本文档
```

---

## 注意事项

* 本模板基于 **Next.js App Router（app目录）** 架构。
* 已内置常用开发工具，如 ​**TailwindCSS 原子化 CSS**​、​**Framer Motion 动效**​、​**Axios请求封装**​、​**React Query 状态管理**​、**Lucide图标库** 等。
* 如需扩展功能（例如 i18n 国际化、Auth 登录认证、MDX内容渲染等），可按需自行集成。
* 推荐使用 **pnpm** 作为包管理器（安装速度更快，占用更少空间）。
* 若在开发过程中遇到问题或有优化建议，欢迎提出，一起完善模板。

---

# 📢 小提示

该模板持续维护中，后续会根据实际开发需求逐步添加更多实用功能模块，如权限管理、主题切换、图片上传组件等。
**欢迎 Star！** ✨


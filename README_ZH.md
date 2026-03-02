# Broxy

将任意网页变成 MCP 服务器，让 AI 助手直接控制浏览器。

## 什么是 Broxy？

Broxy 可以将任意网页转换为 MCP（模型上下文协议）服务器，让 Claude、Cursor 等 AI 助手直接与网页交互和控制。这为自动化操作开辟了无限可能，无需依赖传统 API。

## 功能特性

- **对外接口** - 在网页上执行 JavaScript，暴露 API 供外部调用
- **AI 联动** - 完整支持 MCP，让 Claude/Cursor 直接操控浏览器
- **网页自动化** - 模拟输入、点击、请求，自动化任意网页

## 使用场景

- **AI 自动化操作** - 让 Claude/Cursor 自动填写表单、提交报告、预订会议室
- **网页数据监控** - 实时监控价格、股票行情、竞品数据
- **无 API 变 API** - 将没有开放 API 的网站转换为可调用接口

## 安装方法

### 网站开发者

只需在网站中添加一行代码：

```html
<script src="https://broxy.dev/assets/broxy-v1.user.js"></script>
```

访客即可立即使用 Broxy 服务，无需安装任何扩展。

### 普通用户

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击[这里](https://broxy.dev/assets/broxy-v1.user.js)添加 Broxy 脚本
3. 打开任意网站，点击右下角的 Broxy 浮动按钮进行配置

## 工作原理

```
用户 ⇄ AI 客户端 (Claude/Cursor) ⇄ Broxy ⇄ 网页
```

1. 用户与 AI 助手交互
2. AI 通过 MCP 向 Broxy 发送命令
3. Broxy 在目标网页上执行 JavaScript
4. 结果返回给 AI 助手

## 全局 API

Broxy 加载后，会暴露全局 `BroxyDev` 对象：

```javascript
// 主题
BroxyDev.getTheme()           // 'light' | 'dark'
BroxyDev.setTheme('dark')
BroxyDev.toggleTheme()

// 语言
BroxyDev.getLang()            // 'zh' | 'en'
BroxyDev.setLang('en')
BroxyDev.toggleLang()

// 设置
BroxyDev.getSettings()        // { theme, lang }

// 浏览器信息
BroxyDev.getBrowserInfo()     // { userAgent, platform, url, ... }
```

## 配置说明

Broxy 使用配置系统来定义路由和工具：

```javascript
window.__BROXY_INIT_DATA__ = {
  version: "1.0",
  data: {
    routes: [...],      // REST API 端点
    tools: [...],       // MCP 工具
    mcpConfig: {...},   // MCP 服务器配置
    initScript: ""      // 自定义初始化脚本
  }
}
```

### 路由 (Routes)

定义自定义 API 端点：

```javascript
{
  name: "getTheme",
  pattern: "/theme",
  method: "get",
  handler: "async (method, path, query, body, headers) => { ... }",
  enabled: true
}
```

### MCP 工具 (Tools)

定义供 AI 助手使用的工具：

```javascript
{
  name: "setTheme",
  pattern: "/mcp/setTheme",
  description: "设置网站主题",
  handler: "async ({ theme }) => { ... }",
  inputSchema: {
    type: "object",
    properties: {
      theme: { type: "string", description: "dark | light" }
    },
    required: ["theme"]
  },
  enabled: true
}
```

## 本地开发

这是一个静态网站，无需构建系统。本地预览方式：

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然后在浏览器中打开 `http://localhost:8000`。

## 项目结构

```
www/
├── index.html              # 主页面
├── script.js               # 核心功能
├── i18n.js                 # 国际化
├── styles.css              # 样式
└── assets/
    ├── broxy-v1.user.js    # Tampermonkey 脚本
    ├── data.js             # 默认配置
    └── logo.png            # Logo 图片
```

## 浏览器支持

- 支持 ES6+ 的现代浏览器
- Chrome、Firefox、Safari、Edge（最新版本）

## 许可证

MIT License

## 相关链接

- 官网：[https://broxy.dev](https://broxy.dev)
- Tampermonkey：[https://www.tampermonkey.net](https://www.tampermonkey.net)

window.__BROXY_INIT_DATA__ = {
  "version": "1.0",
  "exportTime": "2026-02-28T19:45:23.751Z",
  "source": "broxy.dev",
  "data": {
    "routes": [
      {
        "id": "89913253-4b15-4d57-a443-cbbfeb965906",
        "name": "getTheme",
        "pattern": "/theme",
        "method": "get",
        "description": "获取页面设置的主题",
        "handler": "async (method, path, query, body, headers) => {\n  return {\n    theme: BroxyDev.getTheme()\n  }\n}",
        "enabled": true
      },
      {
        "id": "6d91a0a2-0116-4eb7-aba4-d94872e8a3ff",
        "name": "getSettings",
        "pattern": "/settings",
        "method": "get",
        "description": "获取页面设置",
        "handler": "async (method, path, query, body, headers) => {\n  return BroxyDev.getSettings()\n}",
        "enabled": true
      },
      {
        "id": "a1996c3b-631d-45e9-9aaf-30bb5226e0ae",
        "name": "setTheme",
        "pattern": "/theme",
        "method": "post",
        "description": "设置路由，body.theme=dark|light",
        "handler": "async (method, path, query, body, headers) => {\n  try {\n    const { theme } = body;\n    BroxyDev.setTheme(theme);\n    return {\n      theme,\n      success: true\n    }\n  } catch (e) {\n    return {\n      error: e,\n      body,\n      success: false\n    }\n  }\n}",
        "enabled": true
      },
      {
        "id": "c8eadfcb-21e0-4782-8a97-d0634c070630",
        "name": "setLang",
        "pattern": "/lang",
        "method": "post",
        "description": "设置页面语言，body.lang=zh|en",
        "handler": "async (method, path, query, body, headers) => {\n  try {\n    const { lang } = body;\n    BroxyDev.setLang(lang);\n    return {\n      lang,\n      success: true\n    }\n  } catch (e) {\n    return {\n      error: e,\n      body,\n      success: false\n    }\n  }\n}",
        "enabled": true
      },
      {
        "id": "7e7be472-71a6-4a38-ace8-dcd6fcb80004",
        "name": "info",
        "pattern": "/info",
        "method": "get",
        "description": "获取页面信息",
        "handler": "async (method, path, query, body, headers) => {\n  return BroxyDev.getBrowserInfo();\n}",
        "enabled": true
      }
    ],
    "tools": [
      {
        "id": "028bdc61-c776-4e92-9b2f-733e2fdd5653",
        "name": "setTheme",
        "pattern": "/mcp/setTheme",
        "description": "Set the website theme",
        "handler": "async ({ theme }) => {\n  BroxyDev.setTheme(theme);\n  return {\n    success: true,\n    theme: BroxyDev.getTheme()\n  }\n}",
        "inputSchema": {
          "type": "object",
          "properties": {
            "theme": {
              "type": "string",
              "description": "Theme name, options: dark | light"
            }
          },
          "required": [
            "theme"
          ]
        },
        "enabled": true
      },
      {
        "id": "27edca63-c97f-40fc-b05a-f1cd1b714a04",
        "name": "setLang",
        "pattern": "/mcp/setLang",
        "description": "Set the website display language",
        "handler": "async ({ lang }) => {\n  BroxyDev.setLang(lang)\n  return {\n    success: true,\n    lang: BroxyDev.getLang()\n  }\n}",
        "inputSchema": {
          "type": "object",
          "properties": {
            "lang": {
              "type": "string",
              "description": "Language name, options: zh | en"
            }
          },
          "required": [
            "lang"
          ]
        },
        "enabled": true
      },
      {
        "id": "7bd3d1ac-02d3-44e7-b6a5-16013fb43571",
        "name": "getInfo",
        "pattern": "/mcp/getInfo",
        "description": "Get the webpage infomations",
        "handler": "async () => {\n  return BroxyDev.getBrowserInfo()\n}",
        "inputSchema": {
          "type": "object",
          "properties": {},
          "required": []
        },
        "enabled": true
      }
    ],
    "mcpConfig": {
      "name": "BroxyDev Demo",
      "version": "1.0.0"
    },
    "initScript": "console.log('Hello world!')",
    "authToken": "",
    "authEnabled": false
  }
}

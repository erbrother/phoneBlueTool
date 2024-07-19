# Vue 3 + Vite
通过蓝牙连接手机 实现电话短信通知功能

## 创建vite项目

```sh
yarn create vite electron-vite --template
```

## 添加electron依赖

```sh
cnpm i electron electron-builder wait-on cross-env concurrently -D -S
```

package.json文件内容：
```package.json
{
  "name": "electron-vite",
  "private": true,
  "version": "0.0.0",
  "main": "electron/main.js",
  "scripts": {
    "start": "concurrently \"npm run dev\" \"npm run electron\"",
    "dev": "vite",
    "build": "vite build && electron-builder",
    "preview": "vite preview",
    "electron:build": "cross-env NODE_ENV=production vite build && electron-builder build",
    "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ."
  },
  "build": {
    "productName": "electron-vite",
    "copyright": "Copyright © 2022 ok",
    "mac": {
      "category": "public.app-category.productivity"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    },
    "files": [
      "dist/**/*",
      "electron/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "dist_electron"
    }
  },
  "dependencies": {
    "vue": "^3.4.31"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.5",
    "concurrently": "^8.2.2",
    "cross-env": "^7.0.3",
    "electron": "^31.2.1",
    "electron-builder": "^24.13.3",
    "vite": "^5.3.4",
    "wait-on": "^7.2.0"
  }
}
```

打包过程中添加代理 （clash）,最好使用管理员运行命令行

:7890 为clash代理端口
windows
```cmd
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
```
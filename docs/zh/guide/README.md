# 如何使用 Vuepress

## 项目结构
```
├─docs
│  ├─.vuepress                --vuepress相关文件路径 (主要配置)
│  │  ├─dist                  --build 打包生成路径 (自定义)
│  │  ├─nav                   --导航条配置 (自定义)
│  │  │  └─ zh.js             --自定义导航条配置
│  │  ├─plugins               --插件配置 (自定义)
│  │  │  └─ pluginsConf.js    --自定义插件配置
│  │  ├─sidebar               --侧边栏配置 (自定义)
│  │  │  └─ menu.js           --自定义侧边栏配置
│  │  ├─public                --静态资源存放
│  │  └─config.js             --网站必要的配置文件 (主要配置)
│  ├─changelog                --自定义日志模块
│  │    └─......
│  ├─docker                   --自定义Docker模块
│  │    └─......
│  └─guide                    --自定义指南模块
│       └─......        
├─README.md                   -- 自定义首页信息 (主要配置)
├─.gitignore                  -- 忽略上传文件
├─deploy.sh                   -- 自定义打包部署命令行脚本 (主要配置)
├─package.json                -- 脚本配置文件 (主要配置)
```

::: warning 注意区分
Vuerpess [0.x](https://vuepress.vuejs.org/zh/)版本和 [1.x](https://v1.vuepress.vuejs.org/zh/) 版本 依赖下载命令不同

基于 node.js >= 8+ 安装  且项目基于 1.x 版 搭建 

如果你的现有项目依赖了 webpack 3.x，推荐使用 [Yarn](https://yarnpkg.com/en/) 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
:::

## 全局安装
如果你只是想尝试一下 VuePress，你可以全局安装它：

```bash
# 安装
yarn global add vuepress@next # 或者：npm install -g vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

## 现有项目
如果你想在一个现有项目中使用 VuePress，同时想要在该项目中管理文档，则应该将 VuePress 安装为本地依赖。作为本地依赖安装让你可以使用持续集成工具，或者一些其他服务（比如 Netlify）来帮助你在每次提交代码时自动部署。
```bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress@next # 或者：npm install -D vuepress@next

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```

## 配置 package.json
在项目根路径下里执行命令:
```bash
# 生成配置 package.json 文件
yarn init
```

接着，在 `package.json` 里加一些脚本，如下：

```json
{
  "name": "vuepress",
  "version": "1.0.0",
  "description": "vuepress",
  "main": "index.js",
  "repository": "https://github.com/P-Sansei/vuepress.git",
  "author": "penghe.yu <yph0228@163.com>",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "deploy.sh"
  },
  "devDependencies": {
    "@vuepress/plugin-back-to-top": "^1.0.0-alpha.47",
    "vuepress": "^1.0.0-alpha.48"
  }
}
```

添加好之后，接着执行如下命令添加项目依赖
```bash
# 根据 package.json 的配置 生成 node_modules
yarn install
```

## 启动测试
```bash
# 启动命令
yarn dev

# 生成静态的 HTML 文件，运行
yarn build
```

## 部署到 GitHub Pages
在项目根路径下创建 `deploy.sh` **bat文件**, 文件配置如下:
``` bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/P-Sansei/vuepress.git master:gh-pages

cd -
```
接着在项目根路径下执行如下命令：
```bash
# 部署
yarn deploy
```

默认情况下，文件将会被生成在 `.vuepress/dist`，你也可以通过 `.vuepress/config.js` 中的 `dest` 字段来修改，生成的文件可以部署到任意的静态文件服务器上

**[更多内容参考官网](https://vuepress.vuejs.org/zh/)**
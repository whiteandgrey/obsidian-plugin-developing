# Obsidian 示例插件

这是一个 Obsidian.md 的示例插件，根据 Obsidian 官方插件开发文档创建。它展示了 Obsidian 插件的基本结构和功能。

## 功能特性

- 在 Obsidian 左侧边栏（功能区）添加一个骰子图标
- 点击骰子图标时显示 "Hello, world!" 通知

## 安装方法

### 从 GitHub 安装

1. 从 [Releases](https://github.com/your-username/obsidian-sample-plugin/releases) 页面下载最新版本
2. 将 zip 文件解压到你的 Obsidian 库的 `.obsidian/plugins` 目录
3. 将解压后的文件夹重命名为 `obsidian-sample-plugin`
4. 重启 Obsidian
5. 进入设置 → 社区插件，启用 "Sample Plugin"

### 从源代码安装

1. 将此仓库克隆到你的 Obsidian 库的 `.obsidian/plugins` 目录：
   ```bash
   git clone https://github.com/your-username/obsidian-sample-plugin.git
   ```
2. 进入插件目录：
   ```bash
   cd obsidian-sample-plugin
   ```
3. 安装依赖：
   ```bash
   npm install
   ```
4. 构建插件：
   ```bash
   npm run build
   ```
5. 重启 Obsidian
6. 进入设置 → 社区插件，启用 "Sample Plugin"

## 使用方法

1. 在左侧边栏（功能区）查找骰子图标
2. 点击图标显示 "Hello, world!" 通知

## 开发指南

### 先决条件

- Node.js (v14+)
- npm
- Git

### 开始开发

1. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/obsidian-sample-plugin.git
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动开发服务器（更改时自动重建）：
   ```bash
   npm run dev
   ```
4. 修改 `main.ts` 文件
5. 使用命令面板中的 "Reload app without saving" 命令重新加载插件

## 项目结构

```
obsidian-sample-plugin/
├── main.ts          # 主要插件代码
├── main.js          # 编译后的插件（自动生成）
├── manifest.json    # 插件元数据
├── package.json     # 项目依赖和脚本
├── tsconfig.json    # TypeScript 配置
└── README.md        # 此文件
```

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 许可证

[MIT](LICENSE)

---

# Obsidian Sample Plugin

This is a sample plugin for Obsidian.md, created following the official Obsidian plugin development documentation. It demonstrates the basic structure and functionality of an Obsidian plugin.

## Features

- Adds a dice icon to the Obsidian ribbon (left sidebar)
- Displays a "Hello, world!" notification when the dice icon is clicked

## Installation

### From GitHub

1. Download the latest release from the [Releases](https://github.com/your-username/obsidian-sample-plugin/releases) page
2. Extract the zip file to your Obsidian vault's `.obsidian/plugins` directory
3. Rename the extracted folder to `obsidian-sample-plugin`
4. Restart Obsidian
5. Go to Settings → Community plugins and enable "Sample Plugin"

### From Source

1. Clone this repository to your Obsidian vault's `.obsidian/plugins` directory:
   ```bash
   git clone https://github.com/your-username/obsidian-sample-plugin.git
   ```
2. Navigate to the plugin directory:
   ```bash
   cd obsidian-sample-plugin
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the plugin:
   ```bash
   npm run build
   ```
5. Restart Obsidian
6. Go to Settings → Community plugins and enable "Sample Plugin"

## Usage

1. Look for the dice icon in the left sidebar (ribbon)
2. Click the icon to display the "Hello, world!" notification

## Development

### Prerequisites

- Node.js (v14+)
- npm
- Git

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/obsidian-sample-plugin.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (auto-rebuilds on changes):
   ```bash
   npm run dev
   ```
4. Make changes to `main.ts`
5. Reload the plugin in Obsidian using the "Reload app without saving" command from the Command Palette

## Project Structure

```
obsidian-sample-plugin/
├── main.ts          # Main plugin code
├── main.js          # Compiled plugin (generated)
├── manifest.json    # Plugin metadata
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── README.md        # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

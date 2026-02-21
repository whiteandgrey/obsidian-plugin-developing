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

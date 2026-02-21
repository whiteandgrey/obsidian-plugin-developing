"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class SamplePlugin extends obsidian_1.Plugin {
    async onload() {
        console.log('Loading sample plugin');
        // Add a ribbon icon
        this.addRibbonIcon('dice', 'Greet', () => {
            new obsidian_1.Notice('Hello, world!');
        });
    }
    async onunload() {
        console.log('Unloading sample plugin');
    }
}
exports.default = SamplePlugin;

import { Notice, Plugin } from 'obsidian';

export default class SamplePlugin extends Plugin {
  async onload() {
    console.log('Loading sample plugin');

    // Add a ribbon icon
    this.addRibbonIcon('dice', 'Greet', () => {
      new Notice('Hello, world!');
    });
  }

  async onunload() {
    console.log('Unloading sample plugin');
  }
}
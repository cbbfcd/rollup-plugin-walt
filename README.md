# rollup-plugin-walt

[![Greenkeeper badge](https://badges.greenkeeper.io/cbbfcd/rollup-plugin-walt.svg)](https://greenkeeper.io/)

[inspired by this 👉 webpack-walt-loader](https://github.com/ballercat/walt/blob/master/packages/walt-loader)

This is a plugin for use with walt.

## about walt 👇

> ⚡️ Walt is a JavaScript-like syntax for WebAssembly text format ⚡️ https://ballercat.github.io/walt/

## Installation

```bash
npm install --save-dev rollup-plugin-walt
```
⚠️ should add walt-compiler too!!

## Usage

```js
// rollup.config.js
import walt from 'rollup-plugin-walt';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },

  plugins: [
    walt()
  ]
};
```


## License

MIT

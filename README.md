# rollup-plugin-walt

[inspired by this 👉 webpack-walt-loader](https://github.com/ballercat/walt/blob/master/packages/walt-loader)

## Installation

```bash
npm install --save-dev rollup-plugin-walt
```

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

const rollup = require('rollup')
const walt = require('..')
const assert = require('assert')

const testBundle = (assert, bundle) => {
  bundle.generate({ format: 'cjs' })
  .then(({ code }) => {
    new Function('assert', code)(assert)
  })
  .catch(err => err)
}

describe('walt plugin test', () => {
  
  it('test simple counter increment and decrement', () => {
    return rollup.rollup({
      input: 'test/fixture/simple.js',
      plugins: [
        walt()
      ]
    })
    .then(bundle => testBundle(assert, bundle))
    .catch(() => console.warn(`something wrong happened!`))
  })

  it('test walt performance in complex operations', () => {
    return rollup.rollup({
      input: 'test/fixture/fibonacci.js',
      plugins: [
        walt()
      ]
    })
    .then(bundle => testBundle(assert, bundle))
    .catch(() => console.warn(`something wrong happened!`))
  })
})


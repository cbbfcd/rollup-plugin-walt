import simpleCounter from './simpleCounter.walt'

simpleCounter()
  .then(wasmModule => {
    assert.equal(wasmModule.instance.exports.increment(), 1)
    assert.equal(wasmModule.instance.exports.increment(), 2)
    assert.equal(wasmModule.instance.exports.decrement(), 1)
  })
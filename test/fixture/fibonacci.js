import fibonacciModule from './fibonacci.walt'

fibonacciModule()
  .then(wasmModule => {
    assert.equal(wasmModule.instance.exports.fibonacci(40), 102334155)
  })
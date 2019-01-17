const {
  instantiate,
  Memory,
  Table
} = WebAssembly;

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;
export default WebAssemblyModule;
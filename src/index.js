import fs from 'fs'
import { compile } from 'walt-compiler'

const getBufferStr = buffer => {
	let result = []
	for(let i = 0, len = buffer.length; i < len; i++){
		result.push(`${buffer[i]},`)
	}
	return result.join('')
}

const makeWebAssemBlyModule = buffer => {
	return `
		var buffer = new ArrayBuffer(${buffer.length});
		var uint8 = new Uint8Array(buffer);
		uint8.set([${getBufferStr(buffer)}]);

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
			return instantiate(buffer, deps)
		}
		
		module.exports = WebAssemblyModule;
		export default WebAssemblyModule;
	`
}

export default function walt (options = {}) {
	
	options = Object.assign({}, options)

	return {
		name: 'walt',

		load(id){
			if(/\.walt$/.test(id)){
				return new Promise((resolve, reject) => {
          fs.readFile(id, (error, buf) => {
            if (error != null) {
              reject(error);
						}
						const buffer = compile(buf.toString()).buffer()
						const out = makeWebAssemBlyModule(buffer)
            resolve({
							code: out,
							map: { mappings: '' }
						})
          })
        })
			}
			return null
		}
	};
}

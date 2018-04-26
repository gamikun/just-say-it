const justsayit = require('./index.js')
const server = justsayit(1522, req => {
	return {hola: 'mundo'}
})
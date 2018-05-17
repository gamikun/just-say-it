const justsayit = require('./index.js')
const server = justsayit(1522, req => {
	return {'hello': 'world', 'count': 123}
})
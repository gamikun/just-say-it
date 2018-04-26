const http = require('http')

function JustSayIt(port, callback) {
  this.server = http.createServer(function(req, res) {
    const data = callback(req)
    const serialized = JSON.stringify(data)
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Length', serialized.length.toString())
    res.end(serialized)
  })
  this.server.listen(port)
}

function just_say_it(post, callback) {
  return new JustSayIt(post, callback)
}

JustSayIt.prototype.stop = function() {
  this.server.close()
}

module.exports = just_say_it
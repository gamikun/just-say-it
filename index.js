const http = require('http')

function JustSayIt(port, callback) {
  this.server = http.createServer(function(req, res) {
    const data = callback(req)
    let serialized
    let mime

    if (typeof(data) === 'object') {
      serialized = JSON.stringify(data)
      mime = 'application/json'
    } else {
      mime = 'Content-Type', 'text/plain; charset=utf-8'
      serialized = data
    }
    
    res.setHeader('Content-Type', mime)
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
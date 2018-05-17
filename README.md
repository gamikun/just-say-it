When you need a server that only needs an endpoint and returns a single object.

## Example

    const justsayit = require('justsayit')
     
    justsayit(1522, req => {
        return {'hello', 'world'}
    })

That's it. 1522 is the port, and the {'hello': 'world'} the JSON response.

You can also return a `string` in the callback instead of an object.


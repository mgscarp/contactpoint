# ContactPoint

The contact point model for a business.

### Check:
- <https://schema.org/ContactPoint>

## Installation

```sh
$ npm install mgscarp-contactpoint --save
```

## Usage

~~~js
var ContactPoint = require('mgscarp-contactpoint');

var data = {
        email: anna@sedokova.com,
        telephone: '+17079687439'
    };

var point = new ContactPoint(data);
~~~

## Tests

Run tests with Mocha

~~~sh
$ make test
~~~


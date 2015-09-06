# array-to-hash [![Build Status](https://travis-ci.org/bendrucker/array-to-hash.svg?branch=master)](https://travis-ci.org/bendrucker/array-to-hash)

> Copy array values as hash keys


## Install

```
$ npm install --save array-to-hash
```


## Usage

```js
var arrayToHash = require('array-to-hash')

arrayToHash(['foo', 'bar'])
//=> {foo: undefined, bar: undefined}
```

## API

#### `arrayToHash(array)` -> `object`

Returns an object. The object has no prototype, so inherited object methods like `hasOwnProperty` will be unavailable.

##### array

*Required*  
Type: `array[strings]`

An array of strings to use as hash keys.


## License

MIT © [Ben Drucker](http://bendrucker.me)

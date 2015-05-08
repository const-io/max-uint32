Max Uint32
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Maximum unsigned 32-bit integer.


## Installation

``` bash
$ npm install compute-const-max-uint32
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var MAX_UINT32 = require( 'compute-const-max-uint32' );
```

#### MAX_UINT32

Maximum unsigned 32-bit integer. 

``` javascript
MAX_UINT32 === Math.pow( 2, 32 ) - 1;
```


## Notes

-	`MAX_UINT32` is the maximum `array` length.


## Examples

``` javascript
var MAX_UINT32 = require( 'compute-const-max-uint32' );

console.log( MAX_UINT32 );
// returns 4294967295
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-const-max-uint32.svg
[npm-url]: https://npmjs.org/package/compute-const-max-uint32

[travis-image]: http://img.shields.io/travis/compute-io/const-max-uint32/master.svg
[travis-url]: https://travis-ci.org/compute-io/const-max-uint32

[coveralls-image]: https://img.shields.io/coveralls/compute-io/const-max-uint32/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/const-max-uint32?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/const-max-uint32.svg
[dependencies-url]: https://david-dm.org/compute-io/const-max-uint32

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/const-max-uint32.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/const-max-uint32

[github-issues-image]: http://img.shields.io/github/issues/compute-io/const-max-uint32.svg
[github-issues-url]: https://github.com/compute-io/const-max-uint32/issues

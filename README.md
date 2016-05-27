HODOR
===

> The constant HODOR [const-hodor].


## Installation

``` bash
$ npm install const-hodor
```


## Usage

``` javascript
var HODOR = require( 'const-hodor' );
```

#### HODOR

The all-important constant "HODOR".

``` javascript
HODOR === "HODOR";
```


## Examples

``` javascript
var HODOR = require( 'const-hodor' );

console.log( HODOR );
// returns "HODOR"
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Inspired by:

The [Compute.io][compute-io] Authors.


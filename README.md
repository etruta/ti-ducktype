# Titanium ducktype

[![Available on gitTio](https://img.shields.io/badge/available_on-gitTio-00B4CC.svg?style=flat-square)](http://gitt.io/component/ducktype)

Titanium CommonJS module of Flexible data validation using a ducktype interface.

More details in original [node module](https://github.com/josdejong/ducktype).


## Install

Install using [gittio](http://gitt.io/)

```sh
$ gittio install ducktype
```


## Usage

### Basic types
```js
var ducktype = require('ducktype');

ducktype.number.test(2.3);      // true
ducktype.number.test('hi');     // false
```

### Structured objects
```js
var ducktype = require('ducktype');

var person = ducktype({
  name: String,
  age: Number
});

person.test({name: 'John', age: 34}); // true
person.test({name: 'Mary'});          // false
```


## Credits
[@josdejong](https://github.com/josdejong/ducktype) for create the original node module
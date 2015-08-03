# jstransformer-string-template

[`String-Template`](http://npm.im/string-template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-string-template/master.svg)](https://travis-ci.org/jstransformers/jstransformer-string-template)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-string-template/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-string-template?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-string-template/master.svg)](http://david-dm.org/jstransformers/jstransformer-string-template)
[![NPM version](https://img.shields.io/npm/v/jstransformer-string-template.svg)](https://www.npmjs.org/package/jstransformer-string-template)

## Installation

    npm install jstransformer-string-template

## API

```js
var string-template = require('jstransformer')(require('jstransformer-string-template'))

string-template.render('Hello, {name}!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT

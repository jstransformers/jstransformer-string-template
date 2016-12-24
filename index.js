'use strict'

var compile = require('string-template/compile')

exports.name = 'string-template'
exports.outputFormat = 'html'

exports.compile = function (str) {
  var template = compile(str)
  return function (locals) {
    return template(locals)
  }
}

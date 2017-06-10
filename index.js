'use strict'

const compile = require('string-template/compile')

exports.name = 'string-template'
exports.outputFormat = 'html'

exports.compile = function (str) {
  const template = compile(str)
  return locals => {
    return template(locals)
  }
}

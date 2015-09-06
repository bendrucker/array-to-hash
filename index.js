'use strict'

var assert = require('assert-ok')
var assertArray = require('assert-array')

module.exports = function arrayToHash (array) {
  assertArray(array)
  var hash = Object.create(null)
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    assert(typeof value === 'string')
    hash[value] = undefined
  }
  return hash
}

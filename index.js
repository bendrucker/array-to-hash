'use strict'

var assert = require('assert-ok')
var assertArray = require('assert-array')

module.exports = function arrayToHash (array) {
  assertArray(array)
  return array.reduce((hash, value) => {
    assert(typeof value === 'string')
    hash[value] = undefined
    return hash
  }, Object.create(null))
}

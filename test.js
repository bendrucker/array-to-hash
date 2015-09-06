'use strict'

var test = require('tape')
var toHash = require('./')

test(function (t) {
  var hash = toHash(['foo', 'bar'])
  t.ok('foo' in hash)
  t.ok('bar' in hash)
  t.notOk('toString' in hash)
  t.end()
})

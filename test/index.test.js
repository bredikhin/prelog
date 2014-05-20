'use strict';

/**
 * Dependencies
 */
var should = require('should');
var Readable = require('stream').Readable;
var Writable = require('stream').Writable;
var Transform = require('stream').Transform;
var Prelog = require('../');
var prelog = new Prelog('My prefix > ');
var readable = Readable();
var writable = Writable();

readable._read = function () {
  this.push('test string');

  this.push(null);
};

writable._write = function(chunk, enc, next) {
  chunk.toString().should.be.eql('My prefix > test string');

  next();
};

describe('Prelog', function() {
  it('is a transform stream', function(done) {
    prelog.should.be.an.instanceOf(Transform);

    done();
  });
  
  it('should add prefix to each chunk of data', function(done) {
    writable.on('finish', function() {
      done();
    });

    readable.pipe(prelog).pipe(writable);
  });
});

'use strict';

/**
 * Dependencies
 */
var should = require('should');
var Transform = require('stream').Transform;
var Prelog = require('../');

describe('Prelog', function() {
  it('is a transform stream', function(done) {
    var prelog = new Prelog('My prefix > ');
    prelog.should.be.an.instanceOf(Transform);

    done();
  });
  
  it('should add prefix to each chunk of data');
});
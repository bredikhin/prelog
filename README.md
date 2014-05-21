# Prefixing Transform Stream

[![Build Status](https://travis-ci.org/bredikhin/prelog.png?branch=master)](https://travis-ci.org/bredikhin/prelog)
[![NPM version](https://badge.fury.io/js/prelog.png)](http://badge.fury.io/js/prelog)

## Installation

`npm install --save prelog`

[![NPM](https://nodei.co/npm/prelog.png)](https://nodei.co/npm/prelog/)

## Usage

```javascript
  var prelog = new Prelog('> : ');
  yourReadableStream.pipe(prelog).pipe(process.stdout);
```

This will log the data from `yourReadableStream` to `stdout` prefixing each chunk with `'> : '`.

## Contributions

* are welcome;
* should be tested;
* should follow the same coding style.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 [Ruslan Bredikhin](http://www.ruslanbredikhin.com/)

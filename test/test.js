'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var CONST = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.equal( typeof CONST, 'number', 'main export is a number' );
	t.end();
});

tape( 'the value equals 2**32 - 1', function test( t ) {
	t.equal( CONST, pow(2,32) - 1, 'equals 2**32 - 1' );
	t.end();
});
'use strict';

// MODULES //

var tape = require( 'tape' );
var HODOR = require( './../lib' );


// TESTS //

tape( 'main export is a string', function test( t ) {
	t.equal( typeof HODOR, 'string', 'main export is a number' );
	t.end();
});

tape( 'export says HODOR', function test( t ) {
	t.equal( HODOR, "HODOR", 'equals HODOR' );
	t.end();
});



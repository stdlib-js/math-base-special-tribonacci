/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var TRIBONACCI = require( './../lib/tribonacci.json' );


// VARIABLES //

var tribonacci = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( tribonacci instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tribonacci, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', opts, function test( t ) {
	var v;
	var i;

	for ( i = -1; i > -100; i-- ) {
		v = tribonacci( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'the function returns the nth Tribonacci number', opts, function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 64; i++ ) {
		v = tribonacci( i );
		t.strictEqual( v, TRIBONACCI[ i ], 'returns the '+i+'th Tribonacci number' );
	}
	t.end();
});

tape( 'if provided nonnegative integers greater than `63`, the function returns `NaN`', opts, function test( t ) {
	var i;
	var v;
	for ( i = 64; i < 500; i++ ) {
		v = tribonacci( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

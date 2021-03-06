/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var isBigInt64Array = require( '@stdlib/assert-is-bigint64array' );
var isBigInt = require( '@stdlib/assert-is-bigint' );
var GlobalBigInt64Array = require( './bigint64array.js' );


// VARIABLES //

var MAX_FLOAT64_INTEGER = '9007199254740991'; // 2^53-1
var MAX_FLOAT64_INTEGER_P2 = '9007199254740993';


// MAIN //

/**
* Tests for native `BigInt64Array` support.
*
* @returns {boolean} boolean indicating if an environment has `BigInt64Array` support
*
* @example
* var bool = hasBigInt64ArraySupport();
* // returns <boolean>
*/
function hasBigInt64ArraySupport() {
	var arr;
	if ( typeof GlobalBigInt64Array !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		arr = new GlobalBigInt64Array([
			MAX_FLOAT64_INTEGER,
			MAX_FLOAT64_INTEGER_P2
		]);
		return (
			isBigInt64Array( arr ) &&
			isBigInt( arr[ 0 ] ) &&
			arr[ 0 ].toString() === MAX_FLOAT64_INTEGER &&
			isBigInt( arr[ 1 ] ) &&
			arr[ 1 ].toString() === MAX_FLOAT64_INTEGER_P2
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return false;
	}
}


// EXPORTS //

module.exports = hasBigInt64ArraySupport;

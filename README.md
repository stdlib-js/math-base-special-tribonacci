<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Tribonacci

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the nth [Tribonacci number][tribonacci-number].

<section class="intro">

The [Tribonacci numbers][tribonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:tribonacci_sequence" align="center" raw="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" alt="Tribonacci sequence"> -->

<div class="equation" align="center" data-raw-text="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" data-equation="eq:tribonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_sequence.svg" alt="Tribonacci sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:tribonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2} + F_{n-3}" alt="Tribonacci sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2} + F_{n-3}" data-equation="eq:tribonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@3249a68fb57cd71148f87ef3b2774be70a04d80a/lib/node_modules/@stdlib/math/base/special/tribonacci/docs/img/equation_tribonacci_recurrence_relation.svg" alt="Tribonacci sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

with seed values `F_0 = 0`, `F_1 = 0`, and `F_2 = 1`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-tribonacci
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var tribonacci = require( '@stdlib/math-base-special-tribonacci' );
```

#### tribonacci( n )

Computes the nth [Tribonacci number][tribonacci-number].

```javascript
var v = tribonacci( 0 );
// returns 0

v = tribonacci( 1 );
// returns 0

v = tribonacci( 2 );
// returns 1

v = tribonacci( 3 );
// returns 1

v = tribonacci( 63 );
// returns 8607945812375585
```

If `n > 63`, the function returns `NaN`, as larger [Tribonacci numbers][tribonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = tribonacci( 64 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = tribonacci( 3.14 );
// returns NaN

v = tribonacci( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = tribonacci( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tribonacci = require( '@stdlib/math-base-special-tribonacci' );

var v;
var i;

for ( i = 0; i < 64; i++ ) {
    v = tribonacci( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-tribonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-tribonacci

[test-image]: https://github.com/stdlib-js/math-base-special-tribonacci/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-tribonacci/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-tribonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-tribonacci?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-tribonacci.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-tribonacci/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-tribonacci/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-tribonacci/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-tribonacci/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-tribonacci/main/LICENSE

[tribonacci-number]: https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math-base-special-fibonacci

<!-- </related-links> -->

</section>

<!-- /.links -->

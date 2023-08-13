# Santi's Array Shuffling Library

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/array-shuffle/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100/array-shuffle
[stars badge]: https://img.shields.io/github/stars/santi100a/array-shuffle.svg
[license badge]: https://img.shields.io/github/license/santi100a/array-shuffle.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100/array-shuffle
[npm home]: https://npmjs.org/package/@santi100/array-shuffle
[repo actions]: https://github.com/santi100a/array-shuffle/actions
[repo url]: https://github.com/santi100a/array-shuffle
[bundlephobia url]: https://bundlephobia.com/package/@santi100/array-shuffle@latest

- 🚀 Lightweight and fast^
- 👴 ES3-compliant\*
- 💻 Portable between the browser and Node.js

## What's this?

This library exports a function that shuffles the values in any array.

## Installation

- Via NPM: `npm install @santi100/array-shuffle`
- Via Yarn: `yarn add @santi100/array-shuffle`
- Via PNPM: `pnpm install @santi100/array-shuffle`

## API

- `function shuffle<T = unknown>(array: T[]): T[];`

| Name         | Type      | Description                           | Optional? | Default              |
| ------------ | --------- | ------------------------------------- | --------- | -------------------- |
| array        | `T[]`     | The array to be shuffled.             | No        | _N/A_                |
| opts         | `object`  | Optional parameters for shuffling.    | Yes       | `{ inPlace: false }` |
| opts.inPlace | `boolean` | If true, shuffles the array in place. | Yes       | `false`              |
| returns      | `T[]`     | The shuffled array.                   | No        | _N/A_                |

## Usage

```typescript
// Import the shuffle function
const shuffle = require('@santi100/array-shuffle'); // CJS
import shuffle from '@santi100/array-shuffle'; // ESM
import shuffle = require('@santi100/array-shuffle'); // TypeScript

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Shuffle the array and get a new shuffled array
const shuffledArray = shuffle(numbers);

console.log('Shuffled Array:', shuffledArray);

// Shuffle the array in-place
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(originalArray, { inPlace: true });

console.log('Original Array (Shuffled In-Place):', originalArray);

```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/array-shuffle/issues) or [pull request](https://github.com/santi100a/array-shuffle/pulls)!
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).

<sub>
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

_^The source code is just a few kilobytes in size._
</sub>

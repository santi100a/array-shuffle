"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var random_1 = require("@santi100/random-lib/cjs/random");
/**
 * Shuffles the elements of an array randomly.
 *
 * @param array - The array to be shuffled.
 * @param opts - Optional parameters for shuffling.
 * @param opts.inPlace - If true, shuffles the array in place. Default is false.
 * @returns The shuffled array.
 */
function shuffle(array, opts) {
    var _a, _b;
    if (opts === void 0) { opts = { inPlace: false }; }
    if (opts.inPlace) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = (0, random_1.random)(i + 1);
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1]; // Swap elements
        }
        return array; // Return the shuffled array (optional)
    }
    var shuffledArray = __spreadArray([], array, true); // Create a shallow copy of the array
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = (0, random_1.random)(i + 1);
        _b = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _b[0], shuffledArray[j] = _b[1]; // Swap elements
    }
    return shuffledArray; // Return the new shuffled array
}
module.exports = shuffle;

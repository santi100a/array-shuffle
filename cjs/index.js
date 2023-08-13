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
var random = require("@santi100/random-lib/cjs/random");
var assertArray = require("@santi100/assertion-lib/cjs/array");
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
function shuffle(array, opts) {
    var _a, _b;
    if (opts === void 0) { opts = { inPlace: false }; }
    assertArray(array, 'array');
    assertTypeOf(opts.inPlace, 'boolean', 'opts.inPlace');
    if (opts.inPlace) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = random(i + 1);
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1]; // Swap elements
        }
        return array; // Return the shuffled array (optional)
    }
    var shuffledArray = __spreadArray([], array, true); // Create a shallow copy of the array
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = random(i + 1);
        _b = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _b[0], shuffledArray[j] = _b[1]; // Swap elements
    }
    return shuffledArray; // Return the new shuffled array
}
module.exports = shuffle;

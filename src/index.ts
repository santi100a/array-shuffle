import { random } from '@santi100/random-lib/cjs/random';

/**
 * Shuffles the elements of an array randomly.
 * 
 * @param array - The array to be shuffled.
 * @param opts - Optional parameters for shuffling.
 * @param opts.inPlace - If true, shuffles the array in place. Default is false.
 * @returns The shuffled array.
 */
function shuffle<T = unknown>(
	array: T[],
	opts: { inPlace: boolean } = { inPlace: false }
): T[] {
	if (opts.inPlace) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = random(i + 1);
			[array[i], array[j]] = [array[j], array[i]]; // Swap elements
		}
		return array; // Return the shuffled array (optional)
	}
	const shuffledArray = [...array]; // Create a shallow copy of the array
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = random(i + 1);
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
	}
	return shuffledArray; // Return the new shuffled array
}

export = shuffle;

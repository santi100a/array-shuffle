/**
 * Shuffles the elements of an array randomly.
 *
 * @param array - The array to be shuffled.
 * @param opts - Optional parameters for shuffling.
 * @param opts.inPlace - If true, shuffles the array in place. Default is false.
 * @returns The shuffled array.
 */
declare function shuffle<T = unknown>(array: T[], opts?: {
    inPlace: boolean;
}): T[];
export = shuffle;

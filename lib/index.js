/**
 * Extracts the low byte from a given number.
 *
 * @param {number} n - The number from which to extract the low byte.
 * @param {boolean} [bigEndian=false] - If true, extracts the high byte instead.
 * @returns {number} The extracted byte.
 */
function lowByte(n, bigEndian = false) {
    if (bigEndian) {
        return n >> 8;
    }
    return n & 0xff;
}

/**
 * Extracts the high byte from a 16-bit number.
 *
 * @param {number} n - The 16-bit number from which to extract the high byte.
 * @param {boolean} [bigEndian=false] - If true, treats the number as big-endian and returns the low byte instead.
 * @returns {number} The high byte of the given 16-bit number, or the low byte if bigEndian is true.
 */
function highByte(n, bigEndian = false) {
    if (bigEndian) {
        return n & 0xff;
    }
    return n >> 8;
}

/**
 * Checks if a number is a valid unsigned 16-bit integer.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if the number is between 0 and 65535 (inclusive), otherwise false.
 */
function isvalidU16(n) {
    return n >= 0 && n <= 0xffff;
}

/**
 * Checks if a number is a valid signed 16-bit integer.
 *
 * A signed 16-bit integer ranges from -32768 to 32767.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is within the signed 16-bit integer range, otherwise false.
 */
function isValidS16(n) {
    return n >= -0x8000 && n <= 0x7fff;
}

/**
 * Checks if a given number is a valid unsigned 32-bit integer.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is between 0 and 0xffffffff (inclusive), otherwise false.
 */
function isValidU32(n) {
    return n >= 0 && n <= 0xffffffff;
}

/**
 * Checks if a number is a valid signed 32-bit integer.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if the number is within the range of a signed 32-bit integer, otherwise false.
 */
function isValidS32(n) {
    return n >= -0x80000000 && n <= 0x7fffffff;
}

export { highByte, lowByte, isvalidU16, isValidS16, isValidU32, isValidS32 };

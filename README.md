# BinBench

## Module Description

The `lib/index.js` module provides utility functions for working with 16-bit integers. These functions include extracting bytes from a 16-bit number and validating whether a number falls within the range of valid 16-bit integers, both signed and unsigned.

### Exported Functions

#### `lowByte(n, bigEndian = false)`

Extracts the low byte from a given number.

- **Parameters:**
  - `n` (number): The number from which to extract the low byte.
  - `bigEndian` (boolean, optional): If true, extracts the high byte instead. Default is `false`.
- **Returns:** The extracted byte (number).

#### `highByte(n, bigEndian = false)`

Extracts the high byte from a 16-bit number.

- **Parameters:**
  - `n` (number): The 16-bit number from which to extract the high byte.
  - `bigEndian` (boolean, optional): If true, treats the number as big-endian and returns the low byte instead. Default is `false`.
- **Returns:** The high byte of the given 16-bit number, or the low byte if `bigEndian` is true (number).

#### `isvalidU16(n)`

Checks if a number is a valid unsigned 16-bit integer.

- **Parameters:**
  - `n` (number): The number to check.
- **Returns:** `true` if the number is between 0 and 65535 (inclusive), otherwise `false` (boolean).

#### `isValidS16(n)`

Checks if a number is a valid signed 16-bit integer.

- **Parameters:**
  - `n` (number): The number to check.
- **Returns:** `true` if the number is within the signed 16-bit integer range (-32768 to 32767), otherwise `false` (boolean).

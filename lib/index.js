function lowByte(n, bigEndian = false) {
    if (bigEndian) {
        return n >> 8;
    }
    return n & 0xff;
}

function highByte(n, bigEndian = false) {
    if (bigEndian) {
        return n & 0xff;
    }
    return n >> 8;
}

function isvalidU16(n) {
    return n >= 0 && n <= 0xffff;
}

function isValidS16(n) {
    return n >= -0x8000 && n <= 0x7fff;
}

export { highByte, lowByte, isvalidU16, isValidS16 };

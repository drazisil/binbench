import { deepEqual } from "node:assert";
import { test } from "node:test";
import { highByte, lowByte, isvalidU16, isValidS16, isValidU32, isValidS32 } from "../lib/index.js";

test("that lowByte returns the low byte of a number in little-endian format", () => {
    deepEqual(lowByte(0x1234), 0x34, "0x1234 should return 0x34");
    deepEqual(lowByte(0x5678), 0x78, "0x5678 should return 0x78");
    deepEqual(lowByte(0x9abc), 0xbc, "0x9abc should return 0xbc");
    deepEqual(lowByte(0xdef0), 0xf0, "0xdef0 should return 0xf0");
}
);

test("that lowByte returns the low byte of a number in big-endian format", () => {
    deepEqual(lowByte(0x1234, true), 0x12, "0x1234 should return 0x12");
    deepEqual(lowByte(0x5678, true), 0x56, "0x5678 should return 0x56");
    deepEqual(lowByte(0x9abc, true), 0x9a, "0x9abc should return 0x9a");
    deepEqual(lowByte(0xdef0, true), 0xde, "0xdef0 should return 0xde");
}
);

test("that highByte returns the high byte of a number in little-endian format", () => {
    deepEqual(highByte(0x1234), 0x12, "0x1234 should return 0x12");
    deepEqual(highByte(0x5678), 0x56, "0x5678 should return 0x56");
    deepEqual(highByte(0x9abc), 0x9a, "0x9abc should return 0x9a");
    deepEqual(highByte(0xdef0), 0xde, "0xdef0 should return 0xde");
});

test("that highByte returns the high byte of a number in big-endian format", () => {
    deepEqual(highByte(0x1234, true), 0x34, "0x1234 should return 0x34");
    deepEqual(highByte(0x5678, true), 0x78, "0x5678 should return 0x78");
    deepEqual(highByte(0x9abc, true), 0xbc, "0x9abc should return 0xbc");
    deepEqual(highByte(0xdef0, true), 0xf0, "0xdef0 should return 0xf0");
}
);

test("that isvalidU16 returns true for valid unsigned 16-bit integers", () => {
    deepEqual(isvalidU16(0x0000), true, "0x0000 should return true");
    deepEqual(isvalidU16(0x1234), true, "0x1234 should return true");
    deepEqual(isvalidU16(0xffff), true, "0xffff should return true");
}
);

test("that isvalidU16 returns false for invalid unsigned 16-bit integers", () => {
    deepEqual(isvalidU16(-1), false, "-1 should return false");
    deepEqual(isvalidU16(0x10000), false, "0x10000 should return false");
}
);

test("that isValidS16 returns true for valid signed 16-bit integers", () => {
    deepEqual(isValidS16(-0x8000), true, "-0x8000 should return true");
    deepEqual(isValidS16(-0x1234), true, "-0x1234 should return true");
    deepEqual(isValidS16(0x1234), true, "0x1234 should return true");
    deepEqual(isValidS16(0x7fff), true, "0x7fff should return true");
}
);

test("that isValidS16 returns false for invalid signed 16-bit integers", () => {
    deepEqual(isValidS16(-0x8001), false, "-0x8001 should return false");
    deepEqual(isValidS16(0x8000), false, "0x8000 should return false");
}
);

test("that isValidU32 returns true for valid unsigned 32-bit integers", () => {
    deepEqual(isValidU32(0x00000000), true, "0x00000000 should return true");
    deepEqual(isValidU32(0x12345678), true, "0x12345678 should return true");
    deepEqual(isValidU32(0xffffffff), true, "0xffffffff should return true");
}
);

test("that isValidU32 returns false for invalid unsigned 32-bit integers", () => {
    deepEqual(isValidU32(-1), false, "-1 should return false");
    deepEqual(isValidU32(0x100000000), false, "0x100000000 should return false");
}
);

test("that isValidS32 returns true for valid signed 32-bit integers", () => {
    deepEqual(isValidS32(-0x80000000), true, "-0x80000000 should return true");
    deepEqual(isValidS32(-0x12345678), true, "-0x12345678 should return true");
    deepEqual(isValidS32(0x12345678), true, "0x12345678 should return true");
    deepEqual(isValidS32(0x7fffffff), true, "0x7fffffff should return true");
}
);


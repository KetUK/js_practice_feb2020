const { sumDigits, createRange } = require("../challenges/week10");

describe("sumDigits", () => {
  test("returns error when number is not passed to function", () => {
    expect(() => {
      sumDigits(undefined);
    }).toThrow("n is required");
  });

  test("returns error when number is negative", () => {
    expect(() => {
      sumDigits(-10);
    }).toThrow("Invalid Number");
  });

  test("returns the sum of all its digits of number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(2)).toBe(2);
    expect(sumDigits(4000)).toBe(4);
    expect(sumDigits(999)).toBe(27);
  });
});

describe("createRange", () => {
  test("returns error when start is not provided", () => {
    expect(() => {
      createRange(undefined, 10, 1);
    }).toThrow("start is required");
  });

  test("returns error when end is not provided", () => {
    expect(() => {
      createRange(10, undefined, 1);
    }).toThrow("end is required");
  });

  test("returns array with range of numbers", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(3, 10, 2)).toEqual([3, 5, 7, 9]);
  });
});

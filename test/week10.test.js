const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/week10");

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

describe("getScreentimeAlertList", () => {
  let userList = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        { date: "2020-04-03", usage: { twitter: 112, instagram: 15, facebook: 19 } },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
        { date: "2019-06-14", usage: { mapMyRun: 30, whatsApp: 30, facebook: 40, safari: 31 } },
        { date: "2020-04-03", usage: { twitter: 212, instagram: 50, facebook: 19 } },
      ],
    },
  ];

  test("return an array of usernames of users who have used more than 100 minutes of screentime", () => {
    expect(getScreentimeAlertList(userList, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(userList, "2019-06-14")).toEqual(["sam_j_1989"]);
    expect(getScreentimeAlertList(userList, "2020-06-14")).toEqual([]);
    expect(getScreentimeAlertList(userList, "2020-04-03")).toEqual(["beth_1234", "sam_j_1989"]);
  });
});

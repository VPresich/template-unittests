import isLeapYear from "../js/isLeapYear";

describe("Test of isLeapYear function", () => {
  test("the first test", () => {
    const result = isLeapYear(2008);
    expext(result).toBe(true);
  });
});
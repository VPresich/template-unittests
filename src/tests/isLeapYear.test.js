import isLeapYear from "../js/isLeapYear.js";

describe("Test of isLeapYear function", () => {
  test("2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
  });

  test("2000 - false", () => {
    const result = isLeapYear(2000);
    expect(result).toBe(true);
  });
});

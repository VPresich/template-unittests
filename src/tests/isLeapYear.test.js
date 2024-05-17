import isLeapYear from "../js/isLeapYear.js";

describe("Test of isLeapYear function", () => {
  test("2008 - true", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  test("1900 - false", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test('41 - error "Year must be > 42"', () => {
    expect(() => isLeapYear(40)).toThrow("Year must be > 42");
  });

  test('2008.5 - error "Year must be integer"', () => {
    expect(() => isLeapYear(2008.5)).toThrow("Year must be integer");
  });

  test('() - error "Year must be integer"', () => {
    expect(() => isLeapYear()).toThrow("Year must be exist");
  });

  test('"2008" - error "Year must be a number"', () => {
    expect(() => isLeapYear("2008")).toThrow("Year must be a number");
  });

  test('null - error "Year must be a number"', () => {
    expect(() => isLeapYear(null)).toThrow("Year must be a number");
  });

  test('true - error "Year must be a number"', () => {
    expect(() => isLeapYear(true)).toThrow("Year must be a number");
  });

  test('false - error "Year must be a number"', () => {
    expect(() => isLeapYear(false)).toThrow("Year must be a number");
  });

  test('()=>{} - error "Year must be a number"', () => {
    expect(() => isLeapYear(() => {})).toThrow("Year must be a number");
  });

  test('{} - error "Year must be a number"', () => {
    expect(() => isLeapYear({})).toThrow("Year must be a number");
  });

  test('[] - error "Year must be a number"', () => {
    expect(() => isLeapYear([])).toThrow("Year must be a number");
  });
});

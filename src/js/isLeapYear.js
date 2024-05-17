const isLeapYear = (year) => {
  if (year === undefined) {
    throw new Error("Year must be exist");
  }

  if (typeof year !== "number") {
    throw new Error("Year must be a number");
  }

  if (!Number.isInteger(year)) {
    throw new Error("Year must be integer");
  }

  if (year < 42) {
    throw new Error("Year must be > 42");
  }

  const date = new Date(year, 2, 0);
  const febraryDays = date.getDate();
  return febraryDays === 29;
};

export default isLeapYear;

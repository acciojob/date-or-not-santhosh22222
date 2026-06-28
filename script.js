var isDate = function (input) {
  if (input instanceof Date) {
    return !Number.isNaN(input.getTime());
  }

  if (typeof input === "string") {
    input = input.trim();
    if (input === "") return false;
  }

  const date = new Date(input);
  return !Number.isNaN(date.getTime());
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
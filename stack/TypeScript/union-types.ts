type Combiable = number | string;

let result;
function add(
  input1: Combiable,
  input2: Combiable,
  resultConvension: "as-number" | "as-text"
) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }

  if (resultConvension === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = add(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = add("Max", "Anna", "as-text");
console.log(combinedNames);

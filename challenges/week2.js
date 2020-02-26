function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const busCapacity = 40;
  return Math.ceil(people / busCapacity);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  sheeps = arr.filter(item => item === "sheep");
  return sheeps.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (
    person.address.postCode.startsWith("M") &&
    person.address.city === "Manchester"
  );
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

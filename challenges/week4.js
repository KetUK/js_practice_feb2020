function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num % parseInt(num) == 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => {
    return user.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => parseFloat(Math.sqrt(num).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence =>
    sentence.toUpperCase().includes(str.toUpperCase())
  );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longSides = [];
  triangles.forEach(item => {
    longSides.push(Math.max(...item));
  });

  return longSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

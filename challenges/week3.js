function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length == 0) {
    return [];
  } else {
    return nums.map(number => number * number);
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCaseWord = "";
  words.forEach((word, index) => {
    if (index != 0) {
      word = word[0].toUpperCase() + word.substr(1);
    }
    camelCaseWord = camelCaseWord + word;
  });

  return camelCaseWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjects = 0;
  people.forEach(item => {
    totalSubjects += item.subjects.length;
  });

  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let menusWithIngredient = menu.filter(item =>
    item.ingredients.includes(ingredient)
  );

  if (menusWithIngredient.length > 0) {
    return true;
  } else {
    return false;
  }
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicateNumbers = arr1.filter(item => arr2.includes(item));
  return Array.from(new Set(duplicateNumbers)).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

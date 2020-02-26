function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let totalPrice = originalPrice + originalPrice * (vatRate / 100);
  return parseFloat(totalPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let totalSalesPrice = originalPrice - originalPrice * (reduction / 100);
  return parseFloat(totalSalesPrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let isOddLength = false;
  let length = str.length;
  if (length % 2 == 1) {
    isOddLength = true;
  }

  let middleChar = Math.floor(length / 2);
  if (isOddLength) {
    return str[middleChar];
  } else {
    return str[middleChar - 1] + str[middleChar];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reverse = null;
  for (i = word.length; i > -1; i--) {
    if (reverse == null) {
      reverse = word[i];
    } else {
      reverse += word[i];
    }
  }

  return reverse;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  reverseWordArray = [];
  for (i = 0; i < words.length; i++) {
    let reverse = null;
    let word = words[i];
    for (j = word.length; j > -1; j--) {
      if (reverse == null) {
        reverse = word[j];
      } else {
        reverse += word[j];
      }
    }

    reverseWordArray.push(reverse);
  }

  return reverseWordArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxUsers = users.filter(user => user.type === "Linux");
  return linuxUsers.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let totalScore = 0;
  for (i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }
  let mean = totalScore / scores.length;
  return parseFloat(mean.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else if (n % 3 == 0) {
    return "fizz";
  }

  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

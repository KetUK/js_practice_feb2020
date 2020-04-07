const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let i = nums.indexOf(n);
  if (i != -1 && i != nums.length - 1) {
    return nums[i + 1];
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let arrayOfOneAndZeros = Array.from(str);
  let result = [0, 0];
  arrayOfOneAndZeros.forEach(num => {
    if (num == "0") {
      result[0]++;
    } else if (num == "1") {
      result[1]++;
    }
  });
  return { 1: result[1], 0: result[0] };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let number = Array.from(n.toString()).reverse();
  let reverseNumber = +number
    .join()
    .split(",")
    .join("");

  return reverseNumber;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let flatArr = arrs.flat();
  let count = 0;
  flatArr.forEach(n => (count += n));
  return count;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let [key, value] of Object.entries(haystack)) {
    if (
      value
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.replace(/[^a-zA-Z ]/g, "");

  let map = new Map();
  let splitArray = str.split(" ");
  splitArray.forEach(item => {
    map.set(item.toLowerCase(), 0);
  });
  splitArray.forEach(item => {
    map.set(item.toLowerCase(), map.get(item.toLowerCase()) + 1);
  });

  return Object.fromEntries(map);
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

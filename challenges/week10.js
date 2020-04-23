/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (n < 0) throw new Error("Invalid Number");
  let sum = 0;
  new String(n).split("").forEach((digit) => {
    sum += +digit;
  });

  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  let result = [];
  while (start <= end) {
    result.push(start);
    start = start + step;
  }
  return result;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let filteredUsers = users.map((user) => {
    let filterByScreenTime = user.screenTime.map((item) => {
      if (item.date === date && Object.values(item.usage).reduce((a, b) => a + b) > 100) {
        return user.username;
      }
    });
    return filterByScreenTime.filter((item) => item !== undefined);
  });
  return filteredUsers.flat();
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length >= 8) throw new Error("Your input contains too many characters!");

  let hex = "";
  if (hexStr.charAt(0) === "#") {
    hex = hexStr.substr(1);
  } else {
    throw Error("Invalid Input Hex String");
  }

  let values = hex.split("");
  let red, green, blue;
  console.log(parseInt(values[0].toString() + values[0].toString(), 16));
  if (hex.length === 2) {
    red = parseInt(values[0].toString() + values[1].toString(), 16);
    green = red;
    blue = red;
  } else if (hex.length === 3) {
    red = parseInt(values[0].toString() + values[0].toString(), 16);
    green = parseInt(values[1].toString() + values[1].toString(), 16);
    blue = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (hex.length === 6) {
    red = parseInt(values[0].toString() + values[1].toString(), 16);
    green = parseInt(values[2].toString() + values[3].toString(), 16);
    blue = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return false;
  }
  return `rgb(${red},${green},${blue})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  let winner = null;

  let boardArray = [];

  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let i = 0; i < row.length; i++) {
      boardArray.push(row[i]);
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2]) {
      winner = boardArray[0];
    } else if (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5]) {
      winner = boardArray[3];
    } else if (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8]) {
      winner = boardArray[6];
    } else if (boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6]) {
      winner = boardArray[0];
    } else if (boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7]) {
      winner = boardArray[1];
    } else if (boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8]) {
      winner = boardArray[2];
    } else if (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]) {
      winner = boardArray[0];
    } else if (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]) {
      winner = boardArray[2];
    }
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
};

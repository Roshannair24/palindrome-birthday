function reverseTheString(str) {
  let tempstr = str;

  let tempstrArr = str.split("");

  console.log("tempstrArr: " + tempstrArr);

  let tempstrReversedArr = tempstrArr.reverse();

  console.log("tempstrReversedArr: " + tempstrReversedArr);
  console.log(" typeof tempstrReversedArr: " + typeof tempstrReversedArr);

  let tempstrReversedjoined = tempstrReversedArr.join("");

  console.log("tempstrReversedjoined: " + tempstrReversedjoined);

  return tempstrReversedjoined;
}

function checkForPalindrome(str) {
  if (str === reverseTheString(str)) {
    return true;
  } else {
    return false;
  }
}

let mastertempdate = { day: 14, month: 9, year: 2020 };

function convertDateFromNumberToString(date) {
  let tempdate = { day: "", month: "", year: "" };

  if (date.day < 10) {
    tempdate.day = "0" + date.day.toString();
  } else {
    tempdate.day = date.day.toString();
  }

  if (date.month < 10) {
    tempdate.month = "0" + date.month.toString();
  } else {
    tempdate.month = date.month.toString();
  }

  tempdate.year = date.year.toString();
  console.log("tempdate.day: " + tempdate.day);
  console.log("typeof tempdate.day: " + typeof tempdate.day);

  console.log("tempdate.month: " + tempdate.month);
  console.log("tempdate.month: " + typeof tempdate.month);

  console.log("tempdate.year: " + tempdate.year);
  console.log("tempdate.year: " + typeof tempdate.year);

  console.log("tempdate " + tempdate);

  return tempdate;
}

function returnVariationsAsArrray(date) {
  let arr = [];

  let str = "";

  // DD-MM-YYYY

  let ddmmyyyy = date.day + date.month + date.year;

  arr.push(ddmmyyyy);

  // MM-DD-YYYY

  let mmddyyyy = date.month + date.day + date.year;

  arr.push(mmddyyyy);

  // YYYY-MM-DD

  let yyyymmdd = date.year + date.month + date.day;

  arr.push(yyyymmdd);

  console.log(arr);

  // DD-MM-YY

  let ddmmyy = date.day + date.month + date.year.slice(-2);

  arr.push(ddmmyy);

  // MM-DD-YY
  let mmddyy = date.month + date.day + date.year.slice(-2);

  arr.push(mmddyy);

  // YY-MM-DD
}

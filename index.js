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

function getAllDateFormats(date) {
  let datestr = convertDateFromNumberToString(date);

  // DD-MM-YYYY

  let ddmmyyyy = datestr.day + datestr.month + datestr.year;

  // MM-DD-YYYY

  let mmddyyyy = datestr.month + datestr.day + datestr.year;

  // YYYY-MM-DD

  let yyyymmdd = datestr.year + datestr.month + datestr.day;

  // DD-MM-YY

  let ddmmyy = datestr.day + datestr.month + datestr.year.slice(-2);

  // MM-DD-YY
  let mmddyy = datestr.month + datestr.day + datestr.year.slice(-2);

  // YY-MM-DD

  let yymmdd = datestr.year.slice(-2) + datestr.month + datestr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function tocheckPalindromeforAlldateformats(dateobj) {
  let dateFormatArr = getAllDateFormats(dateobj);

  var flag = false;

  for (var i = 0; i < dateFormatArr.length; i++) {
    if (checkForPalindrome(dateFormatArr[i])) {
      flag = true;
      break;
    }
  }

  return flag;
}

function isleapyear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}

function incrementdate(dateobj) {
  let lday = dateobj.day + 1;
  let lmonth = dateobj.month;
  let lyear = dateobj.year;

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (lmonth === 2) {
    if (isleapyear(lyear)) {
      if (lday > 29) {
        lday = 1;

        lmonth = lmonth + 1;
      }
    } else {
      if (lday > 28) {
        lday = 1;

        lmonth = lmonth + 1;
      }
    }
  } else {
    if (lday > daysInMonth[lmonth - 1]) {
      lday = 1;

      lmonth = lmonth + 1;
    }
  }

  if (lmonth > 12) {
    lday = 1;

    lmonth = 1;

    lyear = lyear + 1;
  }

  return {
    day: lday,
    month: lmonth,
    year: lyear,
  };
}

function findNextPalindromeDate(dateobj) {
  // If the current date is not a palindrome, find the next palindrome date

  let nextDate = incrementdate(dateobj);

  let ctr = 0;

  while (1) {
    ctr = ctr + 1;

    var isPalindrome = tocheckPalindromeforAlldateformats(nextDate);

    if (isPalindrome) {
      break;
    }

    //recursive function?

    nextDate = incrementdate(nextDate);
  }

  return [ctr, nextDate];
}

let dateInputRef = document.querySelector("#bday-input");

let showbtnref = document.querySelector("#show-btn");
let resultref = document.querySelector("#result");

showbtnref.addEventListener("click", clickhandler);

function clickhandler(e) {
  console.log("clciked");
  resultref.innerText="";

  console.log(e);

  console.log(e.value);

  console.log(dateInputRef.value);

  let bdaystr = dateInputRef.value;

  if (bdaystr !== "") {
    var listOfDate = bdaystr.split("-");

    console.log(listOfDate);

    let dateobj = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };

    console.log(dateobj);

    var isPalindrome = tocheckPalindromeforAlldateformats(dateobj);

    console.log(isPalindrome);

    if (isPalindrome) {
      resultref.innerText = "Yay! your bday is a palindrome";
    } else {
      document.querySelector(".loader-gif").style.display = "block";

      setTimeout(function () {
        document.querySelector(".loader-gif").style.display = "none";

        var [ctr, nextDate] = findNextPalindromeDate(dateobj);

        resultref.innerText = `The next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days.`;
      }, 2000);


    }
  }
}

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

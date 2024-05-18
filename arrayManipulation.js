processArray(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, i) =>
    numArr[i] % 2 === 0
      ? str.toUpperCase()
      : str.toLowerCase()
  );
}

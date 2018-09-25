var uniqueInOrder = function(iterable) {
  //your code here - remember iterable can be a string or an array
  let result = [];
  let iterableLength = iterable.length;
  if (typeOf(iterable) === "string") iterable.split("");

  for (let i = 0; i < iterableLength; i++) {
    let currChar = iterable[i];

    for (let n = i + 1; n < iterableLength; n++) {
      if (currChar !== iterable[n + 1]) {
        result.push(currChar);
      }
    }
  }
};

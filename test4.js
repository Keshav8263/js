function multiplyByTwo(values) {
  let arr = values.map((value) => {
    return value * 2;
  });

  return arr;
}

let array = multiplyByTwo([1, 2, 3, 4, 5, 6]);

console.log(array);

function mapArray(array) {
  let numbers = new Array(array.length);
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    const finalArray = array[i] * 10;
    arr.push(finalArray);
  }
  return (numbers = arr);
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

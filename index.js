//map
let arr = [1, 2, 3, 4, 5, 6];

function transform(i) {
  return i * 2;
}

const map1 = (arr, fn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  console.log(newArr);
};

// map1(arr, transform);

console.log(arr.map(transform));

//filter
function filter(i) {
  return i % 2 == 0;
}

console.log(arr.filter(filter));

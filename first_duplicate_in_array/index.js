let arr = [5, 4, 3, 6, 23, 3, 4, 5, 6, 5, 5, 4, 6, 5];

let newArr = [];
let duplicate;

for (let i = 0; i < arr.length; i++) {
  if (newArr.includes(arr[i])) {
    duplicate = arr[i];
    break;
  } else {
    newArr.push(arr[i]);
  }
}

console.log(duplicate);

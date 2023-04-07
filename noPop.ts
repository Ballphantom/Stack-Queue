//Stack

function removeStack<T>(arr: T[]): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
    console.log('Pop:',arr,newArr);
  }
  return newArr;
}

const number = [1, 2, 3, 4, 5];
const newArr = removeStack(number);
console.log(newArr);

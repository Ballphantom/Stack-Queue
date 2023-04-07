//Queue

function removeQueue<T>(arr: T[]): T[] {
  const newArr1: T[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr1.push(arr[i+1]);
    console.log('Shift:',arr,newArr1);
  }
  return newArr1;
}

const number1 = [1, 2, 3, 4, 5];
const newArr1 = removeQueue(number1);
console.log(newArr1);

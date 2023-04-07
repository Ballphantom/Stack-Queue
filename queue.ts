interface Queue<T> {
  push(item: T): void;
  shift(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class ArrayQueue<T> implements Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  shift(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
  
  isEmpty(): boolean {
    return this.size() === 0;
  }
}

const queue = new ArrayQueue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
console.log('Cut-out number:',queue.shift()); 
console.log('Peek number:',queue.peek()); 
console.log('Size:',queue.size()); 
console.log(queue);
console.log('Is empty:',queue.isEmpty());


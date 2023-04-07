interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class ArrayStack<T> implements Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
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

const stack = new ArrayStack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log('Cut-out number:',stack.pop()); 
console.log('Peek number:',stack.peek()); 
console.log('Size:',stack.size()); 
console.log(stack);
console.log('Is empty:',stack.isEmpty());

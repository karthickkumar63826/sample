function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    displayCount: () => console.log(`count value is ${count}`),
  };
}

let counter1 = counter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
counter1.displayCount();

let counter2 = counter();

console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());

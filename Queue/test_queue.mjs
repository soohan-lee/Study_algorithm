import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("=========queue 1 테스트=========");
queue.enqueue(1);
console.log(queue.front().data);
queue.enqueue(2);
console.log(queue.front().data);
queue.enqueue(3);
console.log(queue.front().data);
queue.enqueue(4);
console.log(queue.front().data);
console.log(queue.front().data);


console.log("=========queue 2 테스트=========");
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);

console.log(queue.isEmpty());
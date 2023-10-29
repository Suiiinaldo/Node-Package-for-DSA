This is a one stop solution for all the Sorting and Searching Algos like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Linear Search and Binary Search with also the Implementation of Different Data Structures like Priority Queue, Queues, in JavaScript.

```
const dsa = require("algosandds.js");

const arr = [5,4,3,2,1];
dsa.Algorithms.bubbleSort(arr);
console.log(arr);

const pq = new dsa.DataStructures.PriorityQueue((a,b) => a > b) //declaring a Max heap.
pq.insert(10);
pq.insert(20);
pq.insert(30);
pq.insert(40);

console.log(pq.get());
pq.display();
```
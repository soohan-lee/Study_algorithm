import {HashTable} from "./HashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1,"a");
hashTable.set(4,"b");
hashTable.set(20,"c");
hashTable.set(6,"c");
hashTable.set(22,"e");
hashTable.set(21,"f");
hashTable.set(5,"g");
hashTable.set(10,"h");
hashTable.set(8,"i");
hashTable.set(9,"j");
hashTable.set(14,"k");

console.log(`1 : ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1 : ${hashTable.get(1)}`);
console.log(`21 : ${hashTable.get(21)}`);
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 100 },
    { name: 'Computer', price: 1000 },
    { name: 'Book', price: 25 },
]
// FILTER
// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
// })
// console.log(filteredItems);

// MAP
// const itemNames = items.map((item) => {
//     return item.name;
// })

// console.log(itemNames);

// FIND
// const foundItem = items.find((item)=>{
//     return item.name  === 'Book'
// })

// console.log(foundItem)

// FOREACH
// const forEachItems = items.forEach((item)=>{
//     console.log(item.name);
// })

// SOME
// const hasInExpensive = items.some((item)=>{
//     return item.price <= 100;
// })
// console.log(hasInExpensive) // true

// EVERY
// const hasInExpensive = items.every((item)=>{
//     return item.price <= 100;
// })
// console.log(hasInExpensive) // false

// REDUCE
// const total = items.reduce((currentTotal, item)=>{
//     return item.price + currentTotal
// },0)
// console.log(total)

// let data = [1,2,3,4];
// const sum1 = (data) => console.log(data.reduce((prev,current) => prev + current));
// sum1(data);

// const sum2 = (...args) => console.log(args.reduce((prev,current) => prev + current));
// sum2(1,2,3,4);

// INCLUDES
// const items2 = [1,2,3,4,5,8,9]

// const includesTwo = items2.includes(2);
// console.log(includesTwo) // true

// let numbers = [1,4,5,6,8,0]

// PUSH AND UNSHIFT

// numbers.push(10); // menambahkan 10 ke dalam array dari belakang 
// console.log(numbers)
// numbers.unshift(20); // menambahkan ke dalam array 20 dari depan
// console.log(numbers);

// POP AND SHIFT
// numbers.pop(); // menghapus satu elemen array dari belakang
// numbers.shift(); // menghapus satu elemen array dari depan
// console.log(numbers);

// SPLICE

// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(1, 2); // menghapus 2 elemen array mulai dari index ke-1
// console.log(array)

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14); // menghapus 1 elemen array mulai dari index ke-3 dan menambahkan 2 elemen array baru setelahnya yaitu 13, 14
// console.log(numbers);

// SLICE
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3); // membuat array baru yang diambil dari index ke-1 sebanyak 3 elemen dari array weatherConditions

// SPREAD OPERATOR (...)
// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray]; // membuat duplikat dari array thisArray
// console.log(thatArray)

// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; // menggabungkan dengan array lain

// console.log(thatArray)

// INDEXOF

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears', 'oranges'];

console.log(fruits.indexOf('dates')); // output -1 artinya tidak ada
console.log(fruits.indexOf('oranges')); // output 2 artinya ada dan berada pada index ke-2
console.log(fruits.indexOf('pears')); // output 1 artinya ada dan berada pada index ke-1 jika terdapat lebih dari 1 data, maka index data yang pertama yang digunakan

// SELENGKAPNYA
https://dev.to/cenacr007_harsh/basic-data-structures-in-javascript-arrays-and-objects-3mln

// TAMBAHAN
const data = [1,2,3,4];

// for(let i=0; i<data.length; i++){
//   console.log(data[i]);
// }

// for(let i in data) {
//   console.log(data[i]);
// }

// for(let i of data) {
//   console.log(i);
// }

// MENGUBAH STRING KE ARRAY 
const data2 = '123';

console.log(data2.split('').toString()); // convert array ke string
console.log(data.toString().replace(/,/g, ''));
// console.log(data.toString());



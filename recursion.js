// Counting Sheep

function countSheep(num) {
  if (num === 0) {
    return;
  }
  console.log(num, 'Another sheep jump over the fence');
  countSheep(num-1);
}

console.log('====== Counting Sheep ======');
countSheep(3);

// Array Double

function arrayDouble(arr) {
  //base case
  if (arr.length === 0) {
    return [];
  }
  //recursive case
  return [arr[0]*2, ...arrayDouble(arr.slice(1))];
}

console.log('====== Array Double ======');
console.log(arrayDouble([1,2,3]));

// Reverse String

function reverse(str) { 
  //base case 
  if(str === '') { 
    return ''; 
  } else { 
    return reverse(str.substring(1)) + str.charAt(0);
  }}

console.log('====== Reverse String ======');
console.log(reverse('hey'));

// nth Triangular Number

function nth(num) { 
  //base case 
  if (num <= 1) { 
    return num;
  } else { 
    return num + nth(num-1);
  }}

console.log('====== nth Triangular Number ======');
console.log(nth(1), nth(2), nth(3), nth(4), nth(5));

// String Splitter

function split(str, separator) {
  //base case
  if (!str.includes(separator)) {
    return [str];
  }
  
  //recursive case
  let index = str.indexOf(separator);
  return [str.substring(0,index), ...split(str.slice(index+1), separator)];
}

console.log('====== String Splitter ======');
console.log(split('david-john-jack-paul-hi-hello', '-'));

// Binary Representation

function binary(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  
  const newNum = Math.floor(num / 2);
  return binary(newNum) + (num % 2).toString();
}
  
console.log('====== Binary Representation ======');
console.log(binary(25));

// Anagrams

function anagrams(str) {
  const finalArr = [];
  if(str.length === 1) {
    return [str];
  }
  for (let i=0; i<str.length; i++) {
    const removed = str.slice(0,i)+str.slice(i+1);
    const arr = anagrams(removed);
    for (let j=0; j<arr.length; j++) {
      finalArr.push(str[i] + arr[j]);
    }
  } 
  return finalArr;
}

console.log('====== Anagrams ======');
console.log(anagrams('dav'));

// Animal Hierarchy

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
console.log('====== Animal Hierarchy ======');
console.log(JSON.stringify(traverse(animalHierarchy, null)));

// Factorial

function factorial(num) { 
  if(num === 0){ 
    return 1; 
  } else { 
    return num * factorial(num-1); 
  }
}
console.log('====== Factorial ======');
console.log(factorial(5));

// Fibonacci

function fibonacci(num) { 
  if(num <= 0){ 
    return 0; 
  } 
  if(num <=2 ){ 
    return 1; 
  } else { 
    return fibonacci(num -1) + fibonacci(num -2);
  } 
}
console.log('====== Fibonacci ======');
console.log(fibonacci(7));
// Organization Chart

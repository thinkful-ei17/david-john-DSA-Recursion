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
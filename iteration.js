function sheep(num) {
  for (let i = num;i >= 1; i--){
    console.log( i,'- Another sheep jump over the fence');
  }
}

sheep(3);

function dbl(arr) {
  let newArr = [];
  arr.forEach(function(i){
    newArr.push(i * 2);
  });
  return newArr;
}

console.log(dbl([1,2,3]));

function reverse(str) {
  let newStr = '';
  for (let i=str.length-1; i>=0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverse('hello'));

function nth(num) {
  let sum = null;
  for (let i=num; i>=0; i--) {
    sum += i;
  }
  return sum;
}

console.log(nth(9));
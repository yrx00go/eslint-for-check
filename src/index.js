const array = [1, 3, 5];

for (let index = 0; index < array.length; index++) {
  var element = array[index];
  
  console.log(element)

  if (element == 3) {
    break
  }

  var unusedVar = 'This variable is never used';
}

console.log(index);  // 使用循环外的 index


var array = [1, 25, 30, 64, 11, 26];
var empArray = [];
for (var i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    empArray.push(array[i]);
  }
}
console.log(empArray);

let arr = [45,67,87,23,5,32,60];

//Your code here.
let inv_arr = []

for (let i = arr.length-1; i>-1; i--){
    inv_arr.push(arr[i])
}

console.log(inv_arr)
let arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
for (let i = 0; i<2; i++) {
    var rand_int = Math.floor(Math.random()*10)
    arr.push(rand_int)
}

console.log(arr);
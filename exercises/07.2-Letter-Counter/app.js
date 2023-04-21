let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i = 0; i < par.length; i++){
    var letter = par[i].toLowerCase()
    //console.log(letter)
    if (letter == " "){
        continue;
    }
    if (letter in counts){
        //console.log("Y")
        counts[letter] += 1 
    }
    else {
        //console.log("N")
        counts[letter] = 1 
    }
}

console.log(counts);
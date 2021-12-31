// Exercises:Loops
// Iterate 0 to 10 using for loop, do the same using while and do while loop.

// //using for loop
for (let i = 0; i < 10; i++) { 
  console.log(i);
}

// //using while loop
let i = 0;
while (i<10) {
  console.log(i);
  i++
}

// //using do while loop
let j = 0;
do { j++;
console.log(j); }
  while (j < 10);




// Iterate 10 to 0 using for loop, do the same using while and do while loop.

// //using for loop
for (let i = 10; i > 0; i--) { 
  console.log(i);
}

// //using while loop
let i = 10;
while (i>0) {
  console.log(i);
  i--
}

// //using do while loop
let j = 10;
do { 
console.log(j--); }
  while (j <= 10 &&  j > 0  );


// Write a loop that makes seven calls to console.log to output the following triangle:

let tri = "";
for (let i = 0; i < 7; i++) {
    tri += "#";
    console.log(tri);
}


//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######



// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

let iterateArr=['HTML', 'CSS', 'JavaScript']

for (let i = 0; i < iterateArr.length; i++) {
    console.log(iterateArr[i]);
}



// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i+=2) {
    console.log(i);
    
}



// Use for loop to iterate from 0 to 100 and print only odd numbers


for (let i = 1; i <= 100; i+=2) {
    console.log(i);
    
}

// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.



let i=0,
toplam=0;
for(i=1; i<=100; i++){
toplam+=i; 

} 
console.log(toplam);


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


//sum of all evens
let i=0,
toplam=0;
for(i=1; i<=100; i+=2){
toplam+=i; 

} 
console.log(toplam);

//sum of all odds
let i=1,
toplam=0;
for(i=1; i<=100; i+=2){
    console.log(i)
toplam+=i; 

} 
console.log(toplam);

//The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20  

let num=prompt("sayı giriniz :");
let sum=0;


while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
    
}
console.log(sum);



//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

function randomId(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    //console.log(charactersLength) //
    for ( let i = 0; i <length; i++ ) {
        console.log(i)
       result += characters.charAt(Math.floor(Math.random() * charactersLength));// random bir sayı alıp onu karekter uzunluğu ile çarptım ve denk gelen karekteri çağirdim
    console.log(result)
    }
    return result;
 }
 
 console.log(`user ıd : ${randomId(6)}`); // length i degiştirerek istediğimiz uzunlukta user id elde edebiliriz
// // // // Conditonal Statements

// // // let age=17;
// // // if(age>18){
// // //     console.log("You can apply for driving license");
// // // }else{
// // //     console.log("You are underage");
// // // }


// // // // if else ladder

// // // let marks=95;
// // // if(marks>90){
// // //     console.log("A");
// // // }else if(marks>80){
// // //     console.log("B");
// // // }else{
// // //     console.log("C");
// // // }




// // // // Operators

// // // // Arithmetic:-[+,-,*,/,**,%,++,--]
// // // let a=10;
// // // let b=5;
// // // console.log(`${a}+${b}=${a+b}`);
// // // console.log(`${a}-${b}=${a-b}`);
// // // console.log(`${a}X${b}=${a*b}`);
// // // console.log(`${a}/${b}=${a/b}`);
// // // console.log(`${a}%${b}=${a%b}`);

// // // // a++;
// // // // b++;
// // // // ++a;
// // // // ++b;
// // // // a=10;b=5;

// // // console.log(`a=${a--} and b=${b--}`);

// // // console.log(`a=${a++} and b=${b++}`);

// // // console.log(`a=${a} and b=${b}`);
// // // console.log(`a=${a} and b=${b}`);


// // // Logical Operator

// // // ----&& || !

// // a=15;
// // b=18;
// // if(a==5 && b==8){
// //     console.log("Correct");
// // }else{
// //     console.log("NBot coreect");
// // }



// // if(a==5 || b==8){
// //     console.log("Correct");
// // }else{
// //     console.log("NBot coreect");
// // }



// console.log(2**5);


// a="4";//string
// b="4";//string
// a=5;//number
// b=5;//number
// if(a===b){
//     console.log("values are eqaul");
// }else{
//     console.log("Not eqaul");
// }




// -------------------------Loops------------------------
// 1.for loop

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// 2.while loop
// let a=0;
// while(a<=10){
//     console.log(a);
//     a++;
// }
//a=11

// 3.do while loop
// do{
//     console.log("hi");
//     a++;// 11 12 13 14 
// }while(a<15);

// 4.for of loop----used to iterate strings and array
// name="Rama";
// for(letter of name){
//     console.log(letter);
// }




// 5.for in loop  ---->to iterate in objects
let obj={
    "name":"Pratiksha",
    "age":20,
    "address":"Ghanari",
    "job":"it",
    " Roll No":53,
   
}
for( let key in obj){
    console.log(`${key}=${obj[key]}`);
}
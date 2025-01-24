// array=[3,4,5,7];
// // for(let i=0;i<array.length;i++){
// //     console.log(array[i]);
// // }


// // add
// array.push(89);

// console.log(array);

// array.pop();
// console.log(array);


// // shift and unshift
// array.unshift(100);
// console.log(array);

// array.shift();
// console.log(array);


// console.log(array.toString());
// console.log(array.join(" and "));


// console.log(array.slice(1,3))
// ana=array.splice(1,2,66,77,88);
// console.log(array);
// console.log(ana);




a=[1,2,3,4,5,6]


// a.forEach(function (val){
//     console.log(val);
// })

x=a.forEach((el)=>{
    console.log(el);
})
console.log("Printing x")
console.log(x);


// map  ----forEach da bhai hai

// ans=a.map(function(el){
//     return el*el;   //1   4   9.....
// })

ans=a.map((el)=>{
    return el*el;
})
console.log(ans);




// filter function


// x=a.filter(function(el){
//     return el%2==0;
// })


x=a.filter((el)=>{
    return el%2==0;
})

console.log(x);






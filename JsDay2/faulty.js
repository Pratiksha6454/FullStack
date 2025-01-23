// Making up of faulty calculator

const obj={
    '+':'-',
    '*':'-',
    '-':'/',
    '/':'**',
}
a=6
b=3
let op='+';
let probability=Math.random();
probability=0.0
if(probability>0.1){
    console.log(`the result is ${eval(`${a} ${op} ${b}`)}`);
}else{
    op=obj[op];
    console.log(`the result is ${eval(`${a} ${op} ${b}`)}`);
}
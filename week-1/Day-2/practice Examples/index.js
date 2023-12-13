
var a=10;
function abc()
{
    let b=20;
    console.log(a);  // global scope
    console.log(b); //function scope
   
}
abc();

// // Block scope
{
    const  c=40;
    console.log(c);  // block scope
}
console.log(a); // global scope
console.log(b); 
console.log(c);


// Arrow function
var x=100;
exp=()=>
{
    var a=10;
    console.log(a);
}
exp();
console.log(x);

// // Function Declaration

function sem()
{
    const l=120;
    console.log(l);
}
console.log(l);

// // Funciton Expresion

var st=function()
{
    let m=11;
    console.log(m);
}
console.log(m);

"use strict";
let z=100;
function rev(a,a)
{

    console.log(a);
}

console.log(s);


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));

var s=0;
var i=0;
while(i<5)
{
    s+=i;

    i++;
}
console.log(s);

let obj={
    name:'sai charan',
    age:23,
    city:'tanuku',

    display:function()
    {
        console.log(this.age);
    }
}


console.log(obj.name);
obj.display();
console.log(obj.city);

delete obj.city;

console.log(obj);



// for-in  loop --> Objects
for( let i in  obj)
{
    console.log(obj[i]);
}


// for-in loop --> Arrays
let arr=[1,4,6,7,9,10];
for(let i of arr)
{
    console.log(i);
}


class Student
{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;

    }

    
    Hello(){
        console.log(this.name);
    }
}

let stu=new Student("sai kumar","18B91A0484");
stu.Hello();

console.log(stu.id);








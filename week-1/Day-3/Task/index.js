// filter
let arr=[];
let obj1={
    name:'charan',
    age:'10'
}

let obj2={
    name:'mallesh',
    age:'15'
}

let obj3={
    name:'siiva',
    age:'20'
}


arr.push(obj1);
arr.push(obj2);
arr.push(obj3);


let fill=arr.filter((ele,index,arr)=>{
    return ele.age %2==0;
})
console.log(fill);



// map
let rem=[];
let ob1=
{
    product:'shirt',
    price:700

}
let ob2=
{
    product:'Pant',
    price:500

}

let ob3=
{
    product:'T-shirt',
    price:1000

}
rem.push(ob1);
rem.push(ob2);
rem.push(ob3);

let res=rem.map((ele,index,arr)=>{
    return ele.price+=50;
});
console.log(rem);
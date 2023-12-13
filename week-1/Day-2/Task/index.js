
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
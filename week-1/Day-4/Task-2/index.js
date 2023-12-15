
let arr=[];
let ob1={
    name:'charan',
    age:23,
    city:"komara"
}


let ob2={
    name:'mallesh',
    age:25,
    city:"gannavaram"
}


let ob3={
    name:'siva',
    age:23,
    city:"kothapalli"
}
arr.push(ob1);

arr.push(ob2);

arr.push(ob3);


let divEle=document.getElementById('d');

let dt=document.getElementById('but')

var hEle=document.createElement('h1');
function Eventadd()
{
    
    for(let i of arr)
    {
        divEle.innerHTML+=`<h1>${i.name}</h1`;
        
    }

    divEle.append(hEle);

    console.log(divEle);

}

dt.addEventListener('click',Eventadd);


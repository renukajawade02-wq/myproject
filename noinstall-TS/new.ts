/*const user={
    name:"alice",
    age:20,
    isadmin:true,

};
console.log(user.name);
console.log(user.email);*/

//let username:string="alice";
//username=20;

/*function add(a:number,b:number){
    return a+b;
}
const output=add(5,8);
console.log(output);*/

//no error
let something;
something="hello";
something=56;

function throwError(message: string): never {
  throw new Error(message);
}

/*let tuple:[number,boolean,string];
tuple=[4,true,'hii'];
order matters in tuple*/

const car:{type:string,model:number,year:number}={
    type:"bmw",
    model:45345,
    year:2026
};
console.log(car);
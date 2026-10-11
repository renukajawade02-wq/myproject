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
/*let something;
something="hello";
something=56;

function throwError(message: string): never {
  throw new Error(message);
}*/

/*let tuple:[number,boolean,string];
tuple=[4,true,'hii'];
order matters in tuple*/

/*const car:{type:string,model:number,year:number}={
    type:"bmw",
    model:45345,
    year:2026
};
console.log(car);*/

/*class loggin{
     login(name:string,password:string){
        if(name&&password){
        return `student login`}
        else{
            return 'not login'
        }
    }
}*/

//class student extends loggin{
   /* login(name:string,password:string){
        if(name&&password){
        return `student login`}
        else{
            return 'not login'
        }
    }*/
    /*result(marks:number){
        if (marks>33){
            return 'pass'
        }
        else{
            return "fail"
        }
    }
    

}*/
//class Teacher extends loggin{
   /* login(name:string,password:string){
        if(name&&password){
        return `student login`}
        else{
            return 'not login'
        }
    }*/
  /* subject(subject:string){
    return 'he teach'+subject
   }
    

}
var s=new student();
console.log(s.result(69));
console.log(s.result(24));
console.log('idiot student');

var t=new Teacher();
console.log(t.login('sam','3436456'));*/
 interface userinfo{
    name:string,
    age:number,
    email:string,
    password:string,
}
var people:userinfo={
    name:'renuka',
    age:19,
    email:"renuka@mail.com",
    password:"irhf1324"
}
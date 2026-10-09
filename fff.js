/*const mainContainer = document.getElementById('main-container');
mainContainer.style.border = '2px solid red'; // Puts a red border around the main div

const itemList = document.getElementById('item-list');
console.log(itemList);
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs.length); // 3

// You can loop through the collection
for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.fontStyle = 'italic';
}*/

/*const mybutton=document.getElementById('action-btn');
const statustext=document.getElementById('action-text');

function onbtnclick(){
  console.log("button is clicked");
  statustext.textContent="action performed";
  statustext.style.color='green';
}
mybutton.addEventListener('click',onbtnclick);*/


/*const mybutton=document.getElementById('action-btn');
const innertext=document.getElementById('action-text');

function onbtnclick(){
  innertext.textContent="you did it!";
  innertext.style.fontSize='50px';
  innertext.style.backgroundColor='orange';
}
//mybutton.addEventListener('click',onbtnclick);
// Keyboard Events
mybutton.addEventListener('keydown', (e) => {
console.log('Key pressed:', e.key);
console.log('Key code:', e.code);
console.log('Ctrl pressed:', e.ctrlKey);
console.log('Shift pressed:', e.shiftKey);
console.log('Alt pressed:', e.altKey);
});*/

/*const list=document.getElementById('item-list');

list.addEventListener('click',function(event){
  console.log("you clicked on: ",event.target.textContent);
});*/

/*const myform=document.getElementById('my-form');
myform.addEventListener('submit',function(event){
  event.preventDefault();
  const usernameinput=document.getElementById('username');
  console.log(`form submitted with username: ${usernameinput.value}`);
});*/

/*const mypromise= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const success =true;
    if (success){
      resolve("suceed");
    }
    else{
      reject("rjected");
    }
  },2000);
});
console.log(mypromise);*/

/*const mypromise=new Promise((resolve,reject)=>{
  resolve("hello!");
});
console.log(mypromise);*/

/*const delayedpromise= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("ayra is a superstar");
  });
});
console.log(delayedpromise);*/

/*function checkage(age){
  return new Promise((resolve,reject)=>{
    if(age>18){
      resolve("adult");
    }
    else{
      reject("child");
    }
  });
}
const age=checkage(20);
console.log(age);*/

/*function fetchuserdata(userid){
  return new Promise((resolve,reject)=>{
    console.log(`fetching user ${userid}`);

    setTimeout(()=>{
      const user={
        id:userid,
        name:"jane doe",
        email:"jane@mail.com"
      };
      resolve(user);
    },2000);
  });
}*/


/*function divideno(a,b){
  return new Promise((resolve,reject)=>{
    if(b===0){
      reject("invalid");
    }
    else{
      resolve(a/b);
    }
  });
}
const b=divideno(9,3);
console.log(b);*/

/*Promise.then((result)=>{
  console.log(result);
});
Promise.catch((error)=>{
  console.log(error);
});
Promise.finally(()=>{
  console.log("promise setteled");
});*/

/*function fetchdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const success=true;
      if(success){
        resolve("run the program");
      }
      else{
        reject("rejected");
      }
    },1000);
  });
}
console.log("loading....");
let isloading=true;

fetchdata().then((result)=>{
  console.log(result);
});
fetchdata().catch((error)=>{
  console.log(error);
});
fetchdata().finally(()=>{
  isloading=false;
  console.log("request completed");
});*/

/*mypromise.then(
  (result)=>{
    console.log(result);
  },
  (error)=>{
    console.log(error);
  }
);*/

/*function querydatabase(query){
  let connection;
  return connecttodatabase()
  .then((conn)=>{
    connection=conn;
    return connection.execute(query);
  })
  .then((result)=>{
     console.log("query results:", result);
  })
  .then((error)=>{
    console.log(error);
  })
  .finally(()=>{
    if(connection){
      connection.close();
    console.log("completed!");
    }
  });
}*/

/*const obj={
  name:"renuka",
  age:19,
  status:"student",
  greet: function(){
    console.log("hello!");
  },
  active:true,
  date:new Date(),
};
console.log(obj);

const employee={
  ename:"raghav",
  eid:2345,
  company:"ffk",
  work: function(){
    console.log("repair junks...");
  },
  present:true,
  joiningtime: new Date(),
};
console.log(employee);

const jsonstring=JSON.stringify(obj);
console.log(jsonstring);
console.log(typeof jsonstring);*/

async function greet(){
  return "hello";
}
function myfunction(){
  return Promise.resolve("hii");
}
console.log(greet);
console.log(myfunction);
myfunction.then((result)=>{
  console.log(result);
});
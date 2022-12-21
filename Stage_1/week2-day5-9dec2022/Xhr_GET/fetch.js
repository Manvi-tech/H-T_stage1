
// fetch API return a promise

fetch('https://jsonplaceholder.typicode.com/users/5')
.then((msg)=>{return (msg.json())})
.then((data)=>console.log(data))
.catch((err)=>{console.log(err)});


async function fetch2(){
   try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
   }catch(err){
        console.log(err);
   }
}
fetch2();

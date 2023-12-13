
let cnt=0;
let callback = ()=>{ 
    cnt++;
    console.log("hii"+ (cnt)) }

let intervalId = setInterval(callback,1000)
setTimeout(()=>
{
    console.log("settimeout callback runs calling clearinterval"+cnt)
    clearInterval(intervalId)
},7000)

console.log("program ends")
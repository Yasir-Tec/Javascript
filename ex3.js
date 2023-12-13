let num=1

if(num%2 == 0)
    console.log("Number is even")
else
    console.log("Number is odd")


num=2
switch(num)
{
    case 1: console.log("hello"); break;
    case 2: console.log("world");
    break;
    default : console.log("wrong choice")
}

let d=5
let c=1
console.log("Table of ",d)
while(c<=10)
{
    console.log(d,"*",c," = ",d*c)
    c++
}


d=10
c=1
console.log()
do
{
    console.log(d,"*",c," = ",d*c)
    c++
}while(c<=10)



let p=11;
for(let i=1;i<=10;i++)
{
    console.log(p*i)
}
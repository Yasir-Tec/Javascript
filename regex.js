//let regex=/abc/
//let regex = /ABC/i   //check for case insensitive
//let regex=/[A-Z]/
//let regex=/[a-z]/
//let regex =/[a-sA-Z]/

//let regex = /^[A-Z][a-z]+/  
//possible matches
//India Prachi --yes 
//IGGGG , I123 , I ---no


//possible matches
//India , I 
//let regex = /^[A-Z][a-z]*/

//let regex = /[A-Za-z]+[0-9]{3}/   // "Yasir432" -->Yes
//let regex = /[A-Za-z]*[0-9]{3}/     // "432" ---> Yes

//let regex =/[A-Za-z]+[0-9]{3}$/
//let s ="Yasir432"                     // "Yasir432" -->Yes

//let regex=/[a-z]{2,3}.com/

//let regex=/[a-z]{2,3}\.com/

//let regex = /[-_#@]/

//regular expr in JS is object
console.log(typeof(regex))
let s ="-"  
let rv = s.match(regex)
console.log(rv)
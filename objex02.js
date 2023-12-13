let movie= {
    name:"Jawan",
    Director_name:"Atlee",
    Cast:{
        Hero:["SRK","Salman"],
        Heroin:["Nayanthara","Deepika"],
        Villain:["VijaySetupati"],
        Comedian:["Srk","Yasir","Rushi"]
    },
    Date_of_release:"7/9/2023",
    Budget:"150Cr",
}



let movie1="abc"
let movie4="pqr"
let movie2=new String("xyz")
let movie5=new String("xyzoqr")
let movie3=movie


console.log(movie==movie1)
console.log(movie==movie2)
console.log(movie==movie3)

console.log(movie1==movie2)
console.log(movie2==movie5)
console.log(movie1==movie4)
console.log(movie3==movie5)

console.log("**************************************")
console.log(movie===movie1)
console.log(movie===movie2)
console.log(movie===movie3)

console.log(movie1===movie2)
console.log(movie2===movie5)
console.log(movie1===movie4)
console.log(movie3===movie5)

console.log(movie.Cast.Heroin[1])
let   movie = {
    Name:"Jawan",
    Director:"Atlle",
    Hero:["srk","Salman khan"],
    Heroine:["Nayanthara","Dipika"],
    Villen:["Vijay Sethupathi"],
    Dateofrelease:"7/9/2023",
    Budget:3000000000,
    kids:true

}
console.log(movie)
let a=movie.Hero.length;
let b=movie.Heroine.length;
let c=movie.Villen.length
let cast=a+b+c
console.log("No of Character:"+cast)
console.log(movie.Heroine)
let arr=[10,20,30,40,50]


let callback = (ele,ind)=>{
    console.log(ind,ele)
}
callback(10,0)

//EXample of synchronous callbck function
let callback1 = (ele,ind,arr) =>
{
    console.log(ind,ele,arr)
}
arr.forEach(callback1)


let square = arr.map(
    function(ele)
    {
        return Math.pow(ele,2)
    }
)
console.log(square)

let divBy4 = arr.filter(
    function(ele)
    {
        if(ele%4==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
)
console.log(divBy4)
console.log("end of prog")

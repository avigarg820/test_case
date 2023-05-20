/* promise generation 
let p  = new Promise((resolve, reject)=>{
    let a  = 1+1
    if(a==2){
        resolve('Success')
    }else{
        reject('Failed')
    } 
})

p.then((message)=>{
    console.log(`this is the then statement ${message}`)
}).catch((message)=>{
    console.log(`this is the catch statement ${message}`)
 })
--> [[below is the end of comment]]
 */

/* writing set_timeout function
setTimeout(function_name, time);

function function_name(parameteres--> n1, n2){
    console.log(n1+n2);
}
*/

/* 3RD COMMENT
setTimeout(sum,2000){
    console.log(sum(2,3))
};                                               // keep in mind , paranthesis not in callback function
console.log('Timer Started + Message will soon be displayed--> \n') // UPDATE: \n in comment for new line.
function sum(a,b){
    console.log('Printing from the callback function DEFINITON');
    let add = a+b;
    return add;
}
*/
// setTimeout(function() => {console.log('printing via the new function ')},3000

//  1] creating the new file using FS module.
// const fs = require('fs')
// fs.writeFile('day2.txt','new allocation: cadet= Avi',(err)=>{
//     if (err){
//         throw 'retry'
//     }
//     console.log('CADET INFO ADDED')
// })
// ------- --------- ------------ ---------- ----- ---------  -------  ----------  ----------- ------ --- --- ---

// const file =require('express')()
// const port2 = 9000
// file.listen(
//     port2,
//     ()=>console.log('API is alive')
// )
// // creating end-point followed by callback after the route is called
// file.get('/service',(req,res)=>{
//     res.status(200).send({
//         message:'Welcome to service page',
//         service_type:'Shaping the Way of Speaking',
//         Bonus: 'No prior knowledge'  
//     })
// })
// ------------ -------- - - -        --------     ----------------- -------- ------------- ----------- ---------


/* practising the json objects and JSON format:


const Myjson ='{"n1":"katherine langfort","n2":"rashmika mandhana","n3":"smriti mandhana"}'
const myobj = JSON.parse(Myjson)
let text =""
for (const x in myobj){
    text+=myobj[x]+ ' ,'
    console.log(text)
}*/

// arrays in objects
/*const brand={
    "name":"BMW1",
    "model":"IX",
    "owner":"avi",
    "year":["2017","2018","2020","upto 2028"]
}
console.log(brand["year"])*/


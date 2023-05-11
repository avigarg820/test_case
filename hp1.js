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

console.log('Listening to songs on SPOTIFY & thinking of printing live time here')

const express =require('express');
const app =express();
const PORT = 8600;
// at this point our api hasn't defined any end-points but let's just run/fire it up[BY TYPING app.listen] by 100sec api
app.listen(
    PORT,
    ()=>console.log(`API  is alive on http://localhost:${PORT}`)
)
//  what we did below is creating an endpoint of already working API, by routing and callback
app.use(express.json());

app.get('/tshirt',(req,res)=>{
    res.status(200).send({
        tshirt_brand:'Louis Phillipe',
        size: 'large' 
    })
    
})
app.post('/tshirt/:id',(req,res)=>{
    const {id} = req.params;
    // in below line, the logo is a part of the url
    const {logo} = req.body ;
    if (!logo) {
        res.status(418).send({message: 'LOGO IS REQUIRED'})
    }
    res.send({
        tshirt:`👕 with your ${logo} and ID of ${id}`, 
    })

})

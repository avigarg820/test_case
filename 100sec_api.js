console.log('Listening to songs on SPOTIFY & thinking of printing live time here')

const express =require('express');
const app =express();
const PORT = 8600;
// at this point our api hasn't defined any end-points but let's just run/fire it up[BY TYPING app.listen] by 100sec api
app.listen(
    PORT,
    ()=>console.log(`API  is alive on http://localhost${PORT}`)
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
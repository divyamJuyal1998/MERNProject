const express = require('express');
const app = express();

const port = 3000

//serving statie files
app.use(express.static('public'))

//import 
require('./routes')(app);

app.set('view engine','ejs')

app.get('/profile/:id',(req,res)=>{
    res.send("you requested user no "+ req.params.id)
})

app.listen(port,()=>{
    console.log("server is running on port" + port);
})

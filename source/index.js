const express = require('express')
const path = require('path');
const cors = require('cors');

const app = express();

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());

app.use('/', (req, res)=>{
    res.send("Hola mundo")
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server funcionando`)
});
const express=require('express');
const app=express();
const cors = require('cors')
const itemsUTILS=require('./itemsUtils.js')
app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//delete data from json
app.delete('/items/:id',(req,res)=>{
  res.status(200).json(itemsUTILS.deleteItem(req.params.id))
})

//post data to json
app.post('/items',(req,res)=>
  res.status(201).json(itemsUTILS.addItem(req.body))
)

app.get('/items',(req,res)=>{
  //Get data from json
 const itemsList=itemsUTILS.getItemsFromJSON()
 res.status(200).json(itemsList)
})



app.listen(4000)
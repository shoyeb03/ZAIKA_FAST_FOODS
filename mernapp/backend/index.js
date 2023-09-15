const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const port = 5000;

// MongoDB setup (assuming you have a separate "db.js" file)
const mongoDB = require('./db');
mongoDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );

  next();

})



app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello shoyeb !!!!!!!!!!!!!!');
});

app.listen(port, () => {
  console.log(`App started at port number ${port}`);
});

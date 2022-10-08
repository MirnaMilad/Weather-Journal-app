// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// function to put the requirements in the projectData
function data(req,res) {

  projectData.date=req.body.date
  projectData.temp=req.body.temp
  projectData.content=req.body.content
  projectData.country = req.body.country
  
  res.send()
}
// make an end point post req to recieve data
app.post("/entry" , data)



 function data2 (req , res){
  res.send(projectData)
}
// get req to send projectData
app.get("/getTemperature", data2 )


  // Setup Server
  const port = 3030;

  // function gives feed back to the command line
  function running() {console.log(`The local host is running`)}

  app.listen(port, running)
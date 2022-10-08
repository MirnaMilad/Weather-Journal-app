/* Global Variables */
//declare button
const button = document.getElementById("generate");

// declare the key of api from OpenWeatherMap.com
const apiKey = "7195c619b08b4f9ab98230357222509";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// create an asynchronus function
const callBack = async () => {

//declare the label of country 
const countryInput = document.getElementById("countryInput").value;

// declare the link connects the country with the api key , I get the link from OpenWeatherMap.com to return data from the external api
const code =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${countryInput}&aqi=no`

try{
    const res = await fetch (code)
    // put the response in json code
    const data = await res.json();
    //find the temp from the json code
    const temp = data.current.temp_c;  
    // declare the label of feelings to use the information written in it to appear in the content 
    const info = document.getElementById("feelings");

    const feelings = info.value;

    // put the instructions in fetch to use the project
await fetch('/entry',{
    method:'post',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          date : newDate , temp:temp , content:feelings , country:countryInput
      })
})
const weather = await fetch("/getTemperature",{credentials: 'same-origin'});

const information = await weather.json();

console.log(information);

// return the data to the user 
document.getElementById("temp").innerHTML= `${temp}&#176;C`;
document.getElementById("date").innerHTML= newDate;
document.getElementById("content").innerHTML=feelings;
document.getElementById("country").innerHTML=countryInput;
}


// if any error happened
catch (error){
    console.log("error",error);
}
}
// create an event listener to call the function callBack when the user click on generate
button.addEventListener("click", callBack)


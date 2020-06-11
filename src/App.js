import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios"
import Header from "./Header"
import Photo from "./Photo"
import Info from "./Info"



function App() {

  const [nasaData, setNasaData] = useState([])
  console.log(nasaData)
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=rEPFFdc3h8b8XKRPqwkxwm1h2AiHZGtUFi2cTl1q")
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      {/* <Photo />
      <Info /> */}
    </div>
  )

}

export default App;
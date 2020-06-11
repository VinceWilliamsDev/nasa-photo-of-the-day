import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios"
import Header from "./Header"
import Photo from "./Photo"
import Info from "./Info"



function App() {

  const [nasaData, setNasaData] = useState(null)

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=rEPFFdc3h8b8XKRPqwkxwm1h2AiHZGtUFi2cTl1q")
      .then(res => {
        console.log(res)
        setNasaData(res.data)

        return (
          <div className="App">
            {/* <Header nasaData={nasaData}/> */}
            {/* <Photo />
            <Info /> */}
          </div>
        )
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



}

export default App;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from "./components/Title";
import Date from "./components/Date";
import Media from "./components/Media";
import Paragraph from "./components/Paragraph";

function App() {
  const [nasaData, setNasaData] =useState([])

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      setNasaData(response.data);
      console.log(response);
      return () => console.log('Cleanup');
    })
    .catch(err => console.log(err));
}, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title title={nasaData.title}/>
      <Date date={nasaData.date}/>
      <Media url={nasaData.url}/>
      <Paragraph explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;

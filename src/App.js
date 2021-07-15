import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from "./components/Title";
import Date from "./components/Date";
import Media from "./components/Media";
import Paragraph from "./components/Paragraph";
import styled from "styled-components";


const StyledApp = styled.div`
  background-color: #696969;
`;
 


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
    <StyledApp className="App">
      <Title title={nasaData.title}/>
      <Date date={nasaData.date}/>
      <Media url={nasaData.url} media_type={nasaData.media_type}/>
      <Paragraph explanation={nasaData.explanation}/>
    </StyledApp>
  );
}

export default App;

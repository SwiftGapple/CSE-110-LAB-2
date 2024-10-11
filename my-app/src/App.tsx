import React,{ useEffect, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { ToggleTheme } from './clickCounter';
import { AppMain } from './appMain';
import { ThemeContext, themes } from './themeContext';



function App() {

  //toggle theme button
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    console.log(currentTheme);
  };

  return (     
  <div>
    <ToggleTheme />
  </div>
  );
 }

export default App;
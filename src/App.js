import './App.css';
import Navbar from './Components/navbar.js';
import Textform from './Components/textform.js';
import About from './Components/about.js';
import Alert from './Components/alert.js';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(56, 56, 56)";
      document.body.style.color = "azure";
      showAlert("Successfully Enabled Dark Mode", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Successfully Enabled Light Mode", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text-Utils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Switch>
        <Route path="/about"> */}
          <About mode={mode}/>
        {/* </Route>
        <Route path="/"> */}
          <Textform mode={mode} showAlert={showAlert}/>
        {/* </Route>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;

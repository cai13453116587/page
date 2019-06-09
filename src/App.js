import React from 'react';
import Left from "./views/left"
import Routes from "./routers/index"
import {BrowserRouter,NavLink} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/left">1</NavLink>
      <NavLink to="dainmain">2</NavLink>
      <NavLink to="right">3</NavLink>
        <Routes/>
    </BrowserRouter>
    
  )
}

export default App;

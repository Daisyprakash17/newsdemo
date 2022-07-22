 
import './App.css';

 import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
 import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// this whole app is made using class based compnonets and if you want to change this then watch the video of code with harry video no 39 to 
// change this whole project into the function based componenets
let   pz=7;
 export default class App extends Component {
  
   render() {
     return (
       <div> 
          
              <BrowserRouter> 
                <NavBar/> 
                  <Routes>
                      <Route exact path="/" element={ < News  key="general"  pageSize={pz} country="in" category="general"/>}>       </Route> 
                      <Route exact path="/business" element={<News  key="business"  pageSize={pz} country="in" category="business"/>}>       </Route> 
                      <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pz} country="in" category="entertainment"/>}>       </Route> 
                      <Route exact path="/general" element={<News  key="general" pageSize={pz} country="in" category="general"/>}>       </Route> 
                      <Route exact path="/health"  element={<News key="health" pageSize={pz} country="in" category="health"/>}>       </Route> 
                      <Route exact path="/science"  element={<News key="science"  pageSize={pz} country="in" category="science"/>}>       </Route> 
                      <Route exact path="/sports" element={<News key="sports" pageSize={pz} country="in" category="sports"/>}>       </Route> 
                      <Route exact path="/technology" element={<News key="technology"pageSize={pz} country="in" category="technology"/>}>       </Route> 
                  </Routes>
        </BrowserRouter>
       </div>
     )
   }
 }
 
 
 

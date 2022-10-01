import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Error from './Components/Error';
import CategoryPage from './Pages/CategoryPage';



export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<CategoryPage/>}/>
            <Route path='/category' element={<CategoryPage/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App

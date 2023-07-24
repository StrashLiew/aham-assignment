import Navbar from './components/Navbar'
import Home from './components/Home'
import Customer from './components/Customer'
import Register from './components/Register'

import './App.css'
import {Route, Routes} from 'react-router-dom'

function App(){
  return (

    <div className = "background">
      <div><Navbar /></div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      
    </div>


    

  )
}

export default App
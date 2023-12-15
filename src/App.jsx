import { useState } from 'react'
import './App.css'
import ProductPage from './components/ProductPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'

function App() {
  

  return (
    <> 
       <BrowserRouter>

       <Routes>

   <Route path='/' element={<ProductPage />} />
   <Route path='/cart' element={<CartPage />}/>

       </Routes>
       
       
       
       </BrowserRouter>

      
        
    </>
  )
}

export default App

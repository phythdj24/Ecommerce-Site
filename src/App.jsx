import { useState } from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';

function App() {
  
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProductPage cartItems={cartItems} setCartItems={setCartItems}/>}
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

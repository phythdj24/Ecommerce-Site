import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({cartItems, setCartItems}) => {
      
  const removeFromCart = (index)=>{
      const updateCartItems = [...cartItems];
      updateCartItems.splice(index, 1)
      setCartItems(updateCartItems);
  };


  
  return (

    <>
     <h2>Cart</h2>

    <div className='cartmain'>
     
      {cartItems.map((item, index) => (
        <div className='addcart' key={index}>
          <img src={item.image} alt="" />
          <p>{item.title} - {item.price}$</p>
          <button onClick={removeFromCart} >Remove</button>
          
        </div>
      ))}
    </div>

  <Link to='/' >
  <button>Back TO Home</button>
  </Link>
    

    </>
  );
};

export default CartPage;

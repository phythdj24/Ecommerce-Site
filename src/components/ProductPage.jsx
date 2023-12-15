import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductPage = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id, title, price, image) => {
    const newItem = { id, title, price, image };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <div className="nav">
        <h2>Store</h2>
        <Link to="/cart">
          <h2>
            <FaShoppingCart /> {cartItems.length}
          </h2>
        </Link>
      </div>

      <div className="Main">
        {products.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}$</h3>
            <button
              onClick={() => addToCart(item.id, item.title, item.price, item.image)}
              className="btn"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      {cartItems.length === 0 && <p>Your Cart Is Empty</p>}
    </>
  );
};

export default ProductPage;

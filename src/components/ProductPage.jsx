import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductPage = () => {

    const [product, setProducts] = useState([])
    const [addCart, setAddcart] = useState(0)
  const FetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  const handleClick = ()=>{
        setAddcart( addCart + 1 )
  }



  return (
<>
    <div className='nav'>
    <h2>Store</h2>

 <Link to='/cart'>
 <h2> <FaShoppingCart /> {addCart} </h2>
 </Link>
   
   </div>
  
    <div className="Main">
        
       
       
        {
         product.map((item,index)=>(
            <div key={index} className="card">
            <img src={item.image} alt="" />
             <h2>{item.title}</h2>
             <h3>{item.price}$</h3>
             <button onClick={handleClick} className="btn">Add</button>


             </div>
         ))   
        }

        


    </div>
    </>


  )
};

export default ProductPage;

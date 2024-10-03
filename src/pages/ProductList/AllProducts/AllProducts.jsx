import React from 'react';
import { FaStar, FaClock, FaUser } from "react-icons/fa";
import "./AllProducts.css";

const AllProducts = ({ product }) => {
    const { title, rating, price, images, stock, returnPolicy } = product;
    return (
        <div>
            <div className="productCard card bg-base-100 shadow-xl ">
                <figure><img className='img mt-2' src={images} alt="place" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                        
                    </h2>
                    <div className="badge badge-warning"><FaStar className='me-2'></FaStar>
                            {rating}</div>
    <div className='rating-div'>
        <div className="flex items-center">
            <span className=''><FaUser className='me-1'></FaUser></span>
        <span  className="font-bold">Available Stock: {stock}</span>
        </div>
            
            <div className="flex items-center">
  <span className='text-gray-500'><FaClock className='me-1'></FaClock> </span>
  <span className='text-gray-500'> {returnPolicy}</span>
</div>
            
    </div>
    <div className="card-actions justify-between mt-4 border-t-2 border-base-400">
        <div>
            <h1 className='text-gray-500'>Discount Price:</h1>
        </div>
      <div className="font-bold text-xl">${price}</div> 
    </div>
    <div className="card-actions mt-auto">
      <button className="btn btn-primary m-auto">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllProducts;
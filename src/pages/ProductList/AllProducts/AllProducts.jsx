import React from 'react';
import { FaStar, FaClock, FaCartPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./AllProducts.css";

const AllProducts = ({ product }) => {
    const { id, title, rating, price, images, stock, returnPolicy } = product;
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle "Buy Now" button click
    const handleBuyNow = () => {
        // Navigate to the SingleProduct page with the product id
        navigate(`/product/${id}`);
    };

    return (
        <div className="productCard card bg-base-100 shadow-xl ">
            <figure><img className='img mt-2' src={images} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="badge badge-warning">
                    <FaStar className='me-2' /> {rating}
                </div>
                <div className='rating-div'>
                    <div className="flex items-center">
                        <FaCartPlus className='me-1' />
                        <span className="font-bold">Available Stock: {stock}</span>
                    </div>
                    <div className="flex items-center">
                        <FaClock className='me-1' />
                        <span className='text-gray-500'>{returnPolicy}</span>
                    </div>
                </div>
                <div className="card-actions justify-between mt-4 border-t-2 border-base-400">
                    <div>
                        <h1 className='text-gray-500'>Discount Price:</h1>
                    </div>
                    <div className="font-bold text-xl">${price}</div>
                </div>
                <div className="card-actions mt-auto">
                    <button
                        className="btn btn-primary m-auto"
                        onClick={handleBuyNow} // Add click event for Buy Now button
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;

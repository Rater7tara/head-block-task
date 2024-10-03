import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading/Loading';

const SingleProduct = () => {
  const { id } = useParams(); // Assumes you're passing product ID in the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the product details using dummyjson
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={product.thumbnail} alt={product.title} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="ml-8">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="py-4">{product.description}</p>
          <p className="text-3xl font-bold mb-4">${product.price}</p>
          <div className="flex space-x-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';
import Loading from '../../components/Loading/Loading';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.products); // Assuming the API returns an object with a 'products' key
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='product-main-div'>
            <div className='bg-blue-900 bg-opacity-80 pb-16'>
                <h4 className='text-lg text-white font-bold text-center pt-4 mb-2'>_____Product List_____</h4>
                <h1 className='text-3xl text-white font-bold text-center'>Our Products</h1>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-7  mt-10 ps-7 pe-7' >
                    {products.map(product => <AllProducts
                        key={product.id}
                        product={product}
                    ></AllProducts>)}
                </div>
            </div>
        </div>
    );
};

export default ProductList;

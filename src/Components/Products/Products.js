import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    // const addAllProducts = () => {
        // fetch('https://e-grocery-server.herokuapp.com/addProducts', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(fakeData)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
    // } 
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://e-grocery-server.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div className="row">
            {
               products.map(pd => <Product product={pd}></Product>) 
            }
        </div>
    );
};

export default Products;
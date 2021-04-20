import React from 'react';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
            <h3 className="text-center">Order from our featured Products</h3>
            <div className="d-flex justify-content-center">
                <input className="form-control" type="text" placeholder="Search..."/>
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
        <Products />
        </div>
    );
};

export default Home;
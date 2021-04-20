import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const product = props.product;
    const {_id, name, img, price} = product;
    return (
        <div className="col-md-4">
            <div className="m-2 shadow rounded p-3 h-100">
                <img className="img-fluid" src={img} alt=""/>
                <h3>{name}</h3>
                <h4>৳ {price}</h4>
                <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary">Buy Now</button>
                </Link> 
                
            </div>
            

            
        </div>
    );
};

export default Product;
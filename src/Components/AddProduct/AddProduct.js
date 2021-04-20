import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {

    const [product, setProduct] = useState({});
    const history = useHistory();
    const handleSubmit = (pd) => {
        pd.preventDefault();
        fetch('https://e-grocery-server.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            alert('Product added successfully');
            history.replace('/');
        })
    }

    const handleBlur = (pd) => {
        const newProduct = product;
        newProduct[pd.target.name] = pd.target.value;
        setProduct(newProduct);

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Add new product</h3>
                    <form onSubmit={handleSubmit} required>
                        <input className="form-control" type="text" onBlur={handleBlur} name="name" placeholder="Product Name" id="" required />
                        <br/>
                        <input className="form-control" type="text" onBlur={handleBlur} name="weight" placeholder="Weight" id="" required />
                        <br/>
                        <input className="form-control" type="text" onBlur={handleBlur} name="img" placeholder="Image" id="" required />
                        <br/>
                        <input className="form-control" type="text" onBlur={handleBlur} name="price" placeholder="Price" id="" required />
                        <br/>
                        <button className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
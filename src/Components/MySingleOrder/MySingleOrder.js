import React from 'react';
import { useHistory } from 'react-router';

const MySingleOrder = (props) => {
    const history = useHistory();
    const order = props.order;
    const {_id, productName, productWeight, productPrice, productImg} = order;

    const handleDelete = () => {
        fetch(`https://e-grocery-server.herokuapp.com/deleteOrder/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('Order deleted successfully');
            history.replace('/');
        })
    };
    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between shadow p-4">
                <div className="mb-3 ms-5 me-5">
                    <img className="img-fluid" src={productImg} alt=""/>
                </div>
                <div>
                    <h6>{productName}</h6>
                    <h5>Weight: {productWeight}</h5>
                    <p>Price:৳ {productPrice}</p>
                    <button onClick={handleDelete} className="btn btn-danger">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleOrder;
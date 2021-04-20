import React from 'react';
import { useHistory } from 'react-router';

const SingleOrder = (props) => {
    const history = useHistory();
    const order = props.order;
    const { _id, customerName, customerEmail, productName, productWeight, productPrice } = order;
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
        <tr>
            <td>{customerName}</td>
            <td>{customerEmail}</td>
            <td>{productName}</td>
            <td>{productWeight}</td>
            <td>{productPrice}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default SingleOrder;
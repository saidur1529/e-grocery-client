import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const user = JSON.parse(localStorage.getItem('user')); 
    useEffect(() => {
        fetch(`https://e-grocery-server.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            const newOrderData = {...orderData};
            newOrderData.productName = data.name;
            newOrderData.productWeight = data.weight;
            newOrderData.productPrice = data.price;
            newOrderData.productImg = data.img; 
            setOrderData(newOrderData);
        });
    }, []);
    const [orderData, setOrderData] = useState({
        customerName: user.name,
        customerEmail: user.email
    });
    const handleCheckout = (pd) => {
        pd.preventDefault();
        fetch('https://e-grocery-server.herokuapp.com/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            alert('Your ordered placed successfully');
            history.replace('/');
        })
    }
    return (
        <div className="container">
  <div className="py-5 text-center">
    
    <h2>Checkout</h2>
    <p className="lead">Hello, <strong>{user.name}</strong>!</p>
  </div>
  <div className="row">
    <div className="col-md-12 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{product.name}</h6>
            <small className="text-muted">{product.weight}</small>
          </div>
          <span className="text-muted">৳{product.price}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (BDT)</span>
          <strong>৳ {product.price}</strong>
        </li>
      </ul>
      <button className="btn btn-primary btn-lg btn-block text-center" onClick={handleCheckout} type="submit">Checkout</button>
    </div>
  </div>
</div>
    );
};
    
export default Checkout;
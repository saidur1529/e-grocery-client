import React, { useEffect, useState } from 'react';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() =>{
        fetch(`https://e-grocery-server.herokuapp.com/order/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, []);
    return (
        <div className="container">
            <h4>Hello, {user.name}</h4>
            <span className="text-muted">Below Your Recent Orders</span>
            <div className="row">
            {
                myOrders.map(order => <MySingleOrder order={order}></MySingleOrder>)
            }
            </div>
        </div>
    );
};

export default MyOrders;
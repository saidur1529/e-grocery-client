import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrder from '../SignleOrder/SingleOrder';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`https://e-grocery-server.herokuapp.com/orders/`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);
    return (
        <div className="row">
            <div className="col-md-4">
            <Sidebar />
            </div>
            <div className="col-md-8">
                <h4 className="m-5 text-center">Manage All Products</h4>
                <table className="table">
                    <thead>
                        <tr>
                           <th>Customer Name</th> 
                           <th>Email</th> 
                           <th>Product Name</th> 
                           <th>Description</th>
                           <th>Price</th> 
                           <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <SingleOrder order={order}></SingleOrder> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;
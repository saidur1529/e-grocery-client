import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-5 p-5">
        <Link to='/allOrder'>
        <h3>All Order</h3> 
        </Link> 
        <Link to='/addProduct'><h3>Add new Product</h3>  </Link>  
      </div>
    );
};

export default Sidebar;
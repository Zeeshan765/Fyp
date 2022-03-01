
import React from 'react';
import "./cart.css";

const cart = () => {
  return (
      <>
     <div className='cart-container'>


          <table id="products">
  <tr>
        <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
  </tr>
  <tr>
            <td>Nvidia</td>
            <td>300</td>
            <td>Remove</td>
            
          </tr>
          <tr>
            <td>Ryzen</td>
            <td>1220</td>
            <td>Remove</td>
            
          </tr>
          <tr>
            <td>Furry</td>
            <td>300</td>
            <td>Remove</td>
            
          </tr>
          <tfoot className='footer'>
          <tr>
            <td>Grand Total</td>
            <td>19999</td>
            
          </tr>
          </tfoot>
</table>
<button className='checkout-btn' > Order</button>
  </div>
      </>
  );
};

export default cart;

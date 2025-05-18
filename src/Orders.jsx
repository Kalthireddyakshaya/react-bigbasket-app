// import React from 'react'
// import { useSelector } from 'react-redux'

// function Orders() {
//   let ordered=useSelector(globalState=>globalState.orders)
//   let orderedListItems=ordered.map(orderedItem)=>(
//     <li key={orderId}>
//     {orderedItem.orderId},
//     {orderItem.purchaseDateTime},
//     {
//       orderItem.items.map(item,index)=>(
//         <li key={index}>
//           {item.name},
//           {item.price}*{item.quantity}
//         </li>
      
//     ))}
//     {orderedItem.finalPrice}
//     </li>

//   return (
//     <>
//     (orderDetails===0)?
//     <h1>No orders are placed</h1>
//     <>
//     {orderListItems}
//     </>
//     </>
//   )
// };

// export default Orders
// import React from 'react';
// import { useSelector } from 'react-redux';

// function Orders() {



 // let ordered = useSelector(globalState => globalState.orders);

//   let orderedListItems = ordered.map((orderedItem) => (
//     <li key={orderedItem.orderId}>
//       {orderedItem.orderId},
//       {orderedItem.purchaseDateTime},
//       {
//         orderedItem.items.map((item, index) => (
//           <li key={index}>
//             {item.name},
//             {item.price} * {item.quantity}
//           </li>
//         ))
//       }
//       {orderedItem.finalPrice}
//     </li>
//   ));

//   return (
//     <>
//       {(ordered.length === 0) ? (
//         <h1>No orders are placed</h1>
//       ) : (
//         <>
//           {orderedListItems}
//         </>
//       )}
//     </>
//   );
// };

// export default Orders;



//extra//
// let ordered = useSelector(globalState => globalState.orders) || [];

// let orderedListItems = ordered.map((orderedItem, i) => (
//   <li key={i}>
//     {orderedItem.orderId}, {orderedItem.purchaseDateTime}
//     <ul>
//       {orderedItem.items.map((item, index) => (
//         <li key={index}>
//           {item.name}, {item.price} × {item.quantity}
//         </li>
//       ))}
//     </ul>
//     Total: {orderedItem.finalPrice}
//   </li>
// ));
// return (
//   <>
//     {ordered.length === 0 ? (
//       <h1>No orders are placed</h1>
//     ) : (
//       <ul>{orderedListItems}</ul>
//     )}
//   </>
// );
// }
// export default Orders;

// import React from 'react';
// import { useSelector } from 'react-redux';

// function Orders() {
//   let ordered = useSelector(globalState => globalState.orders) || [];

//   let orderedListItems = ordered.map((orderedItem, i) => (
//     <li key={i}>
//       {orderedItem.orderId || "N/A"}, {orderedItem.purchaseDateTime || "Date not available"}
//       <ul>
//         {Array.isArray(orderedItem.items) ? (
//           orderedItem.items.map((item, index) => (
//             <li key={index}>
//               {item.name}, {item.price} × {item.quantity}
//             </li>
//           ))
//         ) : (
//           <li>No items available</li>
//         )}
//       </ul>
//       Total: {orderedItem.finalPrice || "Price not available"}
//     </li>
//   ));

//   return (
//     <>
//       {ordered.length === 0 ? (
//         <h1>No orders are placed</h1>
//       ) : (
//         <ul>{orderedListItems}</ul>
//       )}
//     </>
//   );
// }

// export default Orders;
import React from 'react';
import { useSelector } from 'react-redux';
import './Orders.css';

function Orders() {
  const orderedItems = useSelector(state => state.orders);

  const renderOrders = orderedItems.map(orderitem => (
    <div className="order-card" key={orderitem.orderId}>
      <h3>Order ID: {orderitem.orderId}</h3>
      <p><strong>Date:</strong> {orderitem.date}</p>
      <p><strong>Final Price:</strong> ₹{orderitem.finalPrice}</p>
      <h4>Items:</h4>
      <ul>
        {orderitem.items.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orderedItems.length === 0 ? (
        <p className="empty-message">No orders placed yet.</p>
      ) : (
        renderOrders
      )}
    </div>
    </>
  );
}

export default Orders;
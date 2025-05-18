// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import './Dairy.css';
// import { AddToCart } from './store';

// function Dairy() {
//   const dispatch=useDispatch();
//   const dairyproducts = useSelector((state) => state.products.dairy);

//   return (
//     <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
//       <h1
//         style={{
//           textAlign: 'center',
//           marginBottom: '25px',
//           fontSize: '42px',
//           fontWeight: 'bold',
//           color: '#4a148c',
//           letterSpacing: '1px',
//           textShadow: '1px 1px 2px #ccc'
//         }}
//       >
//          Dairy Products
//       </h1>
//       <div className="product-container">
//         {dairyproducts.map((product, index) => (
//           <div key={index} className="Dairy-item">
//             <img src={product.image} alt={product.name} />
//             <div className="Dairy-name">{product.name}</div>
//             <div className="Dairy-price">₹{product.price.toFixed(2)}</div>
//             <button onClick={() => dispatch(AddToCart(product))}>
//                           Add to Cart
//                   </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dairy;
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Dairy.css';
// import { AddToCart } from './store';

// function Dairy() {
//   const dispatch = useDispatch();
//   const dairyproducts = useSelector((state) => state.products.dairy);

//   const dairyListItems = dairyproducts.map((product, index) => (
//     <div key={index} className="Dairy-item">
//       <img src={product.image} alt={product.name} />
//       <div className="Dairy-name">{product.name}</div>
//       <div className="Dairy-price">₹{product.price.toFixed(2)}</div>
//       <button onClick={() => dispatch(AddToCart(product))}>
//         Add to Cart
//       </button>
//     </div>
//   ));

//   return (
//     <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
//       <h1
//         style={{
//           textAlign: 'center',
//           marginBottom: '25px',
//           fontSize: '42px',
//           fontWeight: 'bold',
//           color: '#4a148c',
//           letterSpacing: '1px',
//           textShadow: '1px 1px 2px #ccc'
//         }}
//       >
//         Dairy Products
//       </h1>
//       <div className="product-container">
//         {dairyListItems}
//       </div>
//     </div>
//   );
// }

// export default Dairy;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Dairy.css';
// import { AddToCart } from './store';

// function Dairy() {
//   const dispatch = useDispatch();
//   const dairyproducts = useSelector((state) => state.products.dairy);

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(dairyproducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = dairyproducts.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
//       <h1
//         style={{
//           textAlign: 'center',
//           marginBottom: '25px',
//           fontSize: '42px',
//           fontWeight: 'bold',
//           color: '#4a148c',
//           letterSpacing: '1px',
//           textShadow: '1px 1px 2px #ccc'
//         }}
//       >
//         Dairy Products
//       </h1>
//       <div className="product-container">
//         {currentItems.map((product, index) => (
//           <div key={index} className="Dairy-item">
//             <img src={product.image} alt={product.name} />
//             <div className="Dairy-name">{product.name}</div>
//             <div className="Dairy-price">₹{product.price.toFixed(2)}</div>
//             <button onClick={() => dispatch(AddToCart(product))}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             className={currentPage === index + 1 ? 'active' : ''}
//             onClick={() => goToPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dairy;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dairy.css';
import { AddToCart } from './store';

function Dairy() {
  const dispatch = useDispatch();
  const dairyproducts = useSelector((state) => state.products.dairy || []);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000); // default max price

  const itemsPerPage = 10;

  // Filter by max price
  const filteredProducts = dairyproducts.filter((product) => product.price <= maxPrice);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '25px',
          fontSize: '42px',
          fontWeight: 'bold',
          color: '#4a148c',
          letterSpacing: '1px',
          textShadow: '1px 1px 2px #ccc',
        }}
      >
        Dairy Products
      </h1>

      {/* Price Filter */}
      <div className="filters" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <label htmlFor="priceSlider" style={{ fontWeight: 'bold' }}>
          Show dairy products under: ₹{maxPrice}
        </label>
        <br />
        <input
          type="range"
          id="priceSlider"
          min="1"
          max="1000"
          step="1"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(Number(e.target.value));
            setCurrentPage(1); // reset to page 1
          }}
          style={{ width: '300px', marginTop: '10px' }}
        />
      </div>

      {/* Product Cards */}
      <div className="product-container">
        {currentItems.length > 0 ? (
          currentItems.map((product, index) => (
            <div key={index} className="Dairy-item">
              <img src={product.image} alt={product.name} />
              <div className="Dairy-name">{product.name}</div>
              <div className="Dairy-price">₹{product.price.toFixed(2)}</div>
              <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            No dairy products found under ₹{maxPrice}.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Dairy;

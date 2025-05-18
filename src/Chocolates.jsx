// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import './chocolates.css';
// import { AddToCart } from './store';



// function Chocolates() {
//   const dispatch=useDispatch();
//   const chocolatesproducts = useSelector((state) => state.products.chocolates);


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
//          Chocolates
//       </h1>
//       <div className="product-container">
//         {chocolatesproducts.map((product, index) => (
//           <div key={index} className="chocolate-item">
//             <img src={product.image} alt={product.name} />
//             <div className="chocolate-name">{product.name}</div>
//             <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
//             <button onClick={() => dispatch(AddToCart(product))}>
//                                       Add to Cart
//                               </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Chocolates
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './chocolates.css';
// import { AddToCart } from './store';

// function Chocolates() {
//   const dispatch = useDispatch();
//   const chocolatesproducts = useSelector((state) => state.products.chocolates);

//   const chocolatesListItems = chocolatesproducts.map((product, index) => (
//     <div key={index} className="chocolate-item">
//       <img src={product.image} alt={product.name} />
//       <div className="chocolate-name">{product.name}</div>
//       <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
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
//         Chocolates
//       </h1>
//       <div className="product-container">
//         {chocolatesListItems}
//       </div>
//     </div>
//   );
// }

// export default Chocolates;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './chocolates.css';
// import { AddToCart } from './store';

// function Chocolates() {
//   const dispatch = useDispatch();
//   const chocolatesproducts = useSelector((state) => state.products.chocolates);

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(chocolatesproducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = chocolatesproducts.slice(indexOfFirstItem, indexOfLastItem);

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
//         Chocolates
//       </h1>

//       <div className="product-container">
//         {currentItems.map((product, index) => (
//           <div key={index} className="chocolate-item">
//             <img src={product.image} alt={product.name} />
//             <div className="chocolate-name">{product.name}</div>
//             <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
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

// export default Chocolates;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './chocolates.css';
// import { AddToCart } from './store';

// function Chocolates() {
//   const dispatch = useDispatch();
//   const chocolatesproducts = useSelector((state) => state.products.chocolates);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // 🔹 Price Range Filter State
//   const [priceRange, setPriceRange] = useState(500); // max price threshold

//   // 🔹 Filter chocolates based on selected price range
//   const filteredProducts = chocolatesproducts.filter((product) => product.price <= priceRange);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

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
//         Chocolates
//       </h1>

//       {/* 🔸 Price Range Slider */}
//       <div className="filters">
//         <label htmlFor="priceRange">Max Price: ₹{priceRange}</label>
//         <input
//           type="range"
//           id="priceRange"
//           min="0"
//           max="1000"
//           step="10"
//           value={priceRange}
//           onChange={(e) => {
//             setPriceRange(Number(e.target.value));
//             setCurrentPage(1); // reset to first page when price changes
//           }}
//         />
//       </div>

//       {/* 🔸 Product Cards */}
//       <div className="product-container">
//         {currentItems.length > 0 ? (
//           currentItems.map((product, index) => (
//             <div key={index} className="chocolate-item">
//               <img src={product.image} alt={product.name} />
//               <div className="chocolate-name">{product.name}</div>
//               <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
//               <button onClick={() => dispatch(AddToCart(product))}>
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
//             No chocolates found under ₹{priceRange}.
//           </p>
//         )}
//       </div>

//       {/* 🔸 Pagination */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//             Previous
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               className={currentPage === index + 1 ? 'active' : ''}
//               onClick={() => goToPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chocolates;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './chocolates.css';
// import { AddToCart } from './store';

// function Chocolates() {
//   const dispatch = useDispatch();
//   const chocolatesproducts = useSelector((state) => state.products.chocolates || []); // Fallback to empty array

//   const [currentPage, setCurrentPage] = useState(1);
//   const [priceRange, setPriceRange] = useState(500); // default price range

//   const itemsPerPage = 5;

//   // Filter chocolates based on selected price range
//   const filteredProducts = chocolatesproducts.filter(
//     (product) => product.price <= priceRange
//   );

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className="chocolates-page">
//       <h1 className="chocolates-heading">Chocolates</h1>

//       {/* Price Filter */}
//       <div className="filters">
//         <label htmlFor="priceRange">Max Price: ₹{priceRange}</label>
//         <input
//           type="range"
//           id="priceRange"
//           min="0"
//           max="1000"
//           step="10"
//           value={priceRange}
//           onChange={(e) => {
//             setPriceRange(Number(e.target.value));
//             setCurrentPage(1); // reset to page 1
//           }}
//         />
//       </div>

//       {/* Product Cards */}
//       <div className="product-container">
//         {currentItems.length > 0 ? (
//           currentItems.map((product, index) => (
//             <div className="chocolate-item" key={index}>
//               <img src={product.image} alt={product.name} />
//               <div className="chocolate-name">{product.name}</div>
//               <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
//               <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
//             No chocolates found under ₹{priceRange}.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//             Previous
//           </button>

//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               className={currentPage === index + 1 ? 'active' : ''}
//               onClick={() => goToPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chocolates;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chocolates.css';
import { AddToCart } from './store';

function Chocolates() {
  const dispatch = useDispatch();
  const chocolatesproducts = useSelector((state) => state.products.chocolates || []);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000); // Default maximum price

  const itemsPerPage = 10;

  const filteredProducts = chocolatesproducts.filter(
    (product) => product.price <= maxPrice
  );

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
    <div className="chocolates-page">
      <h1 className="chocolates-heading">Chocolates</h1>

      {/* Price Filter */}
      <div className="filters">
        <label htmlFor="priceSlider" style={{ fontWeight: 'bold' }}>
          Show chocolates under: ₹{maxPrice}
        </label>
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
        />
      </div>

      {/* Product Cards */}
      <div className="product-container">
        {currentItems.length > 0 ? (
          currentItems.map((product, index) => (
            <div className="chocolate-item" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="chocolate-name">{product.name}</div>
              <div className="chocolate-price">₹{product.price.toFixed(2)}</div>
              <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
            No chocolates found under ₹{maxPrice}.
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

export default Chocolates;

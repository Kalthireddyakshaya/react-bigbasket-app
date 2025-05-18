//  import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './NonVeg.css';
// import { AddToCart } from './store';

// function NonVegItems() {
//   const dispatch=useDispatch();
//   const nonvegproducts = useSelector((state) => state.products.nonveg);

//   return (
//     <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
//       <h1
//         style={{
//           textAlign: 'center',
//           marginBottom: '30px',
//           fontSize: '42px',
//           fontWeight: 'bold',
//           color: '#4a148c',
//           letterSpacing: '1px',
//           textShadow: '1px 1px 2px #ccc',
//           padding: '10px 0'
//         }}
//       >
//          Non Veg Products
//       </h1>

//       <div className="product-container">
//         {nonvegproducts.map((product, index) => (
//           <div key={index} className="nonveg-item">
//             <img src={product.image} alt={product.name} />
//             <div className="nonveg-name">{product.name}</div>
//             <div className="nonveg-price">₹{product.price.toFixed(2)}</div>
//             {/* <button className="nonveg-button">Add to cart</button> */}
//              <button onClick={() => dispatch(AddToCart(product))}>
//                           Add to Cart
//                         </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NonVegItems;
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './NonVeg.css';
// import { AddToCart } from './store';

// function NonVegItems() {
//   const dispatch = useDispatch();
//   const nonvegproducts = useSelector((state) => state.products.nonveg);

//   const nonVegListItems = nonvegproducts.map((product, index) => (
//     <div key={index} className="nonveg-item">
//       <img src={product.image} alt={product.name} />
//       <div className="nonveg-name">{product.name}</div>
//       <div className="nonveg-price">₹{product.price.toFixed(2)}</div>
//       <button onClick={() => dispatch(AddToCart(product))}>
//         Add to Cart
//       </button>
//     </div>
//   ));

//   return (
//     <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
//       <h1
//         style={{
//           textAlign: 'center',
//           marginBottom: '30px',
//           fontSize: '42px',
//           fontWeight: 'bold',
//           color: '#4a148c',
//           letterSpacing: '1px',
//           textShadow: '1px 1px 2px #ccc',
//           padding: '10px 0'
//         }}
//       >
//         Non Veg Products
//       </h1>
//       <div className="product-container">
//         {nonVegListItems}
//       </div>
//     </div>
//   );
// }

// export default NonVegItems;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AddToCart } from './store';
// import './NonVeg.css';

// const priceRanges = [
//   { value: 'Rs 1 to Rs 50', min: 1, max: 50 },
//   { value: 'Rs 51 to Rs 100', min: 51, max: 100 },
//   { value: 'Rs 101 to Rs 200', min: 101, max: 200 },
//   { value: 'Rs 201 to Rs 500', min: 201, max: 500 },
//   { value: 'More than Rs 500', min: 501, max: Infinity },
// ];

// function NonVegItems() {
//   const dispatch = useDispatch();
//   const nonvegProducts = useSelector((state) => state.products.nonveg);

//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRanges, setSelectedRanges] = useState([]);

//   const handleCheckboxChange = (value) => {
//     if (selectedRanges.includes(value)) {
//       setSelectedRanges((prev) => prev.filter((r) => r !== value));
//     } else {
//       setSelectedRanges((prev) => [...prev, value]);
//     }
//     setCurrentPage(1);
//   };

//   const activeRanges = priceRanges.filter((range) =>
//     selectedRanges.includes(range.value)
//   );

//   const filteredProducts =
//     selectedRanges.length === 0
//       ? nonvegProducts
//       : nonvegProducts.filter((product) =>
//           activeRanges.some(
//             (range) => product.price >= range.min && product.price <= range.max
//           )
//         );

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
//     <div className="nonveg-page">
//       <h1>Non Veg Products</h1>

//       {/* Filter Section */}
//       <div className="filters">
//         <h4>Filter by Price</h4>
//         {priceRanges.map((range) => (
//           <label key={range.value} style={{ marginRight: '15px' }}>
//             <input
//               type="checkbox"
//               checked={selectedRanges.includes(range.value)}
//               onChange={() => handleCheckboxChange(range.value)}
//             />
//             {range.value}
//           </label>
//         ))}
//         <button onClick={() => setSelectedRanges([])} style={{ marginLeft: '20px' }}>
//           Clear All Filters
//         </button>
//       </div>

//       {/* Product Cards */}
//       <div className="product-container">
//         {currentItems.map((product, index) => (
//           <div key={index} className="nonveg-item">
//             <img src={product.image} alt={product.name} />
//             <div className="nonveg-name">{product.name}</div>
//             <div className="nonveg-price">₹{product.price.toFixed(2)}</div>
//             <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
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

//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NonVegItems;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from './store';
import './NonVeg.css';

const priceRanges = [
  { value: 'Rs 1 to Rs 50', min: 1, max: 50 },
  { value: 'Rs 51 to Rs 100', min: 51, max: 100 },
  { value: 'Rs 101 to Rs 200', min: 101, max: 200 },
  { value: 'Rs 201 to Rs 500', min: 201, max: 500 },
  { value: 'More than Rs 500', min: 501, max: Infinity },
];

function NonVegItems() {
  const dispatch = useDispatch();
  const nonvegProducts = useSelector((state) => state.products.nonveg || []);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedRanges((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value]
    );
    setCurrentPage(1);
  };

  const activeRanges = priceRanges.filter((range) =>
    selectedRanges.includes(range.value)
  );

  const filteredProducts =
    selectedRanges.length === 0
      ? nonvegProducts
      : nonvegProducts.filter((product) =>
          activeRanges.some(
            (range) => product.price >= range.min && product.price <= range.max
          )
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
    <div className="nonveg-page">
      <h1>Non Veg Products</h1>

      {/* Filter Checkboxes */}
      <div className="checkbox-container">
        {priceRanges.map((range) => (
          <label key={range.value}>
            <input
              type="checkbox"
              checked={selectedRanges.includes(range.value)}
              onChange={() => handleCheckboxChange(range.value)}
            />
            {range.value}
          </label>
        ))}
        <button onClick={() => setSelectedRanges([])}>Clear All Filters</button>
      </div>

      {/* Product Cards */}
      <div className="product-container">
        {currentItems.length > 0 ? (
          currentItems.map((product, index) => (
            <div key={index} className="nonveg-item">
              <img src={product.image} alt={product.name} />
              <div className="nonveg-name">{product.name}</div>
              <div className="nonveg-price">₹{product.price.toFixed(2)}</div>
              <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            No products found in selected price range.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
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

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NonVegItems;

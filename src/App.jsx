
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {
  Home,
  Apple,
  Fish,
  CandyCane,
  ShoppingCart,
  Info,
  LogIn,
  Phone,
  Milk,
  ClipboardList
} from 'lucide-react';

import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import Chocolates from './Chocolates';
import Dairy from './Dairy';
import Orders from './Orders';
import Cart from './Cart';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HomeComponent from './Home';
// import SignIn from './SignIn';
import SignUp from './SignUp'; // ✅ Make sure this file exists
import './menu.css';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './store';
import SignIn from './SignIn';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems || []);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //const { isAuthenticated, currentUser } = useSelector(state => state.user);
const userState = useSelector(state => state.user || {});
const { isAuthenticated, currentUser } = userState;

  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="icon">
          <h3 className="logo">Big Basket</h3>
          <Link to="/home"><Home size={20} /> Home</Link>
          <Link to="/veg"><Apple size={20} /> Veg Items</Link>
          <Link to="/nonveg"><Fish size={20} /> NonVeg Items</Link>
          <Link to="/chocolates"><CandyCane size={20} /> Chocolates</Link>
          <Link to="/dairy"><Milk size={20} /> Dairy</Link>
          <Link to="/orders"><ClipboardList size={20} /> Orders</Link>

          {/* ✅ Authenticated user welcome and logout */}
          {isAuthenticated ? (
            <div className="welcome">
              <span>Welcome, {currentUser.username}</span>
              <button onClick={() => dispatch(logoutUser())}>Log Out</button>
            </div>
          ) : (
            <Link to="/signIn"><LogIn size={20}/> SignIn</Link>
          )}

          <Link to="/cart"><ShoppingCart size={20}/> Cart {totalCartCount}</Link>
          <Link to="/aboutus"><Info size={20}/> About Us</Link>
          <Link to="/contactus"><Phone size={20}/> Contact Us</Link>
        </div>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/veg" element={<VegItems />} />
          <Route path="/nonveg" element={<NonVegItems />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />

          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Cart from './Cart';
import PurchaseHistory from './PurchaseHistory';
import Food from './Food';
import Drinks from './Drinks';
import "./App.css";

function App() {
 

    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/food">Food</Link>
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/purchasehistory">Purchase History</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contactus">Contact Us</Link>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/drinks" element={<Drinks />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/purchasehistory" element={<PurchaseHistory />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/page/Home';
import Services from './components/page/Services';
import Products from './components/page/Products';
import SignUp from './components/page/SignUp';


function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" element={<Products />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</Router>
    	</>
  	);
}
               
export default App;

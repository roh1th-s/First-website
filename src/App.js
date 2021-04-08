import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/navbar'
import Home from './components/pages/home'
import Products from './components/pages/products';
import Services from './components/pages/services';
import Signup from './components/pages/signup';

function App() {
	return (
		<> 
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home}/> 
				<Route path="/products" component={Products}/>
				<Route path="/services" component={Services}/>
				<Route path="/sign-up" component={Signup}/>
			</Switch>
		</Router>
		</>
	);
}

export default App;

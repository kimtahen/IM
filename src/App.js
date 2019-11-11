import React,{useEffect} from 'react';
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Contents from './Components/Contents'
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
function App(){
	var router;
	useEffect(()=>{
		router = <Router><Redirect to="/home"/></Router>;
	},[]);
	return (
		<div>
			{router}
			<Header />
			<Sidebar />
			<Contents />

		</div>
	)
}
export default App;
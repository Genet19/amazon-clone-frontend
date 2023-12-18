import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./Stateprovider";
import Login from "./Login";
import { auth } from "./firebase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { Payment } from "@mui/icons-material";

import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe(
	'pk_test_51ON28TGujzaGf1jUlqNtWGIrhVXcuTPDhGAbhexbJ13niACT9GCME1T2YCOyhZkr7Xty2SVJ78GHxUJHLEP45lWU001WVlmgLz'
);



function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/order" element={<order />} />
					<Route path="/Login" element={<Login />} />
					<Route
						path="/Payment"
						element={
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						}
					/>

					<Route
						path="/Checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => (
				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Order;


// import React, { useState, useEffect } from "react";
// import { db } from "./firebase";
// import Order from "./Order";
// import "./Order.css";
// import { useStateValue } from "./Stateprovider";
// // import { useStateValue } from "./StateProvider";

// function Order() {
// 	const [{ basket, user }, dispatch] = useStateValue();

// 	const [order, setOrder] = useState([]);

// 	useEffect(() => {
// 		if (user) {
// 			db.collection("users")
// 				.doc(user?.uid)
// 				.collection("order")
// 				.orderBy("created", "desc")
// 				.onSnapshot((snapshot) =>
// 					setOrder(
// 						snapshot.docs.map((doc) => ({
// 							id: doc.id,
// 							data: doc.data()
// 						}))
// 					)
// 				);
// 		} else {
// 			setOrder([]);
// 		}
// 	}, [user]);
// 	return (
// 		<div className="order">
// 			<h1>Your Order</h1>
// 			<div className="order__order">
// 				{order?.map((order) => (
// 					<Order order={order} />
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Order;
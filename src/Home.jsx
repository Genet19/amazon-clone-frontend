import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="Alangbudu Layered Initial Necklaces for Women, 14K Real Gold Plated Paperclip Chain Necklace Cute Hexagon Letter Pendant Initial Tarnish Gold Jewelry"
						price={11.96}
						rating={5}
						image="https://m.media-amazon.com/images/I/613fRwnwUXL._AC_UL320_.jpg"
					/>
					<Product
						id="49538094"
						title="Christmas Gifts for Women - Monogram Beach Tote Bag Makeup Bag Personalized Birthday Gifts for Women, Customized Gifts for Wife Girlfriend Friend Female Friendship Mom Teacher Sister Boss Gifts Idea K"
						price={27.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81UbgglwazL._AC_UL320_.jpg"
					/>
					
				</div>
				<div className="home__row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
					<Product
						id="23445931"
						title="amidoa Graphic Shirts for Men Casual Short Sleeve Crewneck Summer Tees Top Novelty Tie Dye Muscle T-Shirt Classic Fit Outfits"
						price={7.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71+i6E86oPL._AC_SX679_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;













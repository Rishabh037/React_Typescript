import React from "react";

const Product = (name, price) => {
	return (
		<div>
			<h2>Product Name : {name}</h2>
			<h2>Product Price : {price}</h2>
		</div>
	);
};

export default Product;

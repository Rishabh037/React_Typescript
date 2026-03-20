import React from "react";

const Product = (props) => {
	return (
		<div>
			<h2>Product Name : {props.name}</h2>
			<h2>Product Price : {props.price}</h2>
		</div>
	);
};

export default Product;

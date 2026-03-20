import React from "react";

const Greeting = () => {
	const greet = "Hello";
	const date = new Date();

	return (
		<div>
			<h1>{greet}</h1>
			<h1>Date : {date.getDate()}</h1>
		</div>
	);
};

export default Greeting;

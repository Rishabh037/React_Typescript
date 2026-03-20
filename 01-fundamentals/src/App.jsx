import React from "react";
import Greet from "./01.Fundamentals/01.components/Greet";
import WelcomeMessage from "./01.Fundamentals/02.jsx/WelcomeMessage";
import Jsxrule from "./01.Fundamentals/03.jsx-rule/Jsxrule";
import Header from "./01.Fundamentals/04.Multiple-components/Header";
import MainContent from "./01.Fundamentals/04.Multiple-components/MainContent";
import Footer from "./01.Fundamentals/04.Multiple-components/Footer";
import Greeting from "./01.Fundamentals/05.Dynamic-Content/Greeting";
import ProductInfo from "./01.Fundamentals/05.Dynamic-Content/ProductInfo";
import UserList from "./01.Fundamentals/06.List-of-data/UserList";
import ProductList from "./01.Fundamentals/06.List-of-data/ProductList";
import Person from "./01.Fundamentals/07.Props/Person";
import Product from "./01.Fundamentals/07.Props/Product";
import Person1 from "./01.Fundamentals/08.Props-Destructing/Person1";
import Product1 from "./01.Fundamentals/08.Props-Destructing/Product1";

const App = () => {
	return (
		<div>
			{/* <Greet/> */}
			{/* <WelcomeMessage/> */}
			{/* <Jsxrule/> */}
			{/* <Header />
			<MainContent />
			<Footer /> */}
			{/* <Greeting />
			<ProductInfo /> */}
			{/* <UserList />
			<ProductList /> */}
			{/* <Person name="Rishabh" age={19} />
			<Product name="Laptop" price="$1200" /> */}
			<Person1 name="Rishabh" age={19} />
			<Product1 name="Laptop" price="$1200" />
		</div>
	);
};

export default App;

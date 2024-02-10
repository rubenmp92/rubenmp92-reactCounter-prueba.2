import React from "react";
import Digit from "./Digit";

//include images into your bundle


//create your first component
const Home = (props) => {
//aquí va la lógica en JS
const digitOne = props.seconds % 10;
const digitTwo = Math.floor(props.seconds / 10) % 10;
const digitThree = Math.floor(props.seconds / 100) % 10;
const digitFour = Math.floor(props.seconds / 1000) % 10;
const digitFive = Math.floor(props.seconds / 10000) % 10;
  
console.log(typeof(props.seconds))

	return (
		<div className="big-container">
			<div className="number" id="clock"><i className="fa fa-sharp fa-regular fa-clock fa-spin"></i></div>
			<div className="number" id="four"><Digit positionNumber={digitFive} /></div>
			<div className="number" id="four"><Digit positionNumber={digitFour} /></div>
			<div className="number" id="three"><Digit positionNumber={digitThree} /></div>
			<div className="number" id="two"><Digit positionNumber={digitTwo} /></div>
			<div className="number" id="one"><Digit positionNumber={digitOne} /></div>
		</div>
		

	);
};

export default Home;


import React from 'react';
import Tilt from 'react-tilt';
import happyFace from './facerec.png'; 
import './Logo.css'; 

const Logo = () => {
	return (
		<div className= 'ma4 mt0'>
		<Tilt className="Tilt center br2 shadow-2" options={{ max : 75 }} style={{ height: 110, width: 130 }} >
 		<div className="Tilt-inner"> <img alt='logo' src={happyFace}/> </div>
		</Tilt>
		</div>

	);
}

export default Logo; 

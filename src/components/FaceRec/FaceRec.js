import React from 'react';
import './FaceRec.css';

const FaceRec = ({imageUrl, box}) => {
	return (

		<div className='center'>
			<div className= 'absolute mt2 br3 pa2 shadow-2'>
				<img id="inputImage" alt='' src={imageUrl} width='500px' height='auto'/>
				<div className= 'bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>



	);
	
}

export default FaceRec; 


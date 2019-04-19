import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onBottunSubmit}) => {
	return (
		<div>
			<p className='f3'>
			{'Här sker magin. Ge det ett försök!'}	
			</p>

			<div className='center'>
				<div className= 'form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 ceneter'  type='tex' onChange={onInputChange}/>
					<button 
					className='bottun black w-30 f4 link ph3 pv2 dib black bg-light-yellow' onClick={onBottunSubmit} >
					
					Upptäck</button>
				</div>
			</div>
		</div>



	);
}

export default ImageLinkForm; 

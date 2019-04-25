import React from 'react';
import './uploadImage.css';


const uploadImage = ({onInputChange, onBottunSubmit}) => {
	return (
		<div>

					<label className= 'bottun black w-15 f5 link ph3 pv2 dib black bg-red'for="upload-photo">Bläddra</label>
					<input type="file" name="photo" id="upload-photo" onChange={onInputChange} />

		</div>

	);
}

export default uploadImage; 
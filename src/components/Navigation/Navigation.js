import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

		if (isSignedIn) {

		return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Logga Ut</p>
		</nav>
		);

	} else {
		return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Logga in</p>
					<p onClick={() => onRouteChange('Register')} className='f3 link dim white underline pa3 pointer'>Registrera dig</p>
				</nav>

		);

	}

}

export default Navigation; 
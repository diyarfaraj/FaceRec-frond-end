import React from 'react';


const Rank = ({name, entries}) => {
	return (
		<div>
		{`${name} , total poäng för dig är...`}
      <div className='white f1 '>
        {entries}
      </div>
		</div>



	);
}

export default Rank; 

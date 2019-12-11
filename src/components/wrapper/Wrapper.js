import React from 'react';
import './Wrapper.scss';

import Poster from '../poster/Poster';
import Clock from '../clock/Clock';
import Contacts from '../contacts/Contacts';

const Wrapper = () => {
	return (
		<div className='background'>
			<div className='grid-container'>
				<div className='weather'>
					<Poster />
				</div>
				<div className='clock'>
					<Clock/>
				</div>
				<div className='contacts'>
					<Contacts />
				</div>
			</div>
		</div>
	);
};

export default Wrapper;

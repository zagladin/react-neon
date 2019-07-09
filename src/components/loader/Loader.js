import React, { Component, Fragment } from 'react';

import './Loader.scss';
import Spinner from './spinner.svg';


class Loader extends Component {

		render() {
				return (
					<Fragment>
							<img src={Spinner}
							     alt='loader'
							     style={{'display':this.props.visibility}}/>
					</Fragment>
				);
		}
}

export default Loader;

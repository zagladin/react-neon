import React, { Component, Fragment } from 'react';

import './ColorChanger.scss';

class ColorChanger extends Component {
		constructor(props) {
				super(props);

				this.state = {
						background: '#000000',
						colors: [
								'#000000', '#ff0000', '#001f3f', '#0074D9', '#3D9970', '#2ECC40', '#FF4136', '#85144b', '#F012BE',
								'#E27D60', '#85DCB', '#E8A87C', '#C38D9E', '#41B3A3', '#242582', '#553D67', '#F64C72', '#99738E',
								'#2F2FA2', '#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#379683', '#5CDB95', '#3FEEE6',
								'#97CAEF', '#5CDB95', '5D5C61', '#557A95', '#501B1D', '#64485C', '#ADADAD', '#190061', '#3500D3',
								'#282828', '#950740', '#C3073F', '#AFD275', '7E685A', '#80777d', '#66FCF1', '#1F2833', '#e36a6a',
								'#AC3B61', '#123C69', '#2C3531', '#116466'
						]
				};

				this.changeColor = this.changeColor.bind(this);
		}

		changeColor(colour) {
				this.setState({background: colour});
				this.props.color(colour);
		}

		toggleFullScreen() {
				if (!document.fullscreenElement) {
						document.documentElement.requestFullscreen();
				} else {
						if (document.exitFullscreen) {
								document.exitFullscreen();
						}
				}
		}

		togglePalette() {
				let palette = document.getElementById("palette");
				if (palette.style.display === "" || palette.style.display === "none") {
						palette.style.cssText = "display: block; animation: fadeIn 1s"
				} else if (palette.style.display === "block") {
						palette.style.cssText = "display:none; animation: fadeOut 1s"
				}
		}

		render() {
				return (
					<Fragment>
							<div className="color-changer">
									<span role="img"
									      aria-label="palette"
									      title="Change color"
									      onClick={this.togglePalette}>
											🎨
									</span>
									<span className="fullscreen-button"
										  role="img"
									      aria-label="fullscreen"
									      title="Fullscreen"
									      onClick={this.toggleFullScreen}>
											👁️
									</span>
									<div className="palette" id="palette">
											<div className="wrapper">
													{this.state.colors.map((color, index) =>
														<div key={index}
														     className="color-block"
														     style={{"background": color}}
														     onClick={() => this.changeColor(color)}>
														</div>)}
											</div>
											<div className="pointer"> </div>
									</div>
							</div>
					</Fragment>
				)
		}

}

export default ColorChanger;

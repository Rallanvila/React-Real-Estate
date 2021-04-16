import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<select
						name="neighborhood"
						className="filters neighborhood"
						onChange={this.props.change}
					>
						<option value="Sarasota">Sarasota</option>
						<option value="Miami">Miami</option>
					</select>
					<select
						name="housetype"
						className="filters housetype"
						onChange={this.props.change}
					>
						<option value="Apartment">Apartment</option>
						<option value="Single Family Home<">Single Family Home</option>
						<option value="Studio">Studio</option>
						<option value="Room">Room</option>
					</select>
					<select
						name="bedrooms"
						className="filters bedrooms"
						onChange={this.props.change}
					>
						<option value="1">1 BR</option>
						<option value="2">2 BR</option>
						<option value="3">3 BR</option>
						<option value="4">4 BR</option>
						<option value="5">5 BR</option>
						<option value="6">6 BR</option>
						<option value="7">7 BR</option>
						<option value="8">8 BR</option>
					</select>

					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min-price"
							className="min-price"
							onChange={this.props.change}
							value="0"
						/>
						<input
							type="text"
							name="max-price"
							className="max-price"
							onChange={this.props.change}
							value="1000000"
						/>
					</div>
					<div className="filters floor-space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min-floor-space"
							className="min-floor-space"
							onChange={this.props.change}
							value="0"
						/>
						<input
							type="text"
							name="max-floor-space"
							className="min-floor-space"
							onChange={this.props.change}
							value="10000"
						/>
					</div>
					<div className="filters extras">
						<span className="title">Extras</span>
						<label htmlFor="extras">
							<span>Elevators</span>
							<input
								name="extras"
								value="elevator"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
					<div className="filters extras">
						<label htmlFor="extras">
							<span>Swimming Pool</span>
							<input
								name="extras"
								value="swimming-pool"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
					<div className="filters extras">
						<label htmlFor="extras">
							<span>Finished Basement</span>
							<input
								name="extras"
								value="finished-basement"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
					<div className="filters extras">
						<label htmlFor="extras">
							<span>Gym</span>
							<input
								name="extras"
								value="gym"
								type="checkbox"
								onChange={this.props.change}
							/>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

const app = document.getElementById('app');

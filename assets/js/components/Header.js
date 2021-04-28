import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Allan'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<header>
				<div>Vila Real Estate</div>
				<nav>
					<a href="#">Create Ads</a>
					<a href="#">About Us</a>
					<a href="#">Login</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}

const app = document.getElementById('app');

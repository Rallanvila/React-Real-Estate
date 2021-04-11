import React, { Component } from 'react';

export default class Listings extends Component {
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
			<section className="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>

				<section className="sortby-area">
					<div>390 results found</div>
					<div className="sort-options">
						<select name="sortby" className="sortby" id="">
							<option value="price-asc">Highest Price</option>
							<option value="price-asc">Lowest Price</option>
						</select>
						<div className="view">
							<i className="fas fa-list"></i>
							<i className="fas fa-th"></i>
						</div>
					</div>
				</section>

				<section className="listings-results">
					<div className="listing">
						<div className="listing-img">
							<span className="address">Address</span>
							<div className="details">
								<div className="user-img"></div>
								<div className="user-details">
									<span className="user-name">Kimberly Nguyen</span>
									<span className="post-date">05/24/2021</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<i className="fa fa-square-o" aria-hidden="true"></i>
										<span>1000 ft&sup2;</span>
									</div>
									<div className="bedroom">
										<i class="fas fa-bed" aria-hidden="true"></i>
										<span>3 bedrooms</span>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span>$1,000/mo</span>
							<span>
								<i className="fas fa-map-marker-alt" aria-hidden="true"></i>
								Sarasota, FL
							</span>
						</div>
					</div>
				</section>
				<section className="pagination">
					<ul className="pagination-nums">
						<li>Prev</li>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}

const app = document.getElementById('app');

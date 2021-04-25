import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
		this.loopListings = this.loopListings.bind(this);
	}
	loopListings() {
		var { listingsData } = this.props;
		if (listingsData == undefined || listingsData.length == 0) {
			return "Sorry your filter didn't match any listing 😔";
		}
		return listingsData.map((listing, index) => {
			return (
				<div className="col-md-3" key={index}>
					<div className="listing">
						<div
							className="listing-img"
							style={{
								background: `url("${listing.image}") no-repeat center center`
							}}
						>
							<div className="dark-overlay"></div>
							<span className="address">{listing.address}</span>
							<div className="details">
								<div className="user-img">
									<img
										src="https://randomuser.me/api/portraits/women/46.jpg"
										alt="realtor"
									/>
								</div>
								<div className="user-details">
									<span className="user-name">Kimberly Nguyen</span>
									<br />
									<span className="post-date">05/24/2021</span>
								</div>
								<div className="listing-details">
									<div className="floor-space">
										<i className="fa fa-square-o" aria-hidden="true"></i>
										<span>{listing.floorSpace} ft&sup2;</span>
									</div>
									<div className="bedroom">
										<i className="fas fa-bed" aria-hidden="true"></i>
										<span>{listing.bedrooms} bedrooms</span>
									</div>
									<button className="view-btn">View Listing</button>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="price">${listing.price}</span>
							<span className="location">
								<i className="fas fa-map-marker-alt" aria-hidden="true"></i>
								{listing.city}, {listing.state}
							</span>
						</div>
					</div>
				</div>
			);
		});
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" />
				</section>

				<section className="sortby-area">
					<div className="results">390 results found</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.change}
						>
							<option value="price-dsc">Lowest Price</option>
							<option value="price-asc">Highest Price</option>
						</select>
						<div className="view">
							<i className="fas fa-list"></i>
							<i className="fas fa-th"></i>
						</div>
					</div>
				</section>

				<section className="listings-results">{this.loopListings()}</section>

				<section id="pagination">
					<ul className="pages">
						<li>Prev</li>
						<li className="active">1</li>
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

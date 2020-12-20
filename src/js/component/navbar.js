import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import app from "../base";
import { AuthContext } from "../store/AuthContext";

export const Navbar = () => {
	const { currentUser } = useContext(AuthContext);
	let action = "";
	if (currentUser === null) {
		action = (
			<Link className="nav-link" to="/Login/">
				<i className="fas fa-sign-in-alt fa-2x" />
			</Link>
		);
	} else {
		action = (
			<i className="nav-link" style={{ marginLeft: "30px" }} onClick={() => app.auth().signOut()}>
				<i className="far fa-times-circle fa-2x" />
			</i>
		);
	}
	return (
		<div className="container-fluid">
			<nav
				className="navbar navbar-expand-lg "
				style={{ backgroundColor: "#EDB704", textShadow: "2px 2px 5px black" }}>
				<Link className="navbar-brand" style={{ width: "30%" }} to="/">
					<div className="row">
						<h2>YOUR </h2>
						<h2>GAME </h2>
						<h2>GUIDE</h2>
					</div>
				</Link>
				{/* <button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button> */}
				<div className="column ml-auto" style={{ marginRight: "20px" }} id="navbarNav">
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item ">
							<Link className="nav-link" to="/">
								<i className="fas fa-home fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Gallery/">
								<i className="fas fa-gamepad fa-2x" />
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/Signup">
								<i className="fas fa-user-plus fa-2x" />
							</Link>
						</li>
						{action}
					</ul>
				</div>
			</nav>
		</div>
	);
};

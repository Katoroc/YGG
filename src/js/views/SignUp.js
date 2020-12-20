import React, { useState, useContext, useCallback } from "react";

import app from "../base";
import { WithRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				// history.push("/");
				// // let renderRedirect = () => {
				// location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io");
				location.replace("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	return (
		<div className="container2">
			<form onSubmit={handleSignUp}>
				<div className="form-group">
					<h1>Sign Up</h1>
					<input
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail"
						area-describedby="emailhelp"
						placeholder="Add Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{" Add Your Info"}
					</small>
				</div>
				<div className="form-group">
					<input
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword"
						placeholder="Add Password"
					/>
					<button className="btn-1">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

SignUp.propTypes = {
	history: PropTypes.object
};

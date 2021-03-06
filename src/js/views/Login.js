import React, { useState, useContext, useCallback } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import app from "../base";
// import { Context } from "../store/appContext";

export const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				// history.push("/");
				// location.replace("https://3000-d8974454-0d60-4f1d-888b-0628666ba0f0.ws-us02.gitpod.io/Gallery");
				location.replace("/Gallery");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);
	return (
		<div className="container3">
			<form className="form" onSubmit={handleLogin}>
				<div className="form-group">
					<h1>Login</h1>
					<input
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail"
						area-describedby="emailhelp"
						placeholder="Email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						{" Info Secure"}
					</small>
				</div>
				<div className="form-group">
					<input
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword"
						placeholder="Password"
					/>
					<button className="btn-1">Login</button>
				</div>
			</form>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.object
};

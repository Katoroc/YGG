import React from "react";
// import { Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar, DropdownButton, Dropdown } from "react-bootstrap";
export const Footer = () => (
	<div className="container-fluid">
		{/* <footer className="footer mt-auto text-center"> */}
		<Navbar variant="danger" bg="light" expand="lg" style={{ textShadow: "4px 4px 08px black" }}>
			<Navbar.Brand href="/">
				<i className="fas fa-gamepad fa-2x" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "2px solid" }} />
			{/* <button
				aria-controls="basic-navbar-nav"
				type="button"
				aria-label="Toggle navigation"
				className="navbar-toggler">
				<span className="navbar-toggler-icon" />
				<i className="fas fa-caret-square-down fa-2x" />
			</button> */}

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className=" mr-auto">
					<Nav.Link href="https://www.facebook.com/" target="blank">
						<i className="fab fa-facebook fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.instagram.com/" target="blank">
						<i className="fab fa-instagram fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://twitter.com/?lang=en" target="blank">
						<i className="fab fa-twitter-square fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.youtube.com/" target="blank">
						<i className="fab fa-youtube fa-1x" />
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/" target="blank">
						<i className="fab fa-linkedin fa-1x" />
					</Nav.Link>
				</Nav>
				<Nav className="navb-color ml-auto">
					<Nav.Link href="/Action">
						<h5>Action</h5>
					</Nav.Link>
					<Nav.Link href="/Sport">
						<h5>Sport</h5>
					</Nav.Link>
					<Nav.Link href="/Racing">
						<h5>Racing</h5>
					</Nav.Link>
					<Nav.Link href="/Shooter">
						<h5>Shooter</h5>
					</Nav.Link>
					<Nav.Link href="/Gallery">
						<h5>All Games</h5>
					</Nav.Link>
					{/* <div className="mb-2">
                            {["up"].map(direction => (
                                <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Menu ${direction} `}>
                                    <Dropdown.Item eventKey="1">Gallery</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Sign Up</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Login</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div> */}
					{/* <NavDropdown title="Menu" id="basic-nav-dropup">
                            <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item> */}
					{/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
					{/* </NavDropdown> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		{/* <div className="container">
                <Link to="/">
                    <i className="fas fa-gamepad fa-4x" />
                </Link>
            </div> */}
		{/* </footer> */}
	</div>
);

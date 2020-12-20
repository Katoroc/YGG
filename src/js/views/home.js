import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Tabs, Tab, Card, Carousel } from "react-bootstrap";

export const Home = () => (
	<div className="container-fluid">
		<div className="wrapper">
			<br />
			<br />
			<ul className="nav justify-content-center" style={{ paddingBottom: "100px" }}>
				<Link
					className=" pulse"
					to="/Action/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#A972CB",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					<h4>Action</h4>
				</Link>

				<Link
					className="pulse"
					to="/Sport/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#EF6EAE",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					<h4>Sports</h4>
				</Link>

				<Link
					className="pulse"
					to="/Racing/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#FFA260",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					<h4>Racing</h4>
				</Link>

				<Link
					className="pulse"
					to="/Shooter/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#E4CB58",
						font: "inherit",
						lineheight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					<h4>Shooter</h4>
				</Link>
				<Link
					className="pulse"
					to="/Gallery/"
					style={{
						background: "none",
						border: "2px solid",
						borderColor: "#19BC8B",
						font: "inherit",
						lineHeight: 1,
						margin: "0.5em",
						padding: "1em 2em"
					}}>
					<h4>All Games</h4>
				</Link>
			</ul>
		</div>

		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid" />
		</div>
		<p>
			<h2>
				In the video game industry, 2020 saw the launch of the next generation of video game consoles, with both
				Microsoft and Sony Interactive Entertainment having released the Xbox Series X/S and PlayStation 5
				consoles, respectively, in November 2020. The COVID-19 pandemics impact on the video game industry in
				2020 included difficulties in manufacturing and international travel.
			</h2>
		</p>

		<div className="container mt-3">
			<Tabs defaultActiveKey="Games" id="uncontrolled-tab-example">
				<br />

				<Tab eventKey="Games" title="Games">
					<div
						className="wrapper"
						style={{ paddingBottom: "100px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Star Wars Battlefront II</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://i.pcmag.com/imagery/reviews/02nibFsEoamcWSFCK0IEI9r-1..1569469944.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://venturebeat.com/wp-content/uploads/2017/06/star-wars-battlefront-2-theed-tank-e3-2017.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://g.foolcdn.com/editorial/images/558545/screenshot-star-wars-battlefront.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>
						<br />
						<a href="https://www.starwars.com/games-apps/star-wars-battlefront">Official Site Click Here</a>
					</div>
					<div
						className="wrapper"
						style={{ paddingBottom: "100px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Mortal Kombat 11</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://www.gamingilluminaughty.com/wp-content/uploads/2020/05/youtu.be-RpEEFUED12Q.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://cdn.mos.cms.futurecdn.net/o6smpPSAsEnhLbF5Ab6Ekn.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/06/MK-11-Aftermath.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>
						<br />
						<a href="https://www.mortalkombat.com/">Official Site Click Here</a>
					</div>
					<div
						className="wrapper"
						style={{ paddingBottom: "100px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Dragon Ball Z Kakarot</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://en.bandainamcoent.eu/dragon-ball/dragon-ball-z-kakarot"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://i.ytimg.com/vi/Ua-riwi5K60/maxresdefault.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://images.pushsquare.com/screenshots/102263/large.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>
						<br />
						<a href="https://en.bandainamcoent.eu/dragon-ball/dragon-ball-z-kakarot">
							Official Site Click Here
						</a>
					</div>

					<div className="wrapper" style={{ paddingBottom: "50px" }}>
						<div className="text-center mt-5" style={{ color: "white" }}>
							<h1>Top 20 Upcoming Games of 2020 </h1>
							<br />
							<div className="auto-resizable-iframe">
								<div>
									<iframe
										frameBorder="0"
										allowFullScreen=""
										src="https://www.youtube.com/embed/CQKvhoe15M4"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="wrapper" style={{ paddingBottom: "50px" }}>
						<div className="text-center mt-5" style={{ color: "white" }}>
							<h1>Top 10 MOST REALISTIC GRAPHICS Upcoming Games 2020-2021</h1>
							<br />
							<div className="auto-resizable-iframe">
								<div>
									<iframe
										frameBorder="0"
										allowFullScreen=""
										src="https://www.youtube.com/embed/XiJGsTnJfhs"
									/>
								</div>
							</div>
						</div>
					</div>
				</Tab>
				<br />
				<Tab eventKey="Consoles" title="Consoles">
					<div
						className="wrapper"
						style={{ paddingBottom: "50px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Play Station 5</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://blog.playstation.com/tachyon/2020/06/PS5-tunein-nodate.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption>
									{/* <h3>Play Station 5</h3> */}
									{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://i.wfcdn.de/teaser/660/36658.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption>
									{/* <h3>Xbox SeriesX</h3> */}
									{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://i.ytimg.com/vi/PAUrQD6PDSo/maxresdefault.jpg"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption>
									{/* <h3>Nintendo Switch</h3> */}
									{/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
						<br />
						<a href="https://www.playstation.com/en-us/ps5/">Official Site Click Here</a>
					</div>
					{/* <div className="text-center mt-5" style={{ color: "white" }}>
						<br />
						<div className="auto-resizable-iframe">
							<div>
								<iframe
									frameBorder="0"
									allowFullScreen=""
									src="https://www.youtube.com/embed/FVEj8K3BbVA"
								/>
							</div>
						</div>
					</div> */}

					<div
						className="wrapper"
						style={{ paddingBottom: "50px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Xbox Series X</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://compass-ssl.xbox.com/assets/f7/9c/f79cf7d6-8fe6-407d-817e-441767306365.png?n=XBX_A-BuyBoxBGImage02-D.png"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>

						<br />
						<a href="https://www.xbox.com/en-US/consoles/xbox-series-x?OCID=AID2100854_SEM_383f7927672d10de8a8926f2ec58cbce:G:s&ef_id=383f7927672d10de8a8926f2ec58cbce:G:s&msclkid=383f7927672d10de8a8926f2ec58cbce">
							Official Site Click Here
						</a>
					</div>

					<div
						className="wrapper"
						style={{ paddingBottom: "200px", textAlign: "center", paddingTop: "100px" }}>
						<h1>Nintendo Switch</h1>
						<br />
						<Carousel>
							<Carousel.Item interval={1000}>
								<img
									className="card-img-top"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nintendo_Switch_Portable.png/800px-Nintendo_Switch_Portable.png"
									style={{ width: "80%", height: "100%" }}
									alt="First slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item interval={500}>
								<img
									className="card-img-top"
									src="https://vignette4.wikia.nocookie.net/fireemblem/images/4/42/Nintendo_Switch.png/revision/latest?cb=20170115150103"
									style={{ width: "80%", height: "100%" }}
									alt="Second slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="card-img-top"
									src="https://cdn3.dualshockers.com/wp-content/uploads/2019/02/CityOfBrassOnSwitch-1024x576.png"
									style={{ width: "80%", height: "100%" }}
									alt="Third slide"
								/>
								<Carousel.Caption />
							</Carousel.Item>
						</Carousel>
						<br />
						<a href="https://www.nintendo.com/switch/">Official Site Click Here</a>
					</div>
				</Tab>
			</Tabs>
		</div>
	</div>
);

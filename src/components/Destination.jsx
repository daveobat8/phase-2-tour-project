import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardText, Container, Row, Col } from 'react-bootstrap';

const Destination = ({ BASE_URL }) => {
	console.log(BASE_URL);

	const [travels, setTravels] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}/travels`)
			.then((response) => response.json())
			.then((travels) => {
				setTravels(travels);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);
	return (
		<Container
			style={{
				marginLeft: '0',
				marginRight: '0',
				padding: '0',
			}}
		>
			<Row>
				{travels.map((travel) => (
					<Col sm key={travel.id}>
						<Card
							style={{
								width: '30rem',
								margin: '10px',
								height: '650px',
							}}
						>
							<Card.Img
								variant="top"
								src={travel.image}
								style={{ height: '300px' }}
							/>
							<Card.Body>
								<Card.Title>{travel.destination}</Card.Title>
								<Card.Text>{travel.description}</Card.Text>
								<CardText>{travel.prices}</CardText>
								<NavLink
									className="nav-link active text-white "
									aria-current="page"
									to="/availablepackages"
								>
									<Button
										variant="dark"
										className="nav-item "
										style={{ marginTop: '0px' }}
									>
										{' '}
										View Package
									</Button>
								</NavLink>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Destination;

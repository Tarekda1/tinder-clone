import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';
import './TinderCards.css';

const TinderCards = () => {
	const [ people, setPeople ] = useState([
		{
			name: 'steve jobs',
			url:
				'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
		},
		{
			name: 'mark zuckeburg',
			url:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/646px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
		}
	]);

	const onSwipe = (direction) => {
		console.log('You swiped: ' + direction);
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + ' left the screen');
	};

	useEffect(() => {
		//this code runs once (onComponetDidMount) and never again
		let peopleFromFirebase;
		const unsubscribe = database.collection('people').onSnapshot((snapshot) => {
			setPeople(snapshot.docs.map((doc) => doc.data()));
		});

		return () => {
			//clean up
			unsubscribe();
		};
	}, []);

	return (
		<div>
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						onSwipe={onSwipe}
						onCardLeftScreen={() => onCardLeftScreen('fooBar')}
						preventSwipe={[ 'up', 'down' ]}
					>
						<div style={{ backgroundImage: `url(${person.url})` }} className="card">
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;

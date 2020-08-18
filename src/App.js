import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipButtons/SwipeButtons';
import Chats from './pages/Chats/Chats';
import ChatDetails from './pages/ChatDetail/ChatDetails';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatDetails />
					</Route>
					<Route path="/chats">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<TinderCards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

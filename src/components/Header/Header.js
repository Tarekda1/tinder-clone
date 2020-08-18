import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
	const history = useHistory();
	return (
		<div className="header">
			<IconButton>
				{backButton ? (
					<IconButton onClick={() => history.replace(backButton)}>
						<ArrowBackIosIcon className="header__icon" fontSize="large" />
					</IconButton>
				) : (
					<IconButton>
						<PersonIcon className="header__icon" fontSize="large" />
					</IconButton>
				)}
			</IconButton>
			<Link to="/">
				<img className="header__img" alt="tinder logo" src="https://logodix.com/logo/15262.png" />
			</Link>
			<IconButton>
				<Link to="/chats">
					<ForumIcon className="header__icon" fontSize="large" />
				</Link>
			</IconButton>
		</div>
	);
};

export default Header;

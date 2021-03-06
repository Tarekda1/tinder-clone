import React, { useState } from 'react';
import './ChatDetails.css';
import { Avatar, Button } from '@material-ui/core';

const ChatDetails = () => {
	const [ input, setInput ] = useState('');
	const [ messages, setMessages ] = useState([
		{
			name: 'Tarek',
			image: '...',
			message: 'hey whatsapp !!',
			sender: true
		},
		{
			name: 'Tarek',
			image:
				'data:image/jpeg;base64,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',
			message: 'how is it going ?',
			sender: true
		},
		{
			message: 'Iam fine',
			sender: false
		}
	]);

	const submitMessage = (e) => {
		e.preventDefault();
		setMessages([ ...messages, { message: input, sender: false } ]);
		setInput('');
	};

	return (
		<div className="chatScreen">
			<p className="chatScreen__header">you matched with ELLEN on 18/08/2020</p>
			<div className="chatScreen__messages">
				{messages.map((message, index) => (
					<div className={`chatScreen__message ${!message.sender ? 'chatScreen__message_alignEnd' : ''}`}>
						{message.sender && (
							<Avatar className="chatScreen__image" alt={message.name} src={message.image} />
						)}
						<p className={message.sender ? 'chatScreen__text' : 'chatScreen__text_receiver'}>
							{message.message}
						</p>
					</div>
				))}
			</div>
			<form className="chatScreen__input">
				<input
					className="chatScreen__inputField"
					type="text"
					name="input_message"
					placeholder="Type a message..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="chatScreen__inputButton" color="red" onClick={submitMessage}>
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatDetails;

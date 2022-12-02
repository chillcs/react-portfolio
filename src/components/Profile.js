import React from 'react';
import { useState } from 'react';

const Profile = () => {
	const [openEditProfile, setOpenEditProfile] = useState(false);
	const [firstName, setFirstName] = useState(0);
	const [lastName, setLastName] = useState(0);
	const [emailAddress, setEmailAddress] = useState(0);
	const [username, setUsername] = useState(0);
	const [password, setPassword] = useState(0);
	const submitData = (event) => {
		event.preventDefault();
		localStorage.setItem('firstName', JSON.stringify(firstName));
		localStorage.setItem('lastName', JSON.stringify(lastName));
		localStorage.setItem('emailAddress', JSON.stringify(emailAddress));
		localStorage.setItem('username', JSON.stringify(username));
		localStorage.setItem('password', JSON.stringify(password));
		setOpenEditProfile(!openEditProfile);
	};
	return (
		<>
			<div className="page-title">
				<h1>Profile</h1>
			</div>
			{!openEditProfile ? (
				<div className="profile-container">
					<p>
						Name: {localStorage.firstName} {localStorage.lastName}
					</p>
					<p>Email: {localStorage.emailAddress}</p>
					<p>Username: {localStorage.username}</p>
					<p>Password: ******** </p>
					<button
						className="edit-profile-btn btn"
						onClick={() => {
							setOpenEditProfile(!openEditProfile);
						}}
					>
						Edit Profile?
					</button>
				</div>
			) : (
				<div className="edit-profile-container">
					<form className="edit-profile-form">
						<input
							type="text"
							placeholder="First Name"
							onChange={(event) => {
								setFirstName(event.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="Last Name"
							onChange={(event) => {
								setLastName(event.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="Email Address"
							onChange={(event) => {
								setEmailAddress(event.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="Username"
							onChange={(event) => {
								setUsername(event.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="Password"
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
						<input
							className="edit-profile-form-submit btn"
							type="submit"
							value="Submit"
							onClick={submitData}
						/>
					</form>
					<button
						className="back-to-profile-btn btn"
						onClick={() => {
							setOpenEditProfile(!openEditProfile);
						}}
					>
						Back
					</button>
				</div>
			)}
		</>
	);
};

export default Profile;

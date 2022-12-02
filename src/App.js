import React from 'react';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

const App = () => {
	// Set heights ---
	const [height, setHeight] = useState(window.innerHeight);
	const updateHeight = () => {
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	}, []);
	const maxHeight = {
		height: height,
	};
	const headerHeight = {
		height: 80,
	};
	const footerHeight = {
		height: 50,
	};
	const mainHeight = {
		height: maxHeight.height - headerHeight.height - footerHeight.height,
	};

	// Toggle tabs ---
	const [active, setActive] = useState(0);
	function openTab(event) {
		const target = event.currentTarget.id;
		setActive((active) => (active === target ? active : target));
	}

	return (
		<>
			<div className="app" style={maxHeight}>
				<div className="header" style={headerHeight}>
					<div className="logo-text">
						<h3>Curtis Hill</h3>
					</div>
					<ul className="nav">
						<li>About</li>
						<li>Education</li>
						<li>Contact</li>
					</ul>
					<button className="download-cv-btn">
						<h3>Download CV</h3>
					</button>
				</div>
				<div className="main" style={mainHeight}>
					{parseInt(active) === 0 && <Profile />}
					{parseInt(active) === 1 && <Dashboard />}
					{parseInt(active) === 2 && <Settings />}
				</div>
				<div className="footer" style={footerHeight}>
					<button className="tab-btn" id={1} onClick={openTab}>
						<h3>Dashboard</h3>
					</button>
					<button className="tab-btn" id={2} onClick={openTab}>
						<h3>Settings</h3>
					</button>
				</div>
			</div>
		</>
	);
};

export default App;

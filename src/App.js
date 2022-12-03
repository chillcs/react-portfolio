import React from 'react';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Education from './components/Education';
import Contact from './components/Contact';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

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
		height: 50,
	};
	const footerHeight = {
		height: 300,
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
			<div className="app--wrapper">
				<div className="app" style={maxHeight}>
					<div className="header" style={headerHeight}>
						<div className="logo-text" id={0} onClick={openTab}>
							<h3>Curtis Hill</h3>
						</div>
						<ul className="nav">
							<li id={0} onClick={openTab}>
								About
							</li>
							<li id={1} onClick={openTab}>
								Education
							</li>
							<li id={2} onClick={openTab}>
								Contact
							</li>
						</ul>
						<button className="download-cv-btn">
							<h3>Download CV</h3>
						</button>
					</div>
					<div className="main" style={mainHeight}>
						{parseInt(active) === 0 && <Main />}
						{parseInt(active) === 1 && <Education />}
						{parseInt(active) === 2 && <Contact />}
						{parseInt(active) === 3 && <Project1 />}
						{parseInt(active) === 4 && <Project2 />}
						{parseInt(active) === 5 && <Project3 />}
					</div>
					<div className="footer" style={footerHeight}>
						<button className="tab-btn" id={3} onClick={openTab}>
							<h3>Project 1</h3>
						</button>
						<button className="tab-btn" id={4} onClick={openTab}>
							<h3>Project 2</h3>
						</button>
						<button className="tab-btn" id={5} onClick={openTab}>
							<h3>Project 3</h3>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;

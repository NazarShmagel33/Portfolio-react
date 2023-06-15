import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Nazar</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/file/d/175IOu9NP82nDEOA5aGN-O3K-UCdzeAnP/view?usp=drive_linkc" target="_blank" rel="noreferrer" className="btn">
					Check CV
				</a>
			</div>
		</header>
	);
}

export default Header;
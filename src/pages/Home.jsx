import Header from '../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
					<li className="content-list__item">
							<h2 className="title-2">Nazar Shmahel</h2>
							<p>
							Active, communicative, cheerful, hardworking, has experience working in a team, always ready to learn and self-improve
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Angular, Vue, ReduxToolkit, 	
								HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
								TailwindCSS, StyledComponents
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>NodeJS, MySQL, PHP, Laravel</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;
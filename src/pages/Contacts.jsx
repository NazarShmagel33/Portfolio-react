import Gallery from "../components/gallery/gallery";





const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
			<h1 className="title-1">Gallery</h1>
			
				<Gallery/>

				<h1 className="title-1">Contacts</h1>
				
				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Kyiv, Ukraine</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+380990345744">+38 (099) 034 57 44</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Instagram</h2>
						<p>
							<a href="https://www.instagram.com/shmahel_33/">
								Shmahel_33
							</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:nazarshmagel03@gmail.com">
								nazarshmagel03@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;
import "./style.css";


import instagram from './../../img/icons/instagram.svg';
import facebook from './../../img/icons/facebook.svg';
import telegram from './../../img/icons/telegram.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						
						<li className="social__item">
							<a href="https://www.instagram.com/shmahel_33/">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.facebook.com/profile.php?id=100009357639608">
								<img src={facebook} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/NazarShmagel33?tab=repositories">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://t.me/Brodila33">
								<img src={telegram} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 Nazar Shmahel</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
const RenderJSX = () => (
    <div>
        <Header/>
        <Main/>
        <Features/>
        <Contact/>
        <Footer/>
    </div>
);

const PhoneLink = () => (
	<a href="tel:7(962)556-1234">+7(962)556-1234</a>
);

const Logo = () => (
	<div className="header-logo"></div>
);

const Button = (props) => (
	<button className={props.className}>
		<span>{props.value}</span>
	</button>
);

const Header = () => (
    <header>
        <div className="wrapper">
            <div className="header">
                <a href="#">
					<Logo/>
				</a>
                <a href="tel:888" className="header-phone"></a>
                <div className="header-phonelink">
					<PhoneLink/>
				</div>
            </div>
        </div>
    </header>
);

const Main = () => (
    <main>
        <div className="wrapper">
            <div className="main">
                <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
                                        вебмастеру сгенерировать несколько абзацев более.
                </div>
				<Button value="Подробнее" className="btn main-btn"/>
            </div>
        </div>
    </main>
);


const Features = () => (
	<section className="features">
		<div className="wrapper">
			<div className="features-wrapper">
				<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
				<div className="features-subhead">О нас</div>
				<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
				                                  сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
				                                  оратору отточить.
				</div>
				<div className="features-slider">
					<div className="features-slider_items">
						<div className="features-slider_item">
							<div className="features-img" style={{backgroundImage: 'url(./images/1.svg)'}}></div>
							<div className="features-feature">Первое целевое преимущество</div>
						</div>
						<div className="features-slider_item">
							<div className="features-img" style={{backgroundImage: 'url(./images/2.svg)'}}></div>
							<div className="features-feature">Второе целевое преимущество</div>
						</div>
						<div className="features-slider_item">
							<div className="features-img" style={{backgroundImage: 'url(./images/3.svg)'}}></div>
							<div className="features-feature">Третье целевое преимущество</div>
						</div>
						<div className="features-slider_item">
							<div className="features-img" style={{backgroundImage: 'url(./images/4.svg)'}}></div>
							<div className="features-feature">Четвертое целевое преимущество</div>
						</div>
					</div>
					<button className="features-slider-arrow features-slider-prev">
						<svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
						</svg>
					</button>
					<button className="features-slider-arrow features-slider-next">
						<svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</section>
);

const Contact = () => (
    <section className="contact">
        <div className="wrapper">
            <div className="contact-wrapper">
                <h2 className="contact-title">Остались вопросы?</h2>
                <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                <form action="../mailer.smart.php" className="contact-form">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="tel" placeholder="Телефон"/> 
                    <input type="email" placeholder="E-mail"/>
					<Button value="Позвоните мне" className="btn contact-btn"/>
                </form>
                <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                </div>
            </div>
        </div>
    </section>
)

const Footer = () => (
	<footer>
		<div className="footer">
			<Logo className="footer-logo"/>
			<div className="footer-company">
                <span>© 2020 XXXcompany. Все права защищены.</span>
            </div>
			    <a href="tel:888" className="footer-phone"></a>
			<div className="footer-websurfer">
                <span className="footer-websurfer_build">Сделано</span> 
                <a href="#">Ваше имя</a>
            </div>
			<div className="footer-phonelink">
				<PhoneLink/>
            </div>
		</div>
	</footer>
);

ReactDOM.render(<RenderJSX/>, document.getElementById('root'));
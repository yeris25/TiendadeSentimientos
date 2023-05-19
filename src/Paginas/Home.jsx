import Menu from "../Componentes/Menu.jsx"
import banner from "../assets/banner.jpg"

const Home = () => {
	return (

		<section>
			<Menu />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>

			<section >
				<h1>TIENDA DE SENTIMIENTOS</h1>
				<section className="texto">





					<p>   La tienda de sentimientos LOS SENTIMIENTOS es una empresa dedicada a la venta de regalos y detalles para fortalecer los lazos afectivos de toda clase de personas, con mucha creatividad y poco presupuesto, impulsando la economía y el bienestar social.            ​</p>

				</section>
			</section>

			<footer>
				<section className="footer-content">
					<p>Tiendas Los Sentimientos</p>

				</section>
				<div className="footer-bottom">
					<p>@2023 Copyright</p>
				</div>
			</footer>
		</section>






	)
}

export default Home
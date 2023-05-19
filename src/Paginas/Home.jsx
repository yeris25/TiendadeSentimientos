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

				<section className="texto">


					<h1>TIENDA DE SENTIMIENTOS</h1>


					<p>   La Tienda de Sentimientos es un lugar maravilloso donde encontrarás una amplia variedad de productos diseñados para nutrir y elevar tus emociones. Su cuidadosa selección de artículos inspiradores y reconfortantes te brinda la oportunidad de cuidar tu bienestar emocional y promover un sentido de positividad y conexión con uno mismo.

						Desde kits de meditación y mindfulness hasta libros de reflexiones inspiradoras, la Tienda de Sentimientos tiene todo lo que necesitas para cultivar la calma, la serenidad y la alegría en tu vida diaria. Sus productos están cuidadosamente diseñados para fomentar la autoestima, la motivación y el autocuidado, creando un ambiente propicio para el crecimiento personal y el equilibrio emocional.

						Además, la tienda ofrece una amplia gama de productos aromáticos, como velas y aceites esenciales, que te transportarán a un estado de relajación y bienestar. Estos artículos no solo son hermosos, sino que también te ayudan a crear un ambiente acogedor y tranquilo en tu hogar. ​</p>

					<p>	La disponibilidad de productos de calidad y la atención al detalle son características distintivas de la Tienda de Sentimientos. Cada artículo está cuidadosamente seleccionado para garantizar que cumpla con los estándares más altos de calidad y que brinde beneficios genuinos para tu bienestar emocional.

						Si buscas un lugar donde encontrar productos que alimenten tus sentimientos y te inspiren a vivir una vida plena y satisfactoria, la Tienda de Sentimientos es el destino ideal. Explora su variedad de productos y sumérgete en una experiencia de compra única que te ayudará a conectarte contigo mismo y a encontrar la armonía emocional que mereces.            ​</p>

				</section>
			</section>

			<footer>
				<section className="footer-content">
					<h3>Los Sentimientos</h3>

				</section>
				<div className="footer-bottom">
					<p>@2023 Copyright</p>
				</div>
			</footer>
		</section >






	)
}

export default Home
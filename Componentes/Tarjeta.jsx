import Datos from "../assets/Productos.json"
import imagen from "../assets/curso.jpg"

const datos = Datos.productos

console.log(datos)
const Tarjeta = () => {
	return (
		<div className="contenido">


			{
				datos.map((dato) => (
					<section className="tarjeta">
						<img className="imagen" src={imagen}></img>

						<section className="titulos">
							<p><b>Nombre</b></p>
							<p><b>Descripcion</b></p>
							<p><b>Precio</b></p>
							<p><b>Categoria</b></p>
							<p><b>Tienda</b></p>
							<p><b>Disponibilidad</b></p>

						</section >
						<section className="datos">
							<p><b>{dato.nombre}</b></p>
							<p>{dato.descripcion}</p>
							<p>{dato.precio}</p>
							<p>{dato.categoria}</p>
							<p>{dato.tienda}</p>
							<p>{dato.disponibilidad}</p>






						</section >
					</section >




				))

			}




		</div >

	);
};




export default Tarjeta
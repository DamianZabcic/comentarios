import './App.css';
import Opiniones from './componentes/Opiniones';

function App() {
  return (
    <div className="App">
    <h2>Nuestros clientes dicen de nosotros:</h2>
      <div className='contenedor-principal'>
        <Opiniones 
          nombre='Matías'
          pais='Argentina'
          imagen='matias'
          comentario='Gracias a su empresa pude cumplir mi sueño de viajar por el mundo'
        />
        <Opiniones 
          nombre='Laura'
          pais='Uruguay'
          imagen='laura'
          comentario='Me gusta la manera de atender que tienen los empleados de la empresa'
        />
        <Opiniones 
          nombre='Luis'
          pais='España'
          imagen='luis'
          comentario='La calidad de sus productos y servicios no los vi en ninguna otra empresa'
        />
        <Opiniones 
          nombre='Monica'
          pais='Colombia'
          imagen='monica'
          comentario='Excelente servicio, se ganaron una clienta para toda la vida. Muchas Gracias'
        />
      </div>
      <footer>Damián Zabcic</footer>
    </div>
  );
}

export default App;

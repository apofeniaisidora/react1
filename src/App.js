import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carta from './Carta';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header titulo="Galería de imagenes con React"></Header>
      <Carta titulo="Clases de Danza" descripcion="Encuentros para soltar tensiones a través de la danza pasando por diversos ritmos del mundo. Miércoles y Viernes de 14hrs a 16hrs" src="https://images.pexels.com/photos/8957645/pexels-photo-8957645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Carta>
      <Carta titulo="Clases de elongación" descripcion="Ejercicios personalizados para alcanzar tu objetivo personal en relación al cuerpo. Martes 10hrs y 20hrs" src="https://images.pexels.com/photos/8957636/pexels-photo-8957636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Carta>
      <Carta titulo="Clases de Yoga" descripcion="Práctica grupal de Asanas y Vinyasa en la cual trabajaremos sobre los tópicos clásicos del Yoga. Lunes, Martes y Jueves 8hrs, 12hrs y 17hrs" src="https://images.pexels.com/photos/8957626/pexels-photo-8957626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Carta>
      <Footer></Footer>
    </div>
  );
}

export default App;

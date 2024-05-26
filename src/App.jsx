import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener tus estilos en este archivo o ajusta la ruta según sea necesario

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightEvenRows, setHighlightEvenRows] = useState(false);
  const [highlightOddRows, setHighlightOddRows] = useState(false);
  const [range, setRange] = useState([0, 20]); // Estado para controlar el rango de jugadores a mostrar

  const players = [
    { id: 1, name: 'Michel Meier', position: 'Goalkeeper', goals: 0, age: 31 },
    { id: 2, name: 'Michel rows', position: 'Goalkeeper', goals: 0, age: 32 },
    { id: 3, name: 'Roberto Alexis', position: 'Defender', goals: 24, age: 32 },
    { id: 4, name: 'Michel Meier', position: 'Goalkeeper', goals: 0, age: 31 },
    { id: 5, name: 'John Winfield', position: 'Defender', goals: 21, age: 27 },
    { id: 6, name: 'John', position: 'Defender', goals: 21, age: 27 },
    { id: 7, name: 'John White', position: 'Forward', goals: 7, age: 28 },
    { id: 8, name: 'Michael Davis', position: 'Midfielder', goals: 9, age: 28 },
    { id: 9, name: 'Michael durfis', position: 'Midfielder', goals: 9, age: 28 },
    { id: 10, name: 'David Norman', position: 'Midfielder', goals: 12, age: 31 },
    { id: 11, name: 'Burton Robertson', position: 'Forward', goals: 21, age: 31 },
    { id: 12, name: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id: 13, name: 'Rudolf', position: 'Forward', goals: 12, age: 20 },
    { id: 14, name: 'Carly jack', position: 'Midfielder', goals: 12, age: 25 },
    { id: 15, name: 'Farry', position: 'Forward', goals: 15, age: 24 },
    { id: 16, name: 'Voldemort', position: 'Midfielder', goals: 19, age: 25 },
    { id: 17, name: 'Dumboldor', position: 'Midfielder', goals: 12, age: 29 },
    { id: 18, name: 'Severus Sneider', position: 'Goalkeeper', goals: 12, age: 27 },
    { id: 19, name: 'James Carry', position: 'Goalkeeper', goals: 16, age: 21},
    { id: 20, name: 'Peter Petegro', position: 'Forward', goals: 13, age: 22 }
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    player.id >= range[0] && player.id <= range[1]
  );

  const handleHighlightEvenRows = () => {
    setHighlightEvenRows(!highlightEvenRows);
    if (highlightOddRows) {
      setHighlightOddRows(false); // Desactiva el resaltado de filas impares si está activo
    }
  };

  const handleHighlightOddRows = () => {
    setHighlightOddRows(!highlightOddRows);
    if (highlightEvenRows) {
      setHighlightEvenRows(false); // Desactiva el resaltado de filas pares si está activo
    }
  };

  const handleShowPlayers1To10 = () => {
    setRange([1, 10]);
  };

  const handleShowPlayers11To20 = () => {
    setRange([11, 20]);
  };

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo">
          <img src="src\assets\logo.jpeg" alt="Logo de Liga de Futbol" />
        </div>

        <div className="app__contact">
          <div className="app__contact-item">
            <span className="material-symbols-outlined">alternate_email</span>
            <h3>contacto@fpc.com</h3>
          </div>
          <div className="app__contact-item">
            <span className="material-symbols-outlined">call</span>
            <h3>+1 325 53 2585</h3>
          </div>
          <div className="app__contact-item">
            <span className="material-symbols-outlined">pin_drop</span>
            <h3>27 Bogotá Colombia</h3>
          </div>
        </div>

        <div className="app__register">
          <h3><a href="#">Comprar boletas</a></h3>
          <h3><a href="#">Iniciar sesión</a></h3>
          <h3><a href="#">Registrar</a></h3>
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>

        <div className="app__search">
          <h5>Busqueda</h5>
          <span className="material-symbols-outlined">search</span>
        </div>

        <nav className="app__menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Enterate</a></li>
            <li><a href="#">Equipos</a></li>
            <li><a href="#">Partidos</a></li>
            <li><a href="#">Páginas</a></li>
            <li><a href="#">Comprar merch oficial</a></li>
            <li><a href="#">Boletas</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="app__buttons">
        <input
          type="text"
          className="app__buttons-search-bar"
          placeholder="Buscar por nombre jugador..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="app__buttons-controls">
          <button onClick={handleHighlightEvenRows}>Filas Impares</button>
          <button onClick={handleHighlightOddRows}>Filas Pares</button>
          <button onClick={handleShowPlayers1To10}>Traer de 1 a 10</button>
          <button onClick={handleShowPlayers11To20}>Traer de 11 a 20</button>
        </div>
      </section>

      <section className="app__table">
        <h2>TOP SCORERS</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>PLAYER</th>
              <th>POSITION</th>
              <th>GOALS</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player, index) => (
              <tr
                key={player.id}
                className={
                  highlightEvenRows && index % 2 === 0
                    ? 'highlight'
                    : highlightOddRows && index % 2 !== 0
                    ? 'highlight-odd'
                    : ''
                }
              >
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="app__footer">
        <div className="app__footer-icons">
          <img src="/path/to/Insta.png" alt="Instagram" />
          <img src="/path/to/pinterest.png" alt="Pinterest" />
          <img src="/path/to/telegram.png" alt="Telegram" />
          <img src="/path/to/Tiktok.png" alt="Tiktok" />
          <img src="/path/to/X.png" alt="X" />
        </div>
      </footer>
    </div>
  );
}

export default App;
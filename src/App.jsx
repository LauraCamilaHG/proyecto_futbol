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

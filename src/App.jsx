import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener tus estilos en este archivo o ajusta la ruta según sea necesario

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightEvenRows, setHighlightEvenRows] = useState(false);
  const [highlightOddRows, setHighlightOddRows] = useState(false);
  const [range, setRange] = useState([0, 20]); // Estado para controlar el rango de jugadores a mostrar

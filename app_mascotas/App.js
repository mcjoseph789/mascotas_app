/**
 * PROYECTO APP VETERINARIA MILANESO
 * FUNCIÓN: Mostrar información de las mascotas
 */

/**
 * IMPORTACIÓN DE LIBRERIAS
 */
import React from 'react';
import ListaMascotas from './components/ListaMascotas';
import Header from './components/Header';
/**
 * INICIO DE LA APP
 */
const App = () => {
  return (
    <>
      <Header titulo={'Veterinaria El Milaneso'} />
      <ListaMascotas />
    </>
  );
};

/**
 * EXPORTAR APP PRINCIPAL
 */

export default App;

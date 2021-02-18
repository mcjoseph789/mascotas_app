/**
 * IMPORTACIÓN DE LIBRERIAS
 */
import React from 'react';
import {Appbar} from 'react-native-paper';
/**
 * Objeto Header
 * PROPS: Texto con el título a mostrar
 * RETURN: Barra de contenido con el título
 */
const Header = (props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.titulo} />
    </Appbar.Header>
  );
};

/**
 * EXPORTAR Header
 */
export default Header;

/**
 * IMPORTACIÓN DE LIBRERIAS
 */
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import CardItem from './CardItem';

/**
 * Clase ListaMascotas
 * Función: Recibe la lista de mascotas desde el servicio REST mediante la IP PÚBLICA
 * IP: 181.52.207.30
 */
class ListaMascotas extends Component {
  /**
   * Variable de estado
  */
  state = {listaMascotas: []};

  /**
   * Respuesta REST con AXIOS
   */
  componentDidMount() {
    const url =
      'http://181.52.207.30:8080/WSRESTMASCOTAS/webresources/udenar.mascotas';
    axios
      .get(url)
      .then((response) => {
        this.setState({listaMascotas: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * Llamado al modulo CardItem por cada mascota encontrada en el estado listaMascotas
   */
  listaAMostrar = () => {
    return this.state.listaMascotas.map((mascota) => {
      return <CardItem key={mascota.id} mascota={mascota}></CardItem>;
    });
  };

  /**
   * Render de la vista
   */
  render() {
    return <ScrollView>{this.listaAMostrar()}</ScrollView>;
  }
}

/**
 * Exportar ListaMascotas
 */
export default ListaMascotas;

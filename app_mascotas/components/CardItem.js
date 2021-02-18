/**
 * IMPORTACIÓN DE LIBRERIAS
 */
import React from 'react';
import {Linking} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

/**
 * Objeto CardItem
 * PROPS: Objeto Mascota
 * RETURN: Item con la información principal de la mascota
 */
const CardItem = (props) => {
  return (
    <Card>
      <Card.Cover source={{uri: props.mascota.fotografia}} />
      <Card.Content>
        <Title>Nombre: {props.mascota.nombre}</Title>
        <Paragraph>Raza: {props.mascota.raza}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => Linking.openURL(props.mascota.url)}>
          Mas información
        </Button>
      </Card.Actions>
    </Card>
  );
};

/**
 * EXPORTAR CardItem
 */
export default CardItem;

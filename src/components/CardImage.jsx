import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export default CardImage = ( {item} ) => {
  return (
    <View>
      <Image source={{uri: item.img}} alt={item.title} style={styles.image}></Image>
      <View style={styles.containerStar}>
        <FontAwesomeIcon icon={faStar} size={12} color='#EEBA00'/>
        <Text style={styles.calification}>{item.calification}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 105,
    borderRadius: 10,
    marginRight: 14
  },
  containerStar: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#FBEDB7',
    borderRadius: 9,
    paddingVertical: 4,
    paddingHorizontal: 8,
    top: 77,
    left: 25,
  },
  calification: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
})
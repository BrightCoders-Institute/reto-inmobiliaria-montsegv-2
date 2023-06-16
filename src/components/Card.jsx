import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faLocationDot, faBed, faBath, faRulerCombined} from '@fortawesome/free-solid-svg-icons';

export default Card = ({item}) => {
  return (
      <View>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.container}>
          <FontAwesomeIcon icon={faLocationDot} color={'#4B4B4B'}/>
          <Text style={styles.address}>{item.location}</Text>
        </View>

        <View style={styles.container}>
          <FontAwesomeIcon icon={faBed} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.rooms}</Text>
          <FontAwesomeIcon icon={faBath} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.bathrooms}</Text>
          <FontAwesomeIcon icon={faRulerCombined} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.area}</Text>
        </View>

        <Text style={styles.price}>{item.price}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  address: {
    marginLeft: 4,
    marginBottom: 8
  },
  number: {
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 28,
    marginLeft: 10
  },
  price: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 17,
    marginTop: 12
  },
})
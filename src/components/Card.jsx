import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faLocationDot, faBed, faToilet, faRulerCombined} from '@fortawesome/free-solid-svg-icons';

export default Card = ({item}) => {
  return (
      <View>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.containerRow}>
          <FontAwesomeIcon icon={faLocationDot} color={'#4B4B4B'}/>
          <Text style={styles.address}>{item.location}</Text>
        </View>

        <View style={styles.containerRow}>
          <FontAwesomeIcon icon={faBed} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.rooms}</Text>
          <FontAwesomeIcon icon={faToilet} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.bathrooms}</Text>
          <FontAwesomeIcon icon={faRulerCombined} color={'#4B4B4B'}/>
          <Text style={styles.number}>{item.area}</Text>
        </View>

        <Text style={styles.price}>{item.price}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginBottom: 6
  },
  address: {
    marginLeft: 4,
    marginBottom: 8
  },
  number: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 28,
    marginLeft: 10
  },
  price: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    marginTop: 6
  },
})
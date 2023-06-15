import * as React from 'react';
import { FlatList } from 'react-native';
import apartments from '../data/apartments.json';
import CardDetailsScreen from './CardDetailsScreen';

const HomeScreen = () => {
  return (
    <FlatList
      data={apartments["apartments"]}
      renderItem={CardDetailsScreen}
      keyExtractor={item => item.id}
      vertical
    />
  )
}

export default HomeScreen;
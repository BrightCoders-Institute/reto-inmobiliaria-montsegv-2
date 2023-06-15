import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import CardImage from '../components/CardImage';
import LikeButton from '../components/LikeButton';

const CardDetailsScreen = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <CardImage item={item}/>
        <Card item={item}/>
        <LikeButton/>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FDFF',
    borderRadius: 15,
    padding: 18, 
    marginVertical: 8,
    marginHorizontal: 14
  }
});

export default CardDetailsScreen
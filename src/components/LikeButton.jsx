import React from 'react'
import {View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default LikeButton = () => {
  return (
      <View style={styles.containerHeart}>
        <FontAwesomeIcon icon={faHeart} size={14} color={'white'}/>
      </View>
  )
}

const styles = StyleSheet.create({
  containerHeart: {
    alignSelf: "flex-end",
    backgroundColor: '#00B074',
    borderRadius: 150 / 2,
    padding: 7,
    top: 8,
    left: -55,
  }
})
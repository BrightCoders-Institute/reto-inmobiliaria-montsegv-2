import React, {useState} from 'react'
import {View, StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default LikeButton = () => {

  const [liked, setLiked] = useState(false)

  return (
      <View style={styles.containerHeart}>

        <Pressable onPress={() => setLiked(!liked)}>
          <FontAwesomeIcon 
            icon={faHeart} 
            size={14} 
            color={liked ? 'red' : 'white'}
          />
        </Pressable>
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
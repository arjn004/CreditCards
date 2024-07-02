import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SvgImageBackground from '../ImageBackground/SvgImageBackground'
import { cardBackground1 } from '../../assets/svgimages/svgimages'

const CardComponent = ({svgImage}) => {
  return (
    <View>
      <SvgImageBackground svgImage={cardBackground1}>
        <View style={styles.overlay}> 
            <Text>Arjun</Text>
        </View>
        </SvgImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
})
export default CardComponent
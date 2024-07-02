import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SvgImageWrapper from '../../wrappers/svgImageWrapper/SvgImageWrapper'
import { tipsIcon } from '../../assets/svgimages/svgimages'
import CustomText from '../customText/CustomText'
import { colors } from '../../assets/colors/colors'

const TipsComponnet = () => {
  return (
    <View style={styles.root}>
        <View style={styles.svgContainer}>
      <SvgImageWrapper xml={tipsIcon}
      
      width={25}
      height={25}
      />
      </View>
      <View style={styles.textContainer}>
      <CustomText label='Tips'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.grey, 
        width: 99,
        height: 52, 
        alignItems: "center", 
        flexDirection: "row", 
        borderRadius: 5,
    },
    svgContainer:{
        height: "100%", 
        width: "50%",
        alignItems: "center", 
        justifyContent: "center"
    },
    textContainer:{
        height: "100%", 
        width: "50%", 
        justifyContent: "center"
    }
})

export default TipsComponnet
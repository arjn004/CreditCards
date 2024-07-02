import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CustomText from '../../components/customText/CustomText';
import SvgImageWrapper from '../../wrappers/svgImageWrapper/SvgImageWrapper';
import {
  cardChipIcon,
  tapAndPayIcon,
  visaIcon,
} from '../../assets/svgimages/svgimages';
import { colors } from '../../assets/colors/colors';

const SvgImageBackground = ({ cardimageType, cardHolderName, expiryDate, cardNumber, bankName }) => {
  return (
    <ImageBackground source={cardimageType} style={styles.background}>
      <View style={{ height: "64%", width: "100%", justifyContent: 'center', paddingHorizontal: 20 }}>
        <View>
          <CustomText textStyle={{ fontSize: 18, marginLeft: 5, fontWeight: '400' }} label={bankName} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <SvgImageWrapper xml={cardChipIcon} height={42.06} width={54} />
            <SvgImageWrapper xml={tapAndPayIcon} height={54} width={34} />
          </View>
          <CustomText textStyle={{ marginLeft: 5, fontSize: 32, fontWeight: '500' }} label={cardNumber} />
        </View>
      </View>
      <View style={styles.footerDesign}>
        <View>
          <CustomText textStyle={{ fontSize: 10 }} label="Card Holder Name" />
          <CustomText textStyle={{ fontSize: 20 }} label={cardHolderName} />
        </View>
        <View>
          <CustomText textStyle={{ fontSize: 10 }} label="Expires on" />
          <CustomText textStyle={{ fontSize: 20 }} label={expiryDate} />
        </View>
        <View>
          <SvgImageWrapper xml={visaIcon} height={54} width={54} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 380,
    height: 237.5,
  },
  footerDesign: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "36%",
    width: "100%",
    alignItems: 'center',
    paddingHorizontal: 25,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
});

export default SvgImageBackground;

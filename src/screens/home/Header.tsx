import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomText from '../../components/customText/CustomText';
import SvgImageWrapper from '../../wrappers/svgImageWrapper/SvgImageWrapper';
import {profile} from '../../assets/svgimages/svgimages';
import TipsComponnet from '../../components/tipsComponent/TipsComponnet';
import {colors} from '../../assets/colors/colors';

const Header = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View>
          <SvgImageWrapper xml={profile} height={65} width={65} />
        </View>
        <TipsComponnet />
      </View>
      <View>
        <CustomText
          textStyle={{fontSize: 37, fontWeight: '500'}}
          label="All Your Credit Cards"
        />
      </View>
      <View style={{marginBottom: 30}}>
        <CustomText
          textStyle={{fontSize: 21}}
          label="Find all your credit cards here"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.black,
    width: '100%',
    height: '28%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;

import { View, Text, TextStyle } from 'react-native';
import React from 'react';

interface CustomTextProps {
  label: string;
  textStyle?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({ label, textStyle }) => {
  return (
    <View>
      <Text style={[{ color: "white" }, textStyle]}>{label}</Text>
    </View>
  );
}

export default CustomText;

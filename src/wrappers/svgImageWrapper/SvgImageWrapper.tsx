import React from "react";
import { ViewProps } from "react-native";
import { SvgXml } from "react-native-svg";

interface SvgImageWrapperProps {
  xml: string;
  width?: number | string;
  height?: number | string;
  style?: any;
}

const SvgImageWrapper: React.FC<SvgImageWrapperProps> = ({
  xml,
  width,
  height,
  style,
}) => {
  return <SvgXml xml={xml} width={width} height={height} style={style}/>;
};

export default SvgImageWrapper;

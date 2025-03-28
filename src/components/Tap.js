import React from "react";
import { View, TouchableOpacity, TouchableNativeFeedback } from "react-native";

import { IS_ANDROID, IS_LT_LOLLIPOP } from "../utils";
import { TapDefaultProps, TapProps } from "../common/properties";

const Tap = ({
  children = TapDefaultProps.children,
  style = TapDefaultProps.style,
  onPress = TapDefaultProps.onPress,
}) => {
  if (IS_ANDROID && !IS_LT_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={onPress}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

Tap.propTypes = TapProps;

export default Tap;

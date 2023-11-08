import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { idText } from "typescript";

const AvatarIcon = () => {
  return (
    <View style={{ width: 100, height: 100, marginBottom:10 }}>
      <Image
        source={require("./../../../../assets/img/avatar-2.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: "white",
          padding: 2,
        }}
      />
    </View>
  );
};

export default AvatarIcon;

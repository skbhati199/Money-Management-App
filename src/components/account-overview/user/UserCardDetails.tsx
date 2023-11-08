import { View, Image, Text } from "react-native";
import React from "react";
import AvatarIcon from "./AvatorIcon";

export default function UserCardDetails() {
  return (
    <View className="flex flex-row mx-4 mt-2 justify-start items-center">
      <AvatarIcon />
      <View className="ml-2">
        <Text className="text-black">Good morning</Text>
        <Text className="text-black font-bold text-2xl mt-2">Taarini Bhati</Text>
      </View>
    </View>
  );
}

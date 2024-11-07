import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { name: "Abebe" },
  { name: "Kebede" },
  { name: "Mulugeta" },
  { name: "Mekonnen" },
  { name: "Tsegaye" },
  { name: "Tadesse" },
  { name: "Mekuria" },
  { name: "Alemayehu" },
];

const List = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <Text key={index}>{item.name}</Text>}
    />
  );
};

// const styles = StyleSheet.create({});

export default List;

import { StyleSheet, Text, View } from "react-native";
import List from "./List";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>My name is yasub demissie.</Text>
      <List />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e34",
    justifyContent: "center",
    alignItems: "center",
  },
});

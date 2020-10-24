import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>
      Hi there!
    </Text>
    <Button
      onPress={() => {
        console.log('button pressed');
        props.navigation.navigate('Components');
      }}
      title="Go to components demo"
    />
    <Button
      title="Go to List Demo"
      onPress={() => {
        props.navigation.navigate('List');
      }}
    />
    <Button
      title="Go to Image Screen"
      onPress={() => {
        props.navigation.navigate('Image')
      }}
    />
    {/* <TouchableOpacity onPress={() => {
      console.log('List pressed');
      props.navigation.navigate('List');
    }}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

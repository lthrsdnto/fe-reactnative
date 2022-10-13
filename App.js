import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Header,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ScrollView style={[styles.scrollview]}>
      <View style={[styles.container]}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
            fontSize: 40,
          }}>
          count: {count}
        </Text>
        <View style={[styles.buttonbox]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text>increment by 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCount(count - 1);
            }}>
            <Text>decrement by 1</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCount(0);
          }}>
          <Text>reset</Text>
        </TouchableOpacity>
        {count ? (
          <View style={[styles.box, {backgroundColor: 'orange'}]} />
        ) : null}
        <View style={[styles.box, {backgroundColor: 'red'}]} />
        <View style={[styles.box, {backgroundColor: 'gray'}]} />
        <View style={[styles.box, {backgroundColor: 'blue'}]} />
        <View style={[styles.box, {backgroundColor: 'green'}]} />
        <View style={[styles.box, {backgroundColor: 'violet'}]} />
        <View style={[styles.box, {backgroundColor: 'purple'}]} />
        <View style={[styles.box, {backgroundColor: 'pink'}]} />
        <View style={[styles.box, {backgroundColor: 'indigo'}]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'yellow',
  },
  buttonbox: {
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 5,
    borderWidth: 5,
  },
  button: {
    color: 'white',
    margin: 8,
    padding: 10,
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default App;

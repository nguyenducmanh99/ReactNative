import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const SettingsScreen = () => {
  const users = [
    {
      name: 'brynn',
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Card>
      <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider />
      {users.map((u, i) => {
        return (
          <View key={i}>
            <TouchableOpacity key={i} style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{uri: u.avatar}}
              />
              <Text style={styles.name}>{u.name}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </Card>
  );
};
export default SettingsScreen;
const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    paddingTop: 16,
    paddingLeft: 20,
    textTransform: 'uppercase',
  },
});

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import anh1 from '../../assets/img/anh1.jpeg';
import anh2 from '../../assets/img/anh2.jpeg';
import anh3 from '../../assets/img/anh3.jpg';
import anh4 from '../../assets/img/anh4.jpg';
import anh5 from '../../assets/img/anh5.jpg';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, ListItem, Avatar} from 'react-native-elements';
const FriendScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userInfo, setUserInfo] = useState(1);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const list = [
    {
      name: 'Friend 1',
      avatar_url: anh1,
      subtitle: 'Male',
      follow: 100,
    },
    {
      name: 'Nguyễn Đức Mạnh',
      avatar_url: anh2,
      subtitle: 'Female',
      follow: 250,
    },
    {
      name: 'Friend 3',
      avatar_url: anh3,
      subtitle: 'Female',
      follow: 300,
    },
    {
      name: 'Friend 4',
      avatar_url: anh4,
      subtitle: 'Male',
      follow: 50,
    },
    {
      name: 'Friend 4',
      avatar_url: anh5,
      subtitle: 'Male',
      follow: 80,
    },
  ];
  const getInfo = (item, index) => {
    setUserInfo(index);
  };
  return (
    <>
      <SafeAreaProvider
        style={backgroundStyle}
        contentInsetAdjustmentBehavior="automatic">
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.info}>
              <Image
                size="large"
                source={list[userInfo].avatar_url}
                rounded
                title="M7"
                activeOpacity={(0, 7)}
                style={styles.avatar}
              />
              <Text style={styles.name}>{list[userInfo].name}</Text>
            </View>
            <View style={styles.action}>
              <Button
                icon={<Ionicons name="eye" size={15} color="black" />}
                iconLeft
                title="View Profile"
                style={styles.button1}
              />
              <Button
                icon={<Ionicons name="add-outline" size={15} color="black" />}
                iconLeft
                title="Add Friend"
                style={styles.button1}
              />
            </View>
          </View>
          <View style={styles.container2}>
            {list.map((item, index) => (
              <TouchableOpacity
                key={index}
                bottomDivider
                style={styles.row}
                onPress={() => {
                  getInfo(item, index);
                }}>
                <Image source={item.avatar_url} style={styles.avt} />
                <ListItem.Content style={styles.subInfo}>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                  icon={
                    <Ionicons
                      name="checkmark"
                      size={20}
                      color="#7CFC00"
                      style={{paddingRight: 8}}
                    />
                  }
                  title={'+' + item.follow}
                  style={styles.button2}
                />
                <Ionicons
                  name="person-add"
                  color="#333"
                  size={30}
                  style={styles.nextIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  info: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 22,
    backgroundColor: 'white',
    marginTop: 10,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 15,
  },
  container2: {
    marginTop: 15,
    width: '100%',
  },
  avt: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  subInfo: {
    marginLeft: 10,
  },
  button2: {
    marginTop: 6,
    marginRight: 15,
    width: 90,
    height: 40,
  },
  nextIcon: {
    alignItems: 'center',
    paddingTop: 8,
  },
  action: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    paddingTop: 15,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  image: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 25,
    alignItems: 'center',
    paddingTop: 45,
    color: '#333',
  },
  button1: {
    color: 'blue',
  },
  camera: {
    marginLeft: 'auto',
    top: 200,
    padding: 2,
    borderRadius: 50,
  },
  avatar: {
    backgroundColor: 'gray',
    width: 120,
    height: 120,
    borderRadius: 100,
    opacity: 50,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 70,
    left: 40,
  },
  des: {
    marginTop: 10,
    fontSize: 17,
    color: '#708090',
  },
});
export default FriendScreen;

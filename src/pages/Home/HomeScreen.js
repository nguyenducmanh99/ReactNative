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
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import anh1 from '../../assets/img/anh1.jpeg';
import anh2 from '../../assets/img/anh2.jpeg';
import anh3 from '../../assets/img/anh3.jpg';
import anh4 from '../../assets/img/anh4.jpg';
import anh5 from '../../assets/img/anh5.jpg';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as Storage from '../../storage/storage';
import ProductApi from '../../api/module/ProductApi';
const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    const getInfo = async () => {
      const userName = await Storage._retrieveData('username');
      console.log(userName);
    };
    getInfo();
  }, []);
  useEffect(() => {
    const getAllProduct = async () => {
      const result = await ProductApi.getAll();
      const product = result;
      console.log(product);
    };
    getAllProduct();
  }, []);
  const nextScreen = () => {
    const currentScreen = screen;
    const result = currentScreen + 2 > data.length ? 0 : currentScreen + 1;
    setScreen(result);
  };
  const backScreen = () => {
    const currentScreen = screen;
    const result = currentScreen - 1 < 0 ? data.length - 1 : currentScreen - 1;
    setScreen(result);
  };
  const data = [
    {image: anh3, title: 'Footbal'},
    {image: anh4, title: 'My Friend'},
    {image: anh5, title: 'Trip'},
  ];
  return (
    <>
      <SafeAreaProvider
        style={backgroundStyle}
        contentInsetAdjustmentBehavior="automatic">
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              source={anh1}
              resizeMode="cover"
              style={styles.image}>
              <Ionicons
                name="camera"
                color="#333"
                size={35}
                style={styles.camera}
              />
            </ImageBackground>
            <Image
              size="large"
              source={anh2}
              rounded
              title="M7"
              activeOpacity={(0, 7)}
              style={styles.avatar}
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.name}> Nguyen Duc Manh (NDM7) </Text>
            <Text> 02-12-1999</Text>
            <Text style={styles.about}>About Me</Text>
            <Text style={styles.des}>{data[screen].title}</Text>
          </View>
          <View style={styles.container3}>
            <ImageBackground
              source={data[screen].image}
              resizeMode="cover"
              style={styles.image}>
              <View style={styles.btnRow}>
                <TouchableOpacity style={styles.back}>
                  <Ionicons
                    name="arrow-back-circle"
                    color="#333"
                    size={35}
                    onPress={backScreen}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.next}>
                  <Ionicons
                    name="arrow-forward-circle"
                    color="#333"
                    size={35}
                    onPress={nextScreen}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  container2: {
    alignItems: 'center',
    marginTop: 90,
  },
  btnRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  container3: {
    alignItems: 'center',
    marginTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  about: {
    fontSize: 16,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  camera: {
    marginLeft: 'auto',
    top: 200,
    padding: 2,
    borderRadius: 50,
  },
  avatar: {
    backgroundColor: 'gray',
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 100,
    opacity: 50,
    top: 185,
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
export default HomeScreen;

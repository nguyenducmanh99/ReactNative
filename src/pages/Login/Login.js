import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as Storage from '../../storage/storage';
// import {Icon, Avatar} from 'react-native-elements';
import {setUserLoginInfo} from '../../redux/actions/LoginAction';
// import {selectUserInfo} from '../../redux/selectors/LoginSelector';
import {SocialIcon} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const LoginScreen = ({navigation, LoginReducers}) => {
  console.log('LoginReducers', LoginReducers);

  const dispatch = useDispatch();
  const dataStore = useSelector(state => state.LoginReducers.userInfo);
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    // onlogin().then();
    console.log('dataStore', dataStore);
  });

  const onSubmit = async data => {
    // await console.log('props',props);
    // await dispatch(setUserLoginInfo(data));
    // await console.log('manh', dataStore);
    // await Storage._storeData(data);
    await navigation.navigate('Layout');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <View style={styles.content}>
                <View style={styles.textWrapper}>
                  <Text style={styles.hiText}>Xin Chào!</Text>
                  <Text style={styles.userText}>Nguyen Duc Manh</Text>
                  <Text style={styles.userText}>0358704227</Text>
                </View>
                <View style={styles.form}>
                  <TextInput
                    style={styles.input1}
                    placeholder="Plese input your name!"
                    onChangeText={() => setuserName(userName)}
                    defaultValue={userName}
                  />
                  <TextInput
                    style={[styles.input1, styles.input2]}
                    onChangeText={() => setpassword(password)}
                    defaultValue={password}
                    placeholder="Plese input your password!"
                    secureTextEntry={false}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      onSubmit({userName, password});
                    }}>
                    <Text style={styles.textLogin}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action}>
                    <Text style={styles.surAction}>Forgot Password</Text>
                    <Text
                      style={styles.surAction}
                      onPress={() => {
                        navigation.navigate('Register');
                      }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.social}>
                    <SocialIcon
                      title="Sign In With Facebook"
                      button
                      // light
                      type="facebook"
                    />
                    <SocialIcon
                      title="Sign In With Instagram"
                      button
                      light
                      // style={styles.ig}
                      type="instagram"
                      iconColor="pink"
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </>
  );
};

const mapStateToProps = ({LoginReducers}) => ({
  LoginReducers,
});

const mapDispatchToProps = {
  info: setUserLoginInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const input = {
  backgroundColor: '#fff',
  lineHeight: 30,
  width: 300,
  marginTop: 25,
  borderRadius: 26,
  fontSize: 18,
  paddingLeft: 35,
  justifyContent: 'center',
  alignItems: 'center',
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 70,
    left: 40,
  },
  form: {
    maxWidth: '100%',
    margin: 'auto',
  },
  hiText: {
    ...TEXT,
    fontSize: 36,
    lineHeight: 30,
    paddingTop: 12,
  },
  userText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 20,
    paddingTop: 10,
  },
  input1: {
    ...input,
    height: 52,
    fontSize: 18,
    paddingBottom: 12,
    paddingTop: 2,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#A9A9A9',
    height: 35,
    marginTop: 20,
    opacity: 1.0,
    borderRadius: 20,
  },
  textLogin: {
    color: '#fff',
  },
  surAction: {
    ...TEXT,
    textDecorationLine: 'underline',
  },
  social: {
    marginTop: 30,
  },
  action: {
    marginTop: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import React, {useState} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {TextInput} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const image = {
  uri: 'https://1.bp.blogspot.com/-_h9I9nfDCKI/Xsxwlr6cRxI/AAAAAAAAlvQ/xxhnbe-91wEC_ClKOLMa66TTCF5so70XQCLcBGAsYHQ/s1600/Hinh-nen-dep-dt%2B%25281%2529.jpg',
};
const RegisterScreen = ({navigation}) => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [male, setmale] = useState(false);
  const [female, setfemale] = useState(false);
  const onSubmit = async data => {
    await console.log(data);
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
              <ScrollView>
                <View style={styles.content}>
                  <View style={styles.textWrapper}>
                    <Text style={styles.hiText}>Register Account</Text>
                  </View>
                  <View style={styles.form}>
                    {/* 1 */}
                    <View style={styles.headerForm}>
                      <Ionicons name="person" color="#333" size={30} />
                      <Text style={styles.label}>User Name</Text>
                    </View>
                    <TextInput
                      style={styles.input1}
                      placeholder="Plese input your name!"
                      onChangeText={userName => setuserName(userName)}
                      defaultValue={userName}
                      inlineImageLeft={image}
                    />
                    {/* 2 */}
                    <View style={styles.headerForm}>
                      <Ionicons name="key" color="#333" size={30} />
                      <Text style={styles.label}>Password</Text>
                    </View>
                    <TextInput
                      style={[styles.input1, styles.input2]}
                      onChangeText={password => setpassword(password)}
                      defaultValue={password}
                      placeholder="Plese input your password!"
                      secureTextEntry={false}
                    />
                    {/* 3 */}
                    <View style={styles.headerForm}>
                      <Ionicons name="mail" color="#333" size={30} />
                      <Text style={styles.label}>Mail</Text>
                    </View>
                    <TextInput
                      style={[styles.input1, styles.input2]}
                      onChangeText={password => setpassword(password)}
                      defaultValue={password}
                      placeholder="Plese input your mail!"
                      secureTextEntry={false}
                    />
                    {/* 4 */}
                    <View style={styles.headerForm}>
                      <Ionicons name="ios-call" color="#333" size={28} />
                      <Text style={styles.label}>Phone</Text>
                    </View>
                    <TextInput
                      style={[styles.input1, styles.input2]}
                      onChangeText={password => setpassword(password)}
                      defaultValue={password}
                      placeholder="Plese input your phone!"
                      secureTextEntry={false}
                    />
                    <View style={styles.gender}>
                      <CheckBox
                        title="Male"
                        checkedColor="green"
                        checked={male}
                        onPress={() => {
                          setmale(!male);
                        }}
                      />
                      <CheckBox
                        title="Female"
                        checkedColor="green"
                        checked={female}
                        onPress={() => {
                          setfemale(!female);
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        onSubmit({userName, password});
                      }}>
                      <Text style={styles.textLogin}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </>
  );
};

const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const input = {
  backgroundColor: '#fff',
  lineHeight: 30,
  width: 300,
  marginTop: 10,
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
    marginTop: 20,
  },
  headerForm: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 5,
  },
  label: {
    fontSize: 19,
    color: '#fff',
    textTransform: 'uppercase',
    //  textDecorationLine: 'underline',
    paddingTop: 4,
    paddingLeft: 15,
  },
  hiText: {
    ...TEXT,
    fontSize: 36,
    lineHeight: 30,
    paddingTop: 6,
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
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 4,
  },
  gender: {
    marginTop: 15,
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
  action: {
    marginTop: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
});
export default RegisterScreen;

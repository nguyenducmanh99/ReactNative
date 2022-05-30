import {AsyncStorage, Alert} from 'react-native';
export const _storeData = async data => {
  console.log(data);
  try {
    await AsyncStorage.setItem('username', data.userName);
    await AsyncStorage.setItem('password', data.password);
  } catch (error) {
    Alert.alert(error);
  }
};
export const _retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    Alert.alert(error);
  }
};

// import EncryptedStorage from 'react-native-encrypted-storage';

// const PREFIX_KEY = "niwzi_scan_app";
// const saveItem = async (value, key) => {
//     try {
//         return await EncryptedStorage.setItem(PREFIX_KEY + key, JSON.stringify(value));
//     } catch (error) {
//         if (__DEV__) {
//             console.log("Error saving data" + error, "Value: ", JSON.stringify(value));
//         }
//     }
//     return false;
// };

// const getItem = async (key) => {
//     try {
//         let result = await EncryptedStorage.getItem(PREFIX_KEY + key);
//         return result ? JSON.parse(result) : null;
//     } catch (error) {
//         if (__DEV__) {
//             console.log("Error read data" + error);
//         }

//     }
//     return null;
// };

// const removeItem = async (key) => {
//     try {
//         return await EncryptedStorage.removeItem(PREFIX_KEY + key);
//     } catch (error) {
//         if (__DEV__) {
//             console.log("Error remove data" + error);
//         }
//     }
//     return false;
// };

// export default {
//     saveItem,
//     getItem,
//     removeItem,
// };

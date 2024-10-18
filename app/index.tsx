import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Image, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const backgroundImage = require('../assets/images/logo1.png');
// const shieldImage = require('../assets/images/logo3.png');
const characterImage = require('../assets/images/logo4.png');
const closeIconImage = require('../assets/images/logo5.png');
const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-regular': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-italic': require('../assets/fonts/Poppins-Italic.ttf'),
    'poppins-bolditalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),

  });
};
export default function LoginScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, navigate to the history screen
    router.push('/histroyScreen');
  };
  React.useEffect(() => {
    const loadFonts = async () => {
        try {
            await fetchFonts();
            setFontsLoaded(true);
        } catch (error) {
            console.error(error);
        }
    };
    loadFonts();
}, []);
  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="stretch">
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.responseText}>Response &gt;</Text>
          <Text style={styles.loginPrompt}>Please Now Login</Text>
        </View>



        <View style={styles.contentContainer}>

          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={characterImage} style={styles.characterImage} />
              <View style={styles.footer}>
                <Text style={styles.subtitle}>THE BETTER SIDE</Text>
                <Text style={styles.subtitle}>OF BEATING</Text>
              </View>
              
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label}>ACCOUNT</Text>
              <TextInput style={styles.input} defaultValue="ASK.JAG" />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.label1}>PASSWORD</Text>
              <TextInput style={styles.input} defaultValue="* * * *" secureTextEntry />
              <TouchableOpacity style={styles.enterButton} onPress={handleLogin}>
                <Text style={styles.enterButtonText}>ENTER</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.closeButton}>
              <Image source={closeIconImage} style={styles.closeIcon} />
              <Text style={styles.closeButtonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 10,
    marginTop: 5,
  },
  responseText: {
    color: '#FFA500',
    fontSize: 16,
    marginRight: 30,
    fontFamily: 'poppins-extrabold',

  },
  loginPrompt: {
    color: '#FFA500',
    fontSize: 16,
  },
  borderContainer: {
    alignItems: 'center',
    borderColor: '#8B4513',
    paddingVertical: 10,
  },
  shieldImage: {
    width: 770,
    marginTop: 20,
    height: 200,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  characterImage: {
    // width: 200,
    // height: 120,
  },
  inputContainer: {
    flex: 1,
    marginTop: 80,
  },
  inputRow: {
    marginBottom: 10,
    flexDirection: 'row', marginRight: 10,
  },
  label: {
    color: '#32CD32',
    fontSize: 20,
    marginRight: 30,
  },
  label1: {
    color: '#32CD32',
    fontSize: 20,
    marginRight: 20,
  },
  input: {
    backgroundColor: 'white',
    color: '#FFA500',
    borderRadius: 5,
    padding: 3,
    height: 35,
    borderColor: '#FFA500',
    borderWidth: 2,
    width: 150,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: '22%'
  },
  enterButton: {
    marginBottom: 10,
    marginLeft: 100,
  },
  enterButtonText: {
    color: '#FFA500',
    fontSize: 25,
    fontWeight: 'bold',
  },
  closeButton: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50
  },
  closeIcon: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
  footer: {
    alignItems: 'flex-end',
    padding: 20,
  },
  subtitle: {
    color: '#32CD32',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
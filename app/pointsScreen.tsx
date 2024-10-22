import { router } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
// Import images
const backgroundImage = require('../assets/images/logo.png');

// const [leftCheckbox, setLeftCheckbox] = useState(false);
const GameScreen = () => {
    const [rightCheckbox, setRightCheckbox] = useState(false);
    const hanldeback =()=>{
        router.back()
      }
      const hanldenext =()=>{
        router.push('/spinScreen');
    }
    return (
        <>
            <StatusBar hidden />

            <View style={styles.container}>
                {/* Background Image */}
                <Image source={backgroundImage} style={styles.backgroundImage} />

                {/* Header Section */}
                <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={hanldeback}>
          <Ionicons name="chevron-back" size={30} color="#FFD700" />
        </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={styles.headerText}>GAMES :-  </Text>
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 2 }}>Papa</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                        <Text style={styles.pointsText}>POINTS :- </Text>
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 2 }}>153076</Text>
                    </View>
                </View>

                <View style={styles.name}>
                    <Text style={styles.titletext}>Game</Text>
                </View>
                <TouchableOpacity onPress={hanldenext}>

                <View style={styles.rightBox}>
                    <Text style={styles.rightBoxText}>FUN TARGET</Text>
                </View>
                </TouchableOpacity>
                {/* <View style={styles.rightBox}>
                    <Text style={styles.rightBoxText}>TARGET</Text>
                </View> */}
                <View style={styles.centerContent}>
                    {/* Left Side - Settings */}
                    <View style={styles.leftIconSection}>
                        {/* <Image source={require('../assets/images/settings-icon.png')} style={styles.settingsIcon} /> */}
                        <Text style={styles.settingsText}>Setting</Text>
                    </View>

                    {/* Right Side - Transform and Registration */}
                    <View style={styles.rightIconSection}>
                        <View style={{marginBottom:30}}>
                            {/* <Image source={require('../assets/images/transform-icon.png')} style={styles.transformIcon} /> */}
                            <Text style={styles.transformText}>POINTS</Text>
                            <Text style={styles.transformText}>TRANSFORM</Text>

                        </View>
                        <Text style={styles.registrationText}>CHILD </Text>
                        <Text style={styles.registrationText}> REGESTRATION</Text>

                    </View>
                </View>

                {/* Check Authenticity Button */}
                <View style={styles.authSection}>
                    <TouchableOpacity>
                        <Text style={styles.authButtonText}>CHECK AUTHENTICITY</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.bottomSection}>
                    {/* Receivables Section */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>

                            <Text style={styles.sectionTitle}>Receivables</Text>
                            <Text style={styles.sectionTitle1}>RECIEVE</Text>
                            <Text style={styles.sectionTitle1}>REJECT</Text>

                        </View>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-around",
                        }}>

                            <Text style={styles.sectionTitle}>Transferables</Text>
                            <Text style={styles.sectionTitle1}>REJECT</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 32 }}>
                        <View style={{ backgroundColor: 'white', height: 60, width: "47%", borderRadius: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.inputText}>Account No</Text>
                            <Text style={styles.inputText}>Amount</Text>
                            <Text style={styles.inputText}>Type</Text>


                        </View>
                        <View style={{ backgroundColor: 'white', height: 60, width: "47%", borderRadius: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.inputText}>Account No</Text>
                            <Text style={styles.inputText}>Amount</Text>
                            <Text style={styles.inputText}>Type</Text>
                        </View>
                    </View>


                    {/* Select All Row */}
                    <View style={styles.selectAllRow}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.checkbox}
                                onPress={() => setRightCheckbox(!rightCheckbox)}
                            >
                                {rightCheckbox && <View style={styles.checkboxInner} />}
                            </TouchableOpacity>
                            <Text style={styles.selectAllText}>SELECT ALL</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity
                                style={styles.checkbox}
                                onPress={() => setRightCheckbox(!rightCheckbox)}
                            >
                                {rightCheckbox && <View style={styles.checkboxInner} />}
                            </TouchableOpacity>
                            <Text style={styles.selectAllText}>SELECT ALL</Text>
                        </View>

                    </View>
                    <Text style={{
                        fontSize: 18,
                        color: 'green',
                        marginLeft:20,
                    }}>Response</Text>

                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: "stretch"
    },
    backButton: {
        marginRight: 15,
      },
    header: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginRight: "50%",
        padding: 16,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff9900',
    },
    pointsText: {
        fontSize: 22,
        color: '#ff9900',
    },
    centerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 35,
    },
    leftIconSection: {
        alignItems: 'center',
    },
    rightIconSection: {
        alignItems: 'center',
        // marginRight: 90, // Adjust based on your needs
    },
    // settingsIcon: {
    //     width: 120,
    //     height: 120,
    //     resizeMode: 'contain',
    // },
    // transformIcon: {
    //     width: 80,
    //     height: 80,
    //     resizeMode: 'contain',
    // },
    settingsText: {
        color: 'white',
        fontSize: 12,
        marginTop: 80,
        marginLeft:190
    },
    transformText: {
        color: '#0f0', // Bright green color
        fontSize: 10,
        textAlign: 'center',
        marginTop: 0,
        marginRight:250,
    },
    registrationText: {
        color: '#0f0', // Bright green color
        fontSize: 14,
        // marginTop: 20,
        marginRight:250,

    },
    authSection: {
        alignItems: 'center',
    },
    // authButton: {
    //     backgroundColor: '#ff0000',
    //     paddingVertical: 8,
    //     paddingHorizontal: 20,
    //     borderRadius: 5,
    // },
    authButtonText: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
    },
    centerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centerImage: {
        width: 450,
        height: 400,
        resizeMode: 'cover',
    },
    centerImag2: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    // authButton: {
    //     backgroundColor: 'red',
    //     paddingVertical: 10,
    //     paddingHorizontal: 30,
    //     borderRadius: 10,
    // },
    authText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        position: 'absolute',
        top: 10,
        right: 60,
    },
    titletext: {
        fontSize: 25,
        color: 'green',
    },
    rightBox: {
        position: 'absolute',
        top: 20,
        right: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightBoxText: {
        fontSize: 16,
        color: 'white',
    },
    bottomSection: {
        marginTop: 0,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 18,
        color: 'green',
        
    },
    sectionTitle1: {
        fontSize: 16,
        color: '#ff9900',
        // marginBottom: 10,
        marginLeft: 80
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    inputText: {
        fontSize: 13,
        color: 'black',
    },
    selectAllRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 2,

    },
    checkbox: {
        width: 13,
        height: 13,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },
    checkboxInner: {
        width: 8,
        height: 8,
        backgroundColor: 'white',
    },
    selectAllText: {
        fontSize: 13,
        color: 'white',
        // textDecorationLine: 'underline',
    },
});

export default GameScreen;

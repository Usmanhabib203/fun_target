import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Import images
const backgroundImage = require('../assets/images/logo2.png');
const centerImage = require('../assets/images/logo8.png');
const centerImage2 = require('../assets/images/logo12.png');

const GameScreen = () => {
    return (
        <View style={styles.container}>
            {/* Background Image */}
            <Image source={backgroundImage} style={styles.backgroundImage} />

            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>GAMES - Papa</Text>
                <Text style={styles.pointsText}>POINTS - 153076</Text>
            </View>

            {/* Center Section with Two Images */}
            <View style={styles.centerSection}>
                <Image source={centerImage} style={styles.centerImage} />
                <Image source={centerImage} style={styles.centerImage} />


                <Image source={centerImage2} style={styles.centerImag2} />
            </View>
            <TouchableOpacity style={styles.authButton}>
                <Text style={styles.authText}>CHECK AUTHENTICITY</Text>
            </TouchableOpacity>

            {/* Right Side Box */}
            <View style={styles.name}>
                <Text style={styles.titletext}>Game</Text>
            </View>
            <View style={styles.rightBox}>
                <Text style={styles.rightBoxText}>FUN TARGET</Text>
            </View>

            {/* Bottom Section with Receivables and Transferables */}
            <ScrollView style={styles.bottomSection}>
                {/* Receivables Section */}
                <Text style={styles.sectionTitle}>Receivables</Text>
                <View style={styles.inputRow}>
                    <Text style={styles.inputText}>Account No</Text>
                    <Text style={styles.inputText}>Amount</Text>
                    <Text style={styles.inputText}>Type</Text>
                </View>

                {/* Transferables Section */}
                <Text style={styles.sectionTitle}>Transferables</Text>
                <View style={styles.inputRow}>
                    <Text style={styles.inputText}>Account No</Text>
                    <Text style={styles.inputText}>Amount</Text>
                    <Text style={styles.inputText}>Type</Text>
                </View>

                {/* Select All Row */}
                <View style={styles.selectAllRow}>
                    <Text style={styles.selectAllText}>SELECT ALL</Text>
                </View>
            </ScrollView>
        </View>
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
        resizeMode: 'cover',
    },
    header: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
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
    centerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centerImage: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
    },
    centerImag2: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    authButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    authText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        position: 'absolute',
        top: 20,
        right: 40,
    },
    titletext: {
        fontSize: 25,
        color: 'green',
    },
    rightBox: {
        position: 'absolute',
        top: 80,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightBoxText: {
        fontSize: 20,
        color: 'white',
    },
    bottomSection: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 20,
        color: 'green',
        marginBottom: 10,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    inputText: {
        fontSize: 16,
        color: 'white',
    },
    selectAllRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    selectAllText: {
        fontSize: 18,
        color: 'white',
        textDecorationLine: 'underline',
    },
});

export default GameScreen;

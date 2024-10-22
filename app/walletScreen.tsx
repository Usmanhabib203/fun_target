import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Route } from 'expo-router/build/Route';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const WalletScreen = () => {
    const backhome=()=>{
        router.push('/pointsScreen')
    }
    const handletrasction=()=>{
      router.push('/histroyScreen')
  }
  return (
    <>
          <StatusBar hidden />
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={backhome}>
          <Ionicons name="chevron-back" size={24} color="#FFD700" />
        </TouchableOpacity>      
          <Text style={styles.headerText}>Wallet</Text>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.balanceSection}>
      <View style={styles.balncetext}>

        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <TouchableOpacity onPress={handletrasction}> 
        <Text style={styles.transactionHistory}>Transaction History ›</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.balanceAmount}>₹ 0.00</Text>
        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}>
          <Ionicons name="bag" size={21} color="black" />

            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002b40', // Dark blue background
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    color: '#ffcc00',
    marginRight: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffcc00',
  },
  balanceSection: {
    flex: 1,
    backgroundColor: '#01446a', // Slightly lighter blue section
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  balncetext:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginLeft:50,
    paddingHorizontal:100,
  },
  balanceLabel: {
    fontSize: 30,
    color: '#d3d3d3', // Light text color
    marginBottom: 0,
  },
  transactionHistory: {
    fontSize: 14,
    color: '#d3d3d3',
    // alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop:20,
  },
  balanceAmount: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#ffcc00', // Yellow balance amount
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    paddingHorizontal:70
  },
  button: {
    backgroundColor: '#ffcc00', // Yellow buttons
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 5,
  },
  button1: {
    backgroundColor: '#ffcc00', // Yellow buttons
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 5,
    flexDirection:'row'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#002b40', // Dark text on yellow buttons
  },
});

export default WalletScreen;

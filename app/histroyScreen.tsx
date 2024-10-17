import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { router } from 'expo-router';
const backgroundImage = require('../assets/images/logo6.png');

const HistoryScreen = () => {
  const handleNext = () => {
    // Perform login logic here
    // If login is successful, navigate to the history screen
    router.push('/spinScreen');
  };
  const handleWithdraw = () => {
    // Perform login logic here
    // If login is successful, navigate to the history screen
    router.push('/walletScreen');
  };
  const handlePreview = () => {
    // Perform login logic here
    // If login is successful, navigate to the history screen
    router.push('/pointsScreen');
  };
  const hanldeback =()=>{
    router.back()
  }

  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.background} resizeMode="stretch">

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={hanldeback}>
          <Ionicons name="chevron-back" size={24} color="#FFD700" />
        </TouchableOpacity>
        <View style={{backgroundColor:"#70313f", borderRadius:20,paddingHorizontal:180,marginLeft:90, padding:10}}>
        <Text style={styles.headerTitle}>History</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}onPress={handleWithdraw}>With Draw</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText} onPress={handlePreview}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText} onPress={handleNext}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>
      
      <View style={styles.historyItem}>
      <Text style={styles.itemTitle}>Welcome Bonus</Text>

        <View style={{alignItems:'flex-end'}}>
        <Text style={styles.itemAmount}>+5,000.00</Text>
          <Text style={styles.itemDate}>2023-04-03</Text>
          <Text style={styles.itemTime}>16:27:19</Text>

        </View>
        
      </View>
     
      
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082', // Deep purple background
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal:20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal:5
  },
  activeFilter: {
    backgroundColor: '#FFD700',
  },
  filterText: {
    color: '#FFFFFF',
    paddingHorizontal:30,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8B008B',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width:'80%',
    marginLeft:80,
    paddingVertical:15
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:50
  },
  itemDate: {
    color: '#D3D3D3',
    fontSize: 14,
    marginBottom:10,
  },
  itemTime: {
    color: '#D3D3D3',
    fontSize: 14,
    marginBottom:10,
  },
  itemAmount: {
    color: '#32CD32', // Green color for positive amount
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal:5
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal:15
  },
});

export default HistoryScreen;
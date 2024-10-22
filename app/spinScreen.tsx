import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Image, StatusBar } from 'react-native';
const backgroundImage = require('../assets/images/gamelogo.png');
// const wheelImage = require('../assets/images/wheel.png');

const CasinoGame = () => {
  const handlewithdraw = () => {
    router.push('/walletScreen');
  }
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <View style={styles.scoreContainer}>
              <Text style={styles.headerText}>Score</Text>
              <View style={styles.scoreBox}>
                <Text style={styles.scoreText}>0:00</Text>
              </View>
            </View>
            <View style={styles.winnerContainer}>
              <Text style={styles.headerText}>Winner</Text>
              <View style={styles.winnerBox}>
                <Text style={styles.winnerText}>0:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.timerSection}>
            <View style={styles.timerContainer}>
              <Text style={styles.headerText}>Time</Text>
              <View style={styles.timerBox}>
                <Text style={styles.timerText}>0:19</Text>
              </View>
            </View>
            <View style={styles.lastDateContainer}>
              <Text style={styles.headerText}>Last to Date</Text>
              <View style={styles.lastDateBox}>
                <Text style={styles.lastDateText}>0:19</Text>
              </View>
            </View>
          </View>

          {/* <View style={styles.gameArea}>
            <Image source={wheelImage} style={styles.wheelImage} />
          </View> */}

<View style={styles.betButtonsRow}>
  <View style={styles.betButtonsContainer}>
    {[1, 5, 10, 50].map((bet) => (
      <TouchableOpacity 
        key={bet}
        style={[styles.betButton, getBetButtonStyle(bet)]}
        onPress={() => console.log(`Bet ${bet} placed`)}
      >
        <Text style={styles.betButtonText}>{bet}</Text>
      </TouchableOpacity>
    ))}
  </View>
  
  <View style={styles.betButtonsContainer}>
    {[100, 500, 1000, 5000].map((bet) => (
      <TouchableOpacity 
        key={bet}
        style={[styles.betButton, getBetButtonStyle(bet)]}
        onPress={() => console.log(`Bet ${bet} placed`)}
      >
        <Text style={styles.betButtonText}>{bet}</Text>
      </TouchableOpacity>
    ))}
  </View>
</View>


<View style={styles.actionButtonsContainer}>
  {["Take", "Cancel Bet", "Check Specific Bet", "Bet OK"].map((action) => (
    <TouchableOpacity 
      key={action} 
      style={styles.actionButton}
      onPress={() => console.log(`Action: ${action} pressed`)}
    >
      <Text style={styles.actionButtonText}>{action}</Text>
    </TouchableOpacity>
  ))}
</View>


          <View style={styles.numberButtonsContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <View key={num} style={styles.numberButtonWrapper}>
                <View style={styles.numberBox}></View>
                <TouchableOpacity
                  style={styles.numberButton}
                  onPress={() => console.log(`Button ${num} pressed`)}
                >
                  <Text style={styles.numberButtonText}>{num}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>


          <View style={styles.footer}>
            <TouchableOpacity style={styles.exitButton}>
              <Text style={styles.exitButtonText}>0</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: "#ffd700", padding: 4, borderRadius: 15, paddingHorizontal: 20, }}>
              <Text style={styles.footerText}>Please Bet to Start Game . Minimum Bet=1</Text>
            </View>
            <TouchableOpacity style={styles.exitButton} onPress={handlewithdraw}>
              <Text style={styles.exitButtonText}>Exit</Text>
            </TouchableOpacity>
          </View>


        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
const getBetButtonStyle = (bet: number) => {
  switch (bet) {
    case 1:
    case 5000:
      return styles.greenButton;
    case 5:
    case 1000:
      return styles.yellowButton;
    case 10:
    case 500:
      return styles.purpleButton;
    case 50:
    case 100:
      return styles.redButton;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  scoreContainer: {
    alignItems: 'center',
  },
  winnerContainer: {
    alignItems: 'center',
  },
  scoreBox: {
    backgroundColor: '#ffd700',
    // paddingVertical: 1,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 5,
    borderWidth: 3,
    borderColor: '#ffff00',
    borderStyle: 'dotted',
  },
  scoreText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  winnerBox: {
    backgroundColor: '#ffd700',
    // paddingVertical: 1,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 5,
    borderWidth: 3,
    borderColor: '#ffff00',
    borderStyle: 'dotted',
  },
  winnerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  timerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 2,
  },
  timerContainer: {
    alignItems: 'center',
  },
  lastDateContainer: {
    alignItems: 'center',
  },
  timerBox: {
    backgroundColor: '#ffd700',
    // paddingVertical: 1,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 2,
    borderWidth: 3,
    borderColor: '#ffff00',
    borderStyle: 'dotted',
  },
  timerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  lastDateBox: {
    backgroundColor: '#ffd700',
    // paddingVertical: 1,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginTop: 2,
    borderWidth: 3,
    borderColor: '#ffff00',
    borderStyle: 'dotted',
  },
  lastDateText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheelImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  betButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  betButtonsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(165, 42, 42, 0.7)',
    borderRadius: 20,
    padding: 10,
    marginTop: 8,
  },
  betButton: {
    paddingHorizontal: 10,
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 5,
  },
  betButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  greenButton: {
    backgroundColor: 'green',
  },
  yellowButton: {
    backgroundColor: 'yellow',
  },
  purpleButton: {
    backgroundColor: 'purple',
  },
  redButton: {
    backgroundColor: 'red',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: 'red',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  actionButtonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 16,
  },
  numberButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5
  },
  numberButtonWrapper: {
    alignItems: 'center',
  },
  numberBox: {
    width: 60,
    height: 20,
    backgroundColor: '#ece5a7',
    marginBottom: 5,
    borderRadius: 40,
  },
  numberButton: {
    backgroundColor: '#ff0000',
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffd700',
    borderStyle: 'dotted',

  },
  numberButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerText: {
    color: 'black',
    fontSize: 15,
    backgroundColor: 'white',
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  exitButton: {
    backgroundColor: 'red',
    padding: 0,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#ffd700',
    paddingHorizontal: 15,
  },
  exitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CasinoGame;
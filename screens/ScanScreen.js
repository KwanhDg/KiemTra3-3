import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/orangejuice.png')}
        style={styles.fullScreenImage}
      />
      <View style={styles.scanOverlay}>
        <View style={styles.scanLine} />
      </View>
      <View style={styles.productInfo}>
        <Image
          source={require('../assets/icons/orangejuice.png')}
          style={styles.productIcon}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Lauren's</Text>
          <Text style={styles.productType}>Orange Juice</Text>
        </View>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scanOverlay: {
    position: 'absolute',
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanLine: { width: '100%', height: 2, backgroundColor: '#007bff' },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '90%',
    justifyContent: 'space-between',
  },
  productIcon: { width: 40, height: 40, marginRight: 10 },
  productDetails: { flex: 1 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productType: { fontSize: 14, color: '#666' },
  addButton: {
    backgroundColor: '#007bff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontSize: 20 },
});

export default ScanScreen;

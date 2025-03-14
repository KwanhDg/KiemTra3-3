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
        <View style={styles.cornerTopLeftHorizontal} />
        <View style={styles.cornerTopLeftVertical} />
        <View style={styles.cornerTopRightHorizontal} />
        <View style={styles.cornerTopRightVertical} />
        <View style={styles.cornerBottomLeftHorizontal} />
        <View style={styles.cornerBottomLeftVertical} />
        <View style={styles.cornerBottomRightHorizontal} />
        <View style={styles.cornerBottomRightVertical} />
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
    top: 150,
    left: 44,
    width: 287.5,
    height: 400,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cornerTopLeftHorizontal: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 20,
    height: 3,
    backgroundColor: '#FFF',
  },
  cornerTopLeftVertical: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 3,
    height: 20,
    backgroundColor: '#FFF',
  },
  cornerTopRightHorizontal: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 3,
    backgroundColor: '#FFF',
  },
  cornerTopRightVertical: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 3,
    height: 20,
    backgroundColor: '#FFF',
  },
  cornerBottomLeftHorizontal: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 20,
    height: 3,
    backgroundColor: '#FFF',
  },
  cornerBottomLeftVertical: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 3,
    height: 20,
    backgroundColor: '#FFF',
  },
  cornerBottomRightHorizontal: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 3,
    backgroundColor: '#FFF',
  },
  cornerBottomRightVertical: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 3,
    height: 20,
    backgroundColor: '#FFF',
  },
  productInfo: {
    position: 'absolute',
    bottom: 50,
    left: 42,
    width: 292,
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

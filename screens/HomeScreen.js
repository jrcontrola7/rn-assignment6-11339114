import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../assets/office_wear.png') },
  { id: '2', name: 'Black', price: 120, image: require('../assets/black.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/church_wear.png') },
  { id: '4', name: 'Lamerei', price: 120, image: require('../assets/lamerei.png') },
  { id: '5', name: '21WN', price: 120, image: require('../assets/21wn.png') },
  { id: '6', name: 'Logo', price: 120, image: require('../assets/logo.png') },
  { id: '7', name: 'Lamerei', price: 120, image: require('../assets/dress7.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/church_wear.png') },
  // Add more products as needed
];

const HomeScreen = ({ navigation }) => {
  const addToCart = async (product) => {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Image source={require('../assets/menu_icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image source={require('../assets/open_fashion_logo.png')} style={styles.logo} />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => console.log('Search pressed')}>
            <Image source={require('../assets/search_icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Shopping Bag pressed')}>
            <Image source={require('../assets/shopping_bag_icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerActions}>
        <Text style={styles.ourStory}>OUR STORY</Text>
        <TouchableOpacity onPress={() => console.log('Filter pressed')}>
          <View style={styles.circle}>
            <Image source={require('../assets/listview_icon.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('List View pressed')}>
          <View style={styles.circle}>
            <Image source={require('../assets/filter_icon.png')} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.productDescription}>reversible angora cardigan</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
              <Icon name="add-circle-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 20,
    left: 10,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  product: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 170,
    height: 205,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'light',
    marginVertical: 8,
    right: 43,
  },
  productPrice: {
    fontSize: 14,
    color: '#ff0000',
    top: 17,
    right: 70,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    bottom: 22,
    right: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 96,
    right: 17,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    left: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
    bottom: 15,
  },
  logo: {
    width: 150,
    height: 60,
    bottom: 13,
    left: 10,
  },
  ourStory: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    right: 176,
  },
 
});

export default HomeScreen;